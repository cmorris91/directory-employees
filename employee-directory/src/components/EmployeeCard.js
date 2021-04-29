import React, { Component } from "react";
import Result from "./Result/index";
import API from "../utils/API";
//import Search from "./Search";


class EmployeeCard extends Component {
    state = {
        search: "",
        results: []
      };

    componentDidMount() {
        this.searchEmployees()
    }

    searchEmployees = () => {
        API.getData()
      .then(res=> {
      this.setState({results: res.data.results},()=>{
        console.log(this.state.results)
      })
      })
      .catch(err => console.log(err));
    }

    handleInputChange =(event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
      
    }

    handleFormSubmit = event => {
      event.preventDefault();
      console.log(this.state)
    };
    
    render () {
        return (
          <div>
             <div className="search-bar">
            <form className="form">
            <input 
            placeholder="Search by Name"
            value={this.state.search}
            name="search"
            type="text"
            onChange={this.handleInputCHange}
            />
            <button 
            type="submit"
            onClick={this.handleFormSubmit}
            >search</button>
            </form>
        </div>
          {this.state.results.map(item => (
            <Result
              key = {item.email}
              firstName= {item.name.first}
              lastName = {item.name.last}
              image= {item.picture.medium}
              email = {item.email}
              age = {item.dob.age} 
            />
          ))} 
          </div>   
        )
    }
}


export default EmployeeCard;