import Fastify from "fastify";

import cors from "@fastify/cors";

import goalRoutes from "./routes/goalRoutes";

const app = Fastify();

app.get("/", async () => {
  return {
    message: "Backend running",
  };
});

async function start() {
  await app.register(cors, {
    origin: "http://localhost:5173",
  });

  await app.register(goalRoutes);

  try {
    await app.listen({
      port: 3000,
    });

    console.log(
      "Server running on port 3000"
    );
  } catch (err) {
    console.error(err);

    process.exit(1);
  }
}

start();