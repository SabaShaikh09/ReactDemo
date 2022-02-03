import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { useEffect } from "react/cjs/react.development";
import { deleteStudents } from "../Actions/StudentAction";
import { Navigate } from "react-router-dom";


export let DeleteStudent = ()=>{
    let {id} = useParams();
    console.log("ID =>"+id);
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(deleteStudents(parseInt(id)));
    });
    return(
        <>
        <Navigate to="/student/showall"/>
        </>
    )
}