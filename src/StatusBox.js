import React, { useState } from "react";
import "./StatusBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import {useStateValue} from "./StateProvider";

function StatusBox() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusImage, setStatusImage] = useState("");
  const [{user},dispatch]=useStateValue();
  const sendStatus = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Faisal Shifty",
      
      verified: true,
      text: statusMessage,
      image: statusImage,
      avatar:
      "https://i.pinimg.com/280x280_RS/b3/e9/e0/b3e9e034dbe5b28354d588d8f3cac451.jpg",
    });

    setStatusMessage("");
    setStatusImage("");
  };

  return (
    <div className="statusBox">
      <form>
        <div className="statusBox__input">
          <Avatar src={user.photoURL}/>
          <input
            onChange={(e) => setStatusMessage(e.target.value)}
            value={statusMessage}
            placeholder={`What's on your mind, ${user.displayName} ?`}
            type="text"
          />
        </div>
        
        <input
          value={statusImage}
          onChange={(e) => setStatusImage(e.target.value)}
          className="statusBox__imageInput"
          placeholder="Enter a image"
          type="text"
        />

        <Button
          onClick={sendStatus}
          type="submit"
          className="statusBox__statusButton"
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default StatusBox;
