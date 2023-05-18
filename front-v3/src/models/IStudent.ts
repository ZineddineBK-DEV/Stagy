import { IJob } from "./IJob"
import { IUser } from "./IUser"

export interface IStudent {
    _id:string;
    username:string;
      avatar: string;
      resume:string;
      jobsRequests:IJob;   
      user:IUser;
}