import React from "react";
import "./NoteCard.css";
import IcoDelete from "./delete.png"

function TitleCase(str){
return str[0].toUpperCase() + str.slice(1);
}

function deleteNote({index}){
  const savedNotes =JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(savedNotes));
  
  window.location.reload();
}

function NoteCategory({category}){
    const CATEGORY_EMOJIS ={
        "shopping": "🛒",
        "work":"💼",
        "personal" :"🚹",
        "learning" :" 📚",
        "health" : "🏋️‍♀️"
    }

   
   return(
    <div className={`note-card-category bg-${category}`}> 
   <span className="note-category-emoji"> {CATEGORY_EMOJIS[category]}</span> 
   {TitleCase(category)}
    </div>
   )
}

function NoteCard({ index, title, description, category, emoji }) {
  return (
    <div className="note-card">

      <div className="note-card-emoji">{emoji}</div>

      <div>
        <h2 className="note-card-title">{title}</h2>
        <p className="note-card-description">{description}</p>

        <NoteCategory category={category}/>
        <img src={IcoDelete} className="note-card-delete" onClick={()=>{
          deleteNote(index)
        }}/>
      </div>
     

    </div>
  );
}

export default NoteCard;
