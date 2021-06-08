import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import {useStateValue} from "./StateProvider";

const Post = forwardRef(
  ({ displayName, verified, text, image, avatar }, ref) => {
    const [{user},dispatch]=useStateValue();
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={user.photoURL} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {user.displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <CheckCircleIcon className="post__badge" />} 
                  
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            
            <ThumbUpIcon fontSize="small" />
            <ChatBubbleOutlineIcon fontSize="small" />
            <ShareIcon fontSize="small" />
            
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
