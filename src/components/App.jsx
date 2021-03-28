import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Note, {notes} from './Note';

const App = () => {

    return(
        <div>
            <Header />
            {notes.map(note => 
            <Note 
                key = {note.id}
                title = {note.title}
                content = {note.content}
            />
            )}
        
            <Footer />
        </div>
    )





}

export default App;