import React, {useState}  from "react";


function Create(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target
        setNote( prevNote => {
            return{
                ...prevNote,
                [name]: value
            }
        })
    }

    function AddNote(event){
        event.preventDefault();
        setNote({
            title: "",
            content: ""
        })
        props.onAdd(note);
    }

    return(
        <div className="add-container">
            <form>
                <input onChange={handleChange} name="title" value={note.title} placeholder="Title"/>
                <textarea name="content"  onChange={handleChange} value={note.content} placeholder="Write a note" rows={3}/>
                <button onClick={AddNote}>Add</button>
            </form>
        </div>
    )
}

export default Create;