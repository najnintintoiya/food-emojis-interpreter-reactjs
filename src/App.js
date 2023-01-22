import React, { useState } from "react";
import "./styles.css";

var emojisDictionary = {
  "🍠": "Roasted Sweet Potato",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza"
};
var emojis = Object.keys(emojisDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChangeHalndler(event) {
    var userInput = event.target.value;
    var meaning = emojisDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function onEmojiClickHandler(item) {
    var meaning = emojisDictionary[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Food Emojis Interpreter</h1>
      <input
        placeHolder="search your emoji here"
        onChange={onChangeHalndler}
      ></input>
      <p>{meaning}</p>
      <ul>
        {emojis.map(function (item) {
          return (
            <li key={item} onClick={() => onEmojiClickHandler(item)}>
              {" "}
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
