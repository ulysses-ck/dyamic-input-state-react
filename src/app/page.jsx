"use client";
import { useFormState } from "react-dom";
import { useState, useEffect } from "react";
import { getData } from "./actions";

export default function Home() {
  const [letters, setLetters] = useState([]);
  const [dataLetters, actionDataLetters] = useFormState(getData, {
    letters: [],
  });

  useEffect(() => {
    if (dataLetters.letters.length) {
      setLetters(dataLetters.letters);
    }
  }, [dataLetters]);

  const handleOnInput = (event, index) => {
    const newLetters = [...letters];
    newLetters[index] = event.target.value;
    setLetters(newLetters);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <form action={actionDataLetters}>
        <button type="submit">Get Data</button>
      </form>

      <ul>
        {letters.map((letter, index) => (
          <li key={index}>
            <input
              type="text"
              value={letter}
              onInput={(e) => handleOnInput(e, index)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
