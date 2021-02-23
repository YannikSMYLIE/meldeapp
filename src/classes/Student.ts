export class Student {
    private id: number;
    private name: String;
    private meldungen: number = 0;

    /**
     * Erzeugt eine*n neue*n Schüler*in.
     * @param id
     * @param name
     */
    constructor(id: number, name: String) {
        this.id = id;
        this.name = name;
    }

    /**
     * Gibt die Id zurück.
     */
    public getId() : number {
        return this.id;
    }

    /**
     * Gibt den Namen zurück.
     */
    public getName() : String {
        return this.name;
    }

    /**
     * Registriert eine Meldung.
     */
    public melden() : void {
        this.meldungen++;
    }

    /**
     * Gibt die Anzahl der Meldungen zurück.
     */
    public getMeldungen() : number {
        return this.meldungen;
    }
}