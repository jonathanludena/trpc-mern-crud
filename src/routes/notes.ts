import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import Note from "../models/note";

// Queries get data
const getNotes = publicProcedure.query(async () => {
  try {
    const notes = await Note.find();
    return notes;
  } catch (error) {
    if(error instanceof Error)
    console.error(error.message)
  }
});

// Queries mutation data
const createNote = publicProcedure
  .input(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  )
  .mutation(async ({ input }) => {
    const newNote = new Note({
      title: input.title,
      description: input.description,
    });
    const saveNote = await newNote.save();
    return saveNote;
  });

export const notesRouter = router({
  get: getNotes,
  create: createNote,
});
