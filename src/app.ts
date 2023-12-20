import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  //erro gerado pelo client
  // if (error instanceof AppError) {
  //   return response.status(error.statusCode).json({
  //     status: "error",
  //     message: error.message,
  //   });
  // }
  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});
export { app };
