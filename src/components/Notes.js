import React from 'react'
import { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';


const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
    }, [])
    
    const updateNote = (note) => {
        
    }

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {
                    notes.map((note) => {
                        return <Noteitem key={note._id} updateNote = {updateNote} note={note} />;
                    })
                }
            </div>
        </>
    )
}

export default Notes