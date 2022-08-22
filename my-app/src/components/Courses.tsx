import "./StudentsStyle.css"

import React from "react";

const Courses = () =>{
    return(
        <div className="container">
            <table className="studentTable">
                <thead>
                    <tr>
                        <th scope="col">Course Name</th>
                        <th scope="col">Credits Number</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <td>Programare</td>
                    <td>6</td>
                    <td></td>
                </tbody>
            </table>
        </div>
    )
};

export default Courses;