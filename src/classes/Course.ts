import {Student} from "./Student";

export class Course {
    private students: Map<number, Student> = new Map();

    /**
     * Fügt eine*n weitere*n Schüler*in hinzu.
     * @param name
     */
    public addStudent(name: String) : void {
        const id = this.students.size + 1;
        const student = new Student(id, name);
        this.students.set(id, student);
    }

    /**
     * Registriert eine Meldung.
     * @param id
     */
    public melden(id: number) : void {
        const student = this.students.get(id);
        if(student instanceof Student) {
            student.melden();
        }
    }

    /**
     * Gibt eine Liste aller Schüler*innen zurück.
     */
    public getStudents() : Array<Student> {
        const array = Array.from(this.students, ([key, value]) => (value));
        array.sort((student1, student2) => {
            return student1.getMeldungen() - student2.getMeldungen();
        })
        console.log(array);
        return array;
    }
}