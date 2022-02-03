import StudOperations from "../StudentData/StudentIntf";

const studOperations = new StudOperations();

export const StudentReducer = (state = [...studOperations.studArray], action) => {
    switch (action.type) {
        case "SHOWSTUDENT": {
            state = studOperations.getAllStudents();
            return state;
        }
        case "DELETESTUDENT": {
            state = studOperations.deleteStudent(action.payload);
            return state;
        }
        case "ADDSTUDENT": {
            state = studOperations.addStudent(action.payload);
            return state;
        }
        case "SEARCHSTUDENT": {
            state = studOperations.searchStudent(action.payload);
            return state;
        }
        default: return state;
    }

}