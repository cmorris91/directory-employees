import React, { Component } from "react";
import Result from "./Result"
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
      console.log(res)
      this.setState({results: res.data.results},()=>{
        console.log(this.state.results)
      })
      })
      .catch(err => console.log(err));
    }

    render () {
        return (
          <Result 
          results={this.state.results}
          />
              
        )

    }
    

}


export default EmployeeCard;