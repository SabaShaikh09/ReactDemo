import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudents } from "../Actions/StudentAction";
import Student from "../StudentData/Student";
import { Navigate } from "react-router-dom";



export let AddStudent = () => {

    let dispatch = useDispatch();

    let [flag, setFlag] = useState(false);

    const [student, setStudent] = useState(new Student());

    const setDetail = (e) => {
        setStudent({...student, [e.target.name]: e.target.value });
    }
    const test = (e) => {
        e.preventDefault();
        console.log(student);
        dispatch(addStudents(student));
        setFlag(true);

    }


    return (
        <div className="container bg-info mt-5 p-5 border border-primary border-5 rounded-pill d-flex justify-content-center">
            {
                flag === false ?
                    <form className="form-group w-50">
                        <label>Enter ID</label>
                        <input type="number" className="form-control border border-dark" name="id" value={student.id} onChange={setDetail} />

                        <label>Enter Name</label>
                        <input type="text" className="form-control border border-dark" name="name" value={student.name} onChange={setDetail} />

                        <label>Enter Department</label>
                        <input type="text" className="form-control border border-dark" name="department" value={student.department} onChange={setDetail} />

                        <label>Enter year</label>
                        <input type="text" className="form-control border border-dark" name="year" value={student.year} onChange={setDetail} />

                        <input type="submit" onClick={test} className="mt-2 btn btn-success" placeholder="Save" /><input type="reset" className="mx-3 mt-2 btn btn-danger" placeholder="Reset" />
                    </form> : <Navigate to="/student/showall" />
            }
        </div>
    )
}