import express from "express";
import cors from "cors";
import userRouter from "../components/user/user.router.js";
import taskRouter from "../components/task/task.router.js";

export const routersMiddlware = (app) => {
  app.use(userRouter);
  app.use(taskRouter);
};

export const configurationMiddlware = (app) => {
  app.use(cors());
  app.use(express.json());
};
