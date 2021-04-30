import React, { Component } from "react";
import Result from "./Result/index";
import API from "../utils/API";
//import Search from "./Search";


class EmployeeCard extends Component {
    state = {
        search: "",
        filteredUsers: [],
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
      // this.state.results.filter(item => this.state.search.includes(item.name.first)).map(results =>()
    };
    
    render () {
        return (
          <div>
           {/* <Search 
           value={this.state.search}
           handleInputChange={this.handleInputChange}
           handleFormSubmit={this.handleFormSubmit}
           /> */}
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