import { publicProcedure, router } from "../trpc";

// Query para obtener datos
const getNotes = publicProcedure.query(() => {
  return [];
});

export const notesRouter = router({
  get: getNotes,
});
