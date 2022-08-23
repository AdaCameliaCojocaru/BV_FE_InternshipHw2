import "./StudentsStyle.css"

import Button from "./Button";
import React from "react";

const Students = () => {
    const studentsData = [
        {
            "name" : "Ada",
            "surname":"Cojocaru",
            "group": "4LF381",
            "field":"Tehnologia Informatiei",
            "year": 4
        },
        {
            "name" : "Maria",
            "surname":"Ionescu",
            "group": "3RT564",
            "field":"Automatica",
            "year": 2
        },
        {
            "name" : "Constantin",
            "surname":"Barbu",
            "group": "6YB352",
            "field":"Economie",
            "year": 1
        },
        {
            "name" : "Ion",
            "surname":"Marin",
            "group": "4GT654",
            "field":"Calculatoare",
            "year": 3
        }
    ];
    const tableRows = studentsData.map(student => (<tr>
        <td>{student.name}</td>
        <td>{student.surname}</td>
        <td>{student.group}</td>
        <td>{student.field}</td>
        <td>{student.year}</td>
    </tr>))
    return(
        <div className="container-students">
            <h2>Students table</h2>
            <Button style={{"backgroundColor":"#FFC132"}}text="Add Student"></Button>
            <table className="studentTable">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Group number</th>
                        <th scope="col">Field of study</th>
                        <th scope="col">Study year</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
            

        </div>
    )
};

export default Students;