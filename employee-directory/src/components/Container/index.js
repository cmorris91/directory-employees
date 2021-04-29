import React from "react";
import Navbar from "../Navbar/index"
import EmployeeCard from "../EmployeeCard"
import "./style.css"

function Container () {
    return (
        <div className="container">
        <h1 className="jumbotron jumbotron-fluid">Employee Directory</h1>
        <Navbar/>
        <EmployeeCard/>
        </div>
    )
}

export default Container