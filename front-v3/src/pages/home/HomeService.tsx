import axios from "axios";

// Register user
export const getJobsList = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/job");
    //console.log(response.data)
    return response.data;
};
export const saveJob = async() =>{
    const job = await axios.patch("http://localhost:5000/api/v1/job/${id}");
    return job.data;
}
export const getSavedJobs =async () => {
    const jobs = await axios.get("http://localhost:5000/api/v1/job/getSavedJobs");
    return jobs.data;
}
export const unsaveJob= async ()=>{
    const job = await axios.patch("http://localhost:5000/api/v1/job/${id}");
    return job.data;
}
  
