import express from "express";
import morgan from "morgan";
import trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext, router } from "./trpc";
import { notesRouter } from "./routes/notes";

const app = express();

const appRouter = router({
  note: notesRouter,
});

app.use(morgan("dev"));
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export default app;
