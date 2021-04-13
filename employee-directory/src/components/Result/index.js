import React from "react";
import "./style.css"

function Result(props) {
    return (
        <section className="row rows">
            <div className="col-md-3">
                <p>{props.firstName} {props.lastName}</p>
            </div>
            <div className="col-md-3">
                <img alt={props.name} src={props.image}/>
            </div>
            <div className="col-md-3">
                <p>{props.email}</p>
            </div>
            <div className="col-md-3">
                <p>{props.age}</p>
            </div>
        </section>
    )
    }
export default Result;