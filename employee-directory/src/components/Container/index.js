import React from "react";
import Navbar from "../Navbar/index"
import EmployeeCard from "../EmployeeCard"
import Search from "../Search/index"
import "./style.css"

function Container () {
    return (
        <div className="container">
        <h1 className="jumbotron jumbotron-fluid">Employee Directory</h1>
        <Search/>
        <Navbar/>
        <EmployeeCard/>
        </div>
    )
}

export default Container