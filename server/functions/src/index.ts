import cors from "cors";
import express from "express";
import * as functions from "firebase-functions";
import * as fsProjects from "./firebase/firestore";

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// GET routes
app.get("/projects", (_, res) => {
  fsProjects.getAllProjects().then((data) => res.json(data));
});
app.get("/projects/:id", (req, res) => {
  fsProjects.getProject(req.params.id).then((data) => res.json(data));
});

// POST routes
app.post("/projects", (req, res) => {
  fsProjects.addProject(req.body).then((data) => res.json(data));
});

// PATCH routes
app.patch("/projects/:id", (req, res) => {
  fsProjects
    .updateProject(req.params.id, req.body)
    .then((data) => res.json(data));
});

// DELETE routes
app.delete("/projects/:id", (req, res) => {
  fsProjects.deleteProject(req.params.id).then((data) => res.json(data));
});

export const api = functions.https.onRequest(app);
