import type { FastifyInstance } from "fastify";

import { getGoal } from "../controllers/goalController";

async function goalRoutes(
  app: FastifyInstance
) {
  app.get("/api/goal", getGoal);
}

export default goalRoutes;