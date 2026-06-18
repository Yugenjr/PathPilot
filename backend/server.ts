import Fastify from "fastify";

const app = Fastify();

app.get("/", async () => {
  return {
    message: "Backend is running",
  };
});

app.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);

    process.exit(1);
  }

  console.log("Server running on port 3000");
});

//This code creates a Fastify server, defines a route (/) and starts listening for requests on port 3000.