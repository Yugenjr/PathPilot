import type { FastifyInstance } from "fastify";
import { fetchGoal } from "../service/goalService";

export async function getGoal() {
  const goal = await fetchGoal();

  return goal;
}