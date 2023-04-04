import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Notes";
import Create from "./Create";

function App(){

    const [notes, setNotes] = useState([]);
    function addNotes(note){
        setNotes(prevNotes => {
            return[
                ...prevNotes,
                note
            ]
        })
    }

    function deleteNote(id){
        setNotes(prevNotes => {
           return prevNotes.filter((noteItem, index) => {
                return index!==id;
            })
        })
    }

    return (
        <div>
            <Header />
            <Create onAdd={addNotes} />
           
            <Footer />
            <div className="big-box">
            <div className="container">
            { notes.map((noteItem,index) => {
                return <Note
                    key={index} 
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            })} </div> </div>
        </div>
    )
}

export default App;