import React, { useEffect, useState } from "react";
import "./Show.css";
import NoteCard from "../../components/NoteCard/NoteCard";
import HomeButton from "../../components/HomeButton/HomeButton";

function Show() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  return (
    <div className="page-background-img">
      <div className="show-notes-main-container">
        <h1 className="text-center text-primary">📖 Show Note</h1>
        <HomeButton />
        <div className="notes-container">
          {notes.map((note, index) => {
            const { title, description, category, emoji } = note;
            return (
              <div>
                <NoteCard
                  index={index}
                  title={title}
                  description={description}
                  category={category}
                  emoji={emoji}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Show;
