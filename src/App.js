import './App.css'; 
import React  from "react";
import FullName from "./component/profile/FullName.js"
import Adress  from "./component/profile/Address.js"
import ProfilePhoto from "./component/profile/ProfilePhoto"
import "./style.css"

function App() {
  return (
<> 
<div className="photo">
 <ProfilePhoto ></ProfilePhoto>
 </div>
<div className="name">
 <FullName></FullName>
 </div>
 <div className="adress">
 <Adress></Adress>

 </div>

</>
);
};

export default App;
