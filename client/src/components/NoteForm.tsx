import { ChangeEvent, SyntheticEvent, useState } from "react";
import {trpc} from '../../utils/trpc'

const NoteForm = () => {
  const addNote = trpc.note.create.useMutation()

  const [note, setNote] = useState({
    title:'', 
    description: ''
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log('note', note)
    addNote.mutate(note, {
      onSuccess: () => {
        console.log('Note added successfully')
      }
    })
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNote({...note, [e.currentTarget.name]: e.currentTarget.value})
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        id='title'
        autoFocus
        placeholder='title'
        onChange={handleChange}
      />
      <textarea
        name='description'
        id='description'
        cols={30}
        rows={10}
        onChange={handleChange}
      ></textarea>
      <button>Save</button>
    </form>
  );
};

export default NoteForm;
