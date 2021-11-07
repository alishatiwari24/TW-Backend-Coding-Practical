# Alisha-Backend-Coding-Practical

The goal of this practical is to assess your proficiency in software engineering that is related to the daily work that we do at our organization and also to test your debugging skills.

## Documentation

Find the postman collection here: // TODO Publish collection and paste link here

## Guide

- Add the contents of this folder to your own github profile. Name the repository as `TW-Backend-Coding-Practical`. First commit should be named as `Initial commit` and default branch should be `main` branch.
- Follow the below tasks in the given order. 
- Each task should be implemented on its own branch. Each task has a `TASK-00x` number assigned to it. This should be the branch name for peforming that task.
- Once a task is completed, you should create a pull request for that branch against `main` branch. The title for pull request should be the description of the task. Merge the branch and close the pull request once task is done.
- Mark the task as completed (change `[ ]` to `[x]`) before closing the pull request and merging the branch.
- Each commits/pull requests should be made as soon as you complete your task.
- Consider using postman for API documentation. Publish the postman collection and add the link above in Documentation section. Postman collection should contain sample responses for success and failure.

## Tasks

- [ ] TASK-001 - Fix GET `/health` endpoint
- [ ] TASK-002 - Connect to MongoDB via Mongoose
- [ ] TASK-003 - Move PORT to environment file
- [ ] TASK-004 - Define rides model
- [ ] TASK-005 - Get Rides
- [ ] TASK-006 - Add Create/Update Ride routes
- [ ] TASK-007 - Refactor
- [ ] TASK-008 - Add linting (Bonus)
- [ ] TASK-009 - Add cleanup cron job (Bonus)

## Task Description

#### TASK-001 - Fix GET `/health` endpoint

- The Endpoint to check whether API is up or not is not working. Debug why it is not working and fix it.

#### TASK-002 - Connect to MongoDB via Mongoose

- There is a stub function for connecting to mongodb but the logic is not implemented. Complete the function to connect to MongoDB.
- The database name should be `gorides`. 
- The database connection string should be read from environment (`.env`) file.

#### TASK-003 - Move PORT to environment file

- Move the `PORT` to environment file so that we can configure it for different environments.

#### TASK-004 - Define rides model

- Define rides model with schema such that it results in following json.
- `createdAt` and `updatedAt` should not be updated by a user, but should be automatically set/updated by mongodb/mongoose

```json
{
    "start": {
        "lat": 0,
        "long": 0
    },
    "end": {
        "lat": 0,
        "long": 0
    },
    "driver": {
        "name": "John Doe",
        "vehicleNumber": "XXXXXXXXXX",
        "vehicleType": "CAR" // Possible values: CAR, BIKE
    },
    "customers": [{
        "name": "Jane Doe"
    }],
    "createdAt": "2021-01-01T00:00:00.000Z",
    "updatedAt": "2021-01-01T00:00:00.000Z"
}
```

#### TASK-005 - Get Rides

- Add API to GET rides.
- API should accept following parameters for pagination:
    - `page` - Number (1, 2, 3, ...) - Should be a positive integer.
    - `limit` - Number (1, 2, 3, ...) - Should be `0` or a positive integer. If passed as `0`, return all rides.
- Test by inserting dummy data in database.
- Document the API Request and Response.

#### TASK-006 - Add Create/Update Ride routes

- Add API to GET ride by id.
- API should accept ride id as path parameter.
- API should check if ride id passed is a valid object id or not. If not, it should return a `400 Bad request` error with appropriate message.
- Document the API Request and Response.

- Add API to PUT ride by id.
- API should accept ride id as path parameter.
- API should check if ride id passed is a valid object id or not. If not, it should return a `400 Bad request` error with appropriate message.
- API should accept the ride as PUT payload, validate it and update the document in database.
- Document the API Request and Response.

#### TASK-007 - Refactor

- If not already done, move the request handlers for ride routes to a controller in order to separate routes and controllers.
- If not already done, separate request validation from controller.

#### TASK-008 - Add linting

- Add and configure `eslint` as linter.
- Add an npm script to lint the code. (Running `npm run lint` should lint the code)
- Add a `pre-commit` git hook to lint the code before commiting.

#### TASK-009 - Add cleanup cron job

- Add a cron job that deletes rides from database that are older than 1 day (24 hours).
- Make the time configurable from environment (`.env`) file.
- Use `agenda` to configure the cron job.
