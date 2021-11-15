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

    return res.status(200).send({ data: Rides });
  };
}

export const ridesController = new RidesController();
