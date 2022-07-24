import Express from "express";

import { createBug, getBugs, deleteBug } from "../controllers/bugs.js";

const router = Express.Router();

router.get("/", getBugs);
router.post("/", createBug);
router.delete("/", deleteBug);

export default router;
