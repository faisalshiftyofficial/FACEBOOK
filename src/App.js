import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import './App.css';

function App() {
  const [{user}, dispatch]= useStateValue();
  
  return (
    <div className="App">
      {!user ?(
        <Login/>
      ):(
        <>
      <Sidebar/>
      <Feed/>
      <Widget/>
      </>
      )}
    </div>
  );
}

export default App;
