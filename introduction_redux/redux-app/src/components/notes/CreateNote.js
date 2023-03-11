import { nanoid } from '@reduxjs/toolkit';
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../../Redux/slices/notesSlice';

function CreateNote() {

    const [title,setTitle] = useState("")
    const [ desc,setDesc] = useState("")

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefalut();
        dispatch(createNote({
            // title:title  ** we can write like this also
            title,
            desc,
            id:nanoid(10)
        }))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="title here" type="text" onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="description here"  type="text" onChange={(e) => setDesc(e.target.value)} />
            <input type="submit" onClick={handleSubmit} />

        </form>
    </div>
  )
}

export default CreateNote