import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list, handleList] = useState([]);

  function addNote(entry) {
    handleList(prev => {
      return [...prev, entry];
    });

  }

  function deleteNote(index) {
    console.log(index);
    handleList(prev => {
      return prev.filter((item, i) => {
        return i !== index
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {list.map((elt, index) => (<Note key={index} id={index} title={elt.title} content={elt.content} deleteNote={deleteNote} />))}
      <Footer />
    </div>
  );
}

export default App;

