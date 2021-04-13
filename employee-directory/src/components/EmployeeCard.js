import React, { Component } from "react";
import Result from "./Result/index"
import API from "../utils/API"


class EmployeeCard extends Component {
    state = {
        results: [],
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
    
    render () {
        return (
          <div>
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