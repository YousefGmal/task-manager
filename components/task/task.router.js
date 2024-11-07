import express from "express";
import {
  validateBody,
  validateParams,
} from "../../middlewares/validate.middleware.js";
import { params, taskSchema } from "./task.validation.js";
import {
  createTask,
  deleteTask,
  getTasks,
  toggleTaskStatus,
  updateTask,
} from "./task.controller.js";
import auth from "../../middlewares/auth.js";

const router = express.Router();

const version = "api/v1";
router
  .route(`/${version}/task`)
  .post(validateBody(taskSchema), auth, createTask);
router
  .route(`/${version}/task/:id`)
  .put(validateParams(params), validateBody(taskSchema), auth, updateTask)
  .delete(validateParams(params), auth, deleteTask);

router.route(`/${version}/task`).get(auth, getTasks);
router
  .route(`/${version}/task/:id/status`)
  .patch(validateParams(params), auth, toggleTaskStatus);
export default router;
