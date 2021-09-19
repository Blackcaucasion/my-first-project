export interface Employee{
    uid?:string | null | undefined ;
    personalDetails?:personalDetails

}
export interface personalDetails{
    firstName?:string |null;
    lastName?:string |null;
    email?:string |null;
    employeeNumber?:number |null;
    department?:string |null;
    role?:string |null;
    profileUrl?:string |null;
}
export interface msg {
    from?:string |null,
    msg?:string |null
}