import React, { useState, useRef } from "react" 
const AddArticle = ({ saveArticle }) => { 
  const [title, setTitre] = useState('');
  const [text, setText] = useState('');
  const id = useRef(3);

  const handletitre = (e) => {
    setTitre(e.target.value);
  }
  const handletext = (e) => {
    setText(e.target.value);
  }
  const addNewArticle = (e) => {
    e.preventDefault()
    saveArticle({id: id.current, title: title, body: text});
    id.current += 1;
  }

  return ( 
    <form onSubmit={addNewArticle} className="add-article"> 
      <input 
        type="text" 
        id="title" 
        placeholder="Title" 
        onChange={handletitre} 
      /> 
      <input 
        type="text" 
        id="body" 
        placeholder="Body" 
        onChange={handletext} 
      /> 
      <button type="submit">Add article</button> 
    </form> 
  ) 
} 
export default AddArticle