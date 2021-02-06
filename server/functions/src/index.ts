import cors from "cors";
import express from "express";
import * as functions from "firebase-functions";
import * as fsProjects from "./firebase/firestore";

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// GET routes
app.get("/projects", async (_, res) =>
  res.json(await fsProjects.getAllProjects())
);
app.get("/projects/:id", async (req, res) =>
  res.json(await fsProjects.getProject(req.params.id))
);

// POST routes
app.post("/projects", async (req, res) =>
  res.json(await fsProjects.addProject(req.body))
);

// PATCH routes
app.patch("/projects/:id", async (req, res) =>
  res.json(await fsProjects.updateProject(req.params.id, req.body))
);

// DELETE routes
app.delete("/projects/:id", async (req, res) =>
  res.json(await fsProjects.deleteProject(req.params.id))
);

export const api = functions.https.onRequest(app);
