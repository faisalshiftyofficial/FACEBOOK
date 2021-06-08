import React from "react";
import "./Sidebar.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from '@material-ui/icons/People';

import MovieIcon from '@material-ui/icons/Movie';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import FlagIcon from '@material-ui/icons/Flag';

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


function Sidebar() {
  return (
    <div className="sidebar">
      
      
      <FacebookIcon className="sidebar__twitterIcon" />
      
      <SidebarOption active Icon={HomeIcon} text="News Feed" />
      <SidebarOption Icon={PeopleIcon} text="Find Friends" />
      
      <SidebarOption Icon={MovieIcon} text="Watch" />
      <SidebarOption Icon={BookmarksIcon} text="Saved" />
      <SidebarOption Icon={FlagIcon} text="Pages" />
      
      <SidebarOption Icon={MoreHorizIcon} text="See more" />
      
      
    </div>
  );
}

export default Sidebar;