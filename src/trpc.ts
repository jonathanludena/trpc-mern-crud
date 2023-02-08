import { initTRPC } from "@trpc/server";
import * as trpsExpress from "@trpc/server/adapters/express";

export const createContext = ({
  req,
  res
}: trpsExpress.CreateExpressContextOptions) => ({});

const t = initTRPC.context().create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
