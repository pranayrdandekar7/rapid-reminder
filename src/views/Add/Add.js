import React, { useState } from "react";
import "./Add.css";
import EmojiPicker from "emoji-picker-react";
import HomeButton from "./../../components/HomeButton/HomeButton"

import toast from "react-hot-toast";

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [emoji, setEmoji] = useState("");
  const [openEmojiDialog, setOpenEmojiDialog] = useState(false);

  const addNote=()=>{
    
    const notes= JSON.parse(localStorage.getItem("notes")) || [];
    
    const noteObject ={
    title,
    description,
    category,
    emoji,
  };

   notes.push(noteObject)

   localStorage.setItem("notes", JSON.stringify(notes));
   toast.success("Notes Added Sucessfully!!")

   setTitle("")
   setCategory("")
   setDescription("")
   setEmoji('')

  }
  
  return (

    <div className="page-background-img">
    <div className="note-container">
      <h1 className="text-center text-primary">✍ Add Note</h1>
      <HomeButton/>

      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="user-input"
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="user-input"
        />

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="user-input-select user-input"
        >
          <option value="">Select Category</option>
          <option value="shopping">Shopping</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="learning">Learning</option>
          <option value="health">Health</option>
        </select>

        <div className="user-input user-input-emoji"onClick={() => setOpenEmojiDialog(true)}>
          {emoji ? emoji:"Select Emoji"}
        </div>

        <EmojiPicker
          open={openEmojiDialog}
          height={"400px"}
          width={"400px"}
          skinTonesDisabled={true}
          onEmojiClick={(emojiobject) => {
            setEmoji(emojiobject.emoji);
            setOpenEmojiDialog(false);
          }}
          className="emoji-picker"
        />

        <button
          type="button"
          className="btn btn-primary add-note-button"
          onClick={addNote}
        >
          + Add Note
        </button>
      </form>
    </div>
    </div>
  );
}

export default Add;
