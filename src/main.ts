import { Hono } from "hono";
import baseApp from "./router/base";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.use("/", serveStatic({ path: "static/index.html" }));

app.get("/test", (c) => {
  return c.json({ status: 200, message: "hello world!" });
});

app.get("/sample", (c) => {
  return c.text("Hello World!!");
});

const api = new Hono();

api.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.route("/", baseApp);
app.route("/api", api);

export default app;
