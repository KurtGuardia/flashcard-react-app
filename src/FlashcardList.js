import React from "react";
import Flascard from "./Flashcard";

export default function FlashcardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <Flascard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}
