import {ICompany} from './ICompany';
export interface IJob{
    _id :string;
    title:string;
    description :string;
    requirments:string;
    location:string;
    infos:string;
    createdAt:string;
    salary:string;
    company:ICompany;
    saved:boolean;
}