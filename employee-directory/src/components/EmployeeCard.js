import React, { Component } from "react";
import Result from "./Result"
import API from "../utils/API"


class EmployeeCard extends Component {
    state = {
        results: {},
      };

    // componentDidMount() {
    //     return this.searchEmployees
    // }

    searchEmployees = () => {
        API.getData()
      .then(res=> this.setState({results: res.results[0]}))
      .catch(err => console.log(err));
    }

    render () {
        return (
           <Result
           results= {this.state.resultsresults}
           
           /> 
                
         
        )

    }
    

}


export default EmployeeCard;