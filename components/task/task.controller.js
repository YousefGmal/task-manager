import Task from "./task.model.js";

export const createTask = async (req, res) => {
  try {
    const task = new Task({ ...req.body, user: req.user.userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTasks = async (req, res) => {
    try {
      const filter = { user: req.user.userId };
      if (req.query.status) {
        filter.status = String(req.query.status)
      }
      const tasks = await Task.find(filter);
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user.userId },
      updates,
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({
      _id: id,
      user: req.user.userId,
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const toggleTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id, user: req.user.userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.status = task.status === "completed" ? "incomplete" : "completed";
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
