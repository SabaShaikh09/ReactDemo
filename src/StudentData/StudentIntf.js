import Student from './Student'


export default class StudOperations {

    studArray = new Set();
    constructor() {
        this.studArray.add(new Student(121, 'Derek', 'Java', 'SE'));
        this.studArray.add(new Student(122, 'James', 'CSS', 'TE'));
        this.studArray.add(new Student(123, 'Nanci', 'SQL', 'FE'));
    }
    getAllStudents() {
        //console.log(this.studArray);
        return [...this.studArray];
    }

    addStudent(stud) {
        let studnt = new Student(parseInt(stud.id),stud.name,stud.department,stud.year);
        console.log(studnt);
        this.studArray.add(studnt);
        return [...this.studArray];
    }

    searchStudent(stdId) {

        return [...this.studArray].find((student) => student.id === stdId);
    }
    deleteStudent(id) {
        console.log("in delete Method");
        let student = this.searchStudent(id);
        console.log(student);
        this.studArray.delete(student);
        console.log([...this.studArray]);
        return [...this.studArray];


    }
}