import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom"
import { showStudents } from "../Actions/StudentAction";

export let SearchStudent = () => {
    let { id } = useParams();

    let studAr = useSelector((store) => store.StudentReducer)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(showStudents());
    });
    let ii = parseInt(id);
    let student = studAr.find((student) => student.id === ii);
    return (
        <>
            <div >
                <table className="mt-3 table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Year</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody >
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.department}</td>
                            <td>{student.year}</td>
                            <td><NavLink to={`/students/delete/${student.id}`}><button className="btn btn-danger">delete</button></NavLink></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    )
}