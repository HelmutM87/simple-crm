export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    email: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.laststName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }

    /**
     * name
     */
    // public toJSON() {
    //     return {
    //         firstName: this.firstName,
    //         lastName: this.lastName,
    //         birthDate: this.birthDate,
    //         street: this.street,
    //         zipCode: this.zipCode,
    //         city: this.city,
    //         email: this.email
    //     };
    // }

    public toJSON() {
        return {
            firstName: this.firstName || '',   // Fallback auf leeren String, falls undefined
            lastName: this.lastName || '',     // Sicherstellen, dass lastName nicht undefined ist
            birthDate: this.birthDate || new Date().getTime(),  // Setze aktuelles Datum, falls undefined
            street: this.street || '',         // Fallback auf leeren String
            zipCode: this.zipCode || '',       // Sicherstellen, dass zipCode nicht undefined ist
            city: this.city || '',             // Fallback auf leeren String
            email: this.email || ''            // Sicherstellen, dass email nicht undefined ist
        };
    }
    
}