import React from "react";
import "./Widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input"> 
        <SearchIcon className="widgets__searchIcon" />
       <input placeholder="Search facebook" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>following</h2>

        <TwitterTweetEmbed tweetId={"1371498375447674884"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="faisalshifty_"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/enginereview"}
          options={{ text: "#reactjs is awesome", via: "faisalshifty" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
