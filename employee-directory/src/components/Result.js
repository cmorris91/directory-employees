import React from "react";

function Result(props) {
    return (
        <ul>
            {props.results.map(result => (
                <li key={result.id}>
                    <p>{result.name.first}</p>
                </li>
            ))}
        </ul>
    )
}

export default Result;