import {useState} from 'react';
import NoteList from './Component/NoteList.js';
import Search from './Component/Search.js';
import './index.css';
import {nanoid} from "nanoid"

const App = ()=>{
  const [searchText, setSearchText] = useState('');
  const [notes, setNotes] = useState([
    {

     id: nanoid(),
    text: 'This is my first note!',
    date: '15/04/2021',

  },
  {
    id: nanoid(),
    text: 'This is my second note!',
    date: '21/04/2021',
  },
  {
    id: nanoid(),
    text: 'This is my third note!',
    date: '28/04/2021',
  },
  {
    id: nanoid(),
    text: 'This is my new note!',
    date: '30/04/2021',
  },

])

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  };
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNotes = (id)=>{
 const newNotes  = notes.filter((note)=>note.id !== id)
 setNotes(newNotes)

}
  return(

  <div className='container'>
    <Search handleSearchNote={setSearchText} />
    <NoteList 
    notes = {notes.filter((note)=>note.text.toLowerCase().includes(searchText)
      )}
  handleAddNote  = {addNote}
   handleDeleteNotes = {deleteNotes} />

  </div>
  )

}

export default App
