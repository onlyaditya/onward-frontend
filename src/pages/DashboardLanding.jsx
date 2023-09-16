import React from "react";
import Navbar from "../components/Navbar/Navbar";
import {Sidebar} from "../components/Sidebar/Sidebar";
import Home from "../components/DashboardHome/Home";
import RightSidebar from "../components/RightSidebar/RightSidebar";

const DashboardLanding = () => {
  return (
    <div>
      <Navbar/>
      <div style={{display:"inline-block",width:"300px"}} >
      <Sidebar/>
      </div>
      <div style={{display:"inline-block",width:"830px",}}>
      
      <Home/>
      
      </div>
     <div style={{display:"inline-block",width:"300px"}}>
     <RightSidebar />
     </div>
    </div>
  );
};

export default DashboardLanding;
