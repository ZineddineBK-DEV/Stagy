import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import   {getSavedJobs}  from "../home/HomeService";
import { useEffect, useState } from "react";
import { IJob } from "../../models/IJob";
import SendIcon from '@mui/icons-material/Send';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { format, parseISO } from "date-fns";
import { toast } from "react-toastify";
import axios from "axios";


const SavedOffersPage: React.FC = () => {
  const [savedjobs, setSavedJobs] = useState<IJob[]>([]);
  useEffect(() => {
    getSavedJobs().then(
      (response) => {
        setSavedJobs(response);
      },

      (error) => {
        const err =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
          setSavedJobs(err)
      }
    );
  }, []);
  const handleClickUnsave= async (id: string) => {
    const job = await axios.patch("http://localhost:5000/api/v1/job/unsaveJob/"+id);
    toast("Job unsaved Successfuly")
    window.location.reload();
    return job.data;
  }
  
  

  return (
    <Container >
      {savedjobs.length>0 ?
      savedjobs.map((job: IJob, key) => (
        <Paper
          key={key}
          style={{
            marginTop: "10px",
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
                  <Button variant="outlined" onClick={handleClickUnsave.bind(null,job._id)} startIcon={<BookmarkIcon />}>
                    Unsave
                  </Button>
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
      ))
      :
        <Container fixed sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
        >
        
        <Box sx={{ 
            bgcolor: '#1A2027',
            height: '300px',
            width: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom : '10%'
          }} >
        <Typography variant="h3" style={{
          color: "white",
          fontWeight:'poppins'
        }}
          >Empty saved job offres</Typography>
        </Box>
      </Container>
      
      }
    </Container>
  );
};

export default SavedOffersPage;