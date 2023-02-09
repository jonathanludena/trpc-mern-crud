import { publicProcedure, router } from "../trpc";
import { z } from "zod";

// Queries get data
const getNotes = publicProcedure.query(() => {
  return [
    {
      id: 1,
      title: "Note 1",
      content: "Content 1",
    },
  ];
});

// Queries mutation data
const createNote = publicProcedure
  .input(z.object({ 
    title: z.string(), 
    description: z.string().optional() 
  }))
  .mutation(({ input }) => {
    console.log("input", input);
    return "received";
  });

export const notesRouter = router({
  get: getNotes,
  create: createNote,
});
