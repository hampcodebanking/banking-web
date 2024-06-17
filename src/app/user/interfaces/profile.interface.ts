export interface Profile {
    id:number
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    role: 'USER' | 'ADMIN';
}