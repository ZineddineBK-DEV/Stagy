import { IJob } from "./IJob";
import { IUser } from "./IUser";

export interface ICompany{
    _id:string;
    companyName:string;
    logo:string;
    employeesNumber:string;
    activityArea:string,
    summary: string;
    jobOffers:IJob ;
    user:IUser;
}