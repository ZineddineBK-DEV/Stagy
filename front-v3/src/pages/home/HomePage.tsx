import { Autocomplete, Box, Button, Container, Divider, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { getJobsList, saveJob } from "./HomeService";
import { useEffect, useState } from "react";
import { IJob } from "../../models/IJob";
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { format, parseISO } from "date-fns";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
const HomePage: React.FC = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [search,setSearch] = useState("")


  useEffect(() => {
    getJobsList().then(
      (response) => {
        setJobs(response);
        // jobs.forEach(job => {
        //  setJobID(job._id)
          console.log(search)
        // });
      },
      (error) => {
        const _jobs =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setJobs(_jobs)
      }
    );
  }, []);

  const handleClickSave = async (id: string) => {
    const job = await axios.patch("http://localhost:5000/api/v1/job/saveJob/" + id);
    toast("Job saved Successfuly");
    window.location.reload();
    return job.data;
  }
  const handleClickUnsave = async (id: string) => {
    const job = await axios.patch("http://localhost:5000/api/v1/job/unsaveJob/" + id);
    toast("Job unsaved Successfuly")
    window.location.reload();
    return job.data;
  }
  const handleSearch =async () => {
    const job = await axios.post("http://localhost:5000/api/v1/jobs/searchJobs",search);
    return job.data;
  }

  return (
    <Container >
      <Box>
        <Typography variant="h4" paddingBottom={"10px"} color={"#27374D"}>Offers list ({jobs.length})</Typography>
        <Divider />
      </Box>
      <Box>
        <Grid container spacing={2}>
        <TextField
        label="Search"
        value={search}
        onChange={handleSearch}
        variant="outlined"
      />
        </Grid>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Divider style={{
        marginTop:"20px"
      }} />
      {jobs.map((job: IJob, key) => (
        <Paper
          key={key}
          style={{
            marginTop: "20px",
          }}
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: '#1A2027',
            color: 'whitesmoke',
          }}
        >
          <Grid container spacing={2} >
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <b>Title :</b>{job.title}
                  </Typography>

                  <Typography gutterBottom component="div">
                    <b>Salary :</b>{job.salary}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <b>Location :</b>{job.location}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <b>Description :</b>{job.description}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    <b>Requirments :</b>{job.requirments}
                  </Typography>
                  <Typography variant="body2">
                    <b>Infos :</b>{job.infos}
                  </Typography>
                </Grid>
                <Stack style={{
                  marginLeft: "35%",
                  marginTop: "5%"
                }}
                  direction="row"
                  spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<SendIcon />}
                    style={{
                      width: "200px"
                    }}
                  >
                    Apply
                  </Button>
                  {!job.saved ?
                    <Button variant="outlined" onClick={handleClickSave.bind(null, job._id)} startIcon={<BookmarkIcon />}>
                      Save
                    </Button> : <Button variant="outlined" onClick={handleClickUnsave.bind(null, job._id)} startIcon={<BookmarkAddedIcon />}>
                      Unsave
                    </Button>
                  }
                </Stack>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  component="div"
                  style={{
                    fontSize: "12px",
                    color: "#8c8c8c",
                    marginTop: "5px"
                  }}
                >
                  <b>{format((parseISO(job.createdAt)), 'dd MMM Y')}</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};
export default HomePage;