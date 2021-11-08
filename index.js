import { startServer } from "./src/app.js";
import * as dotenv from "dotenv";
dotenv.config();

(async () => {
  await startServer();
})();
