import "./StudentsStyle.css"

import React from "react";

const Students = () => {
    return(
        <div className="container-students">
            <table className="studentTable">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Group number</th>
                        <th scope="col">Field of study</th>
                        <th scope="col">Study year</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <td>Ana</td>
                    <td>Popescu</td>
                    <td>4LF381</td>
                    <td>Tehnologia Informatiei</td>
                    <td>4</td>
                    <td></td>
                </tbody>
            </table>
        </div>
    )
};

export default Students;