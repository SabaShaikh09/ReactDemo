export let showStudents = ()=>{
    return{
        type:'SHOWSTUDENT'
    }
}
export let searchStudent = (id)=>{
    return{
        type:'SEARCHSTUDENT',
        payload:id
    }
}

export let deleteStudents = (id)=>{
    return{
        type:'DELETESTUDENT',
        payload:id
    }
}

export let addStudents = (student)=>{
    return{
        type:'ADDSTUDENT',
        payload:student
    }
}