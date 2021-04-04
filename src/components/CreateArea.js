import React, {useState} from 'react';

function CreateArea(props) {

const [note, setNote] = useState({
    title: "",
    content: ""
})

function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
        return {
            ...prevNote,
           [name]: value 
        };
    });

}
function submitNote(event) {
props.onAdd(note)
setNote({
    tite:"", 
    content:""
})

    event.preventDefault();
}

    return (
        <div>
            <form>
                <input 
                name='title' 
                onChange={handleChange} 
                value={note.title} 
                placeholder='Title' />
                <textarea 
                name="content" 
                onChange={handleChange} 
                value={note.content} 
                placeholder='Write Something' 
                cols="30" 
                rows="10"></textarea>
                <button 
                onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}
export default CreateArea;