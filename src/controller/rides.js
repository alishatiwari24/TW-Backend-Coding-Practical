import { Ride } from "../models/rides.model.js";

class RidesController {
  /**
   * It retrieves & returns all available rides
   * sorted by "createdAt"
   * "page" & "limit" parameters are used to apply pagination
   * on available records
   */
  getRides = async (req, res) => {
    const docsToSkip = (+req.query.page - 1) * +req.query.limit;
    const Rides = await Ride.find()
      .limit(+req.query.limit)
      .skip(docsToSkip)
      .sort("createdAt");

    return res.status(200).send({ isError: false, data: Rides });
  };

  /**
   * It updates existing ride details
   */
  updateRide = async (req, res) => {
    const rideId = req.params.id;
    if (!rideId || (rideId && rideId.length !== 24)) {
      return res
        .status(400)
        .send({ isError: true, message: "Please supply a valid ride-id" });
    }
    const rideExist = await Ride.findOne({ _id: rideId });
    if (!rideExist) {
      return res
        .status(400)
        .send({ isError: true, message: "Please supply a valid ride-id" });
    }
    await Ride.updateOne({ _id: rideId }, req.body);

    return res
      .status(200)
      .send({ isError: false, message: "Ride updated successfully" });
  };
}

export const ridesController = new RidesController();
