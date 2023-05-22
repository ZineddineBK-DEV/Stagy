import React,{ useState } from "react";
import { TextField, Button, Container, Typography, Box, Divider, TextareaAutosize, InputLabel, Input, InputAdornment } from '@mui/material';
import { postJob } from "./HomeService";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { AlignHorizontalCenter } from "@mui/icons-material";

const PostJob: React.FC = () => {
    const [values, setValues] = useState({
        title: '',
        description: '',
        requirments:'',
        location:'',
        info :'',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        postJob(values).then(
            (response) => {
              console.log(response.data.message!);
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
                console.log(resMessage)
            }
            )
      };
      

  return (
<Container >
    <Box>
        <Typography variant="h2" align="center" color="primary" gutterBottom>Post a new offer</Typography>
    </Box>
    <Divider />
      <Container sx={{ width: 700 }}>
              <form onSubmit={handleSubmit}>
                  <TextField
                      label="Title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      fullWidth
                      margin="normal" />
                  <TextField
                      label="Description"
                      name="description"
                      type="description"
                      value={values.description}
                      onChange={handleChange}
                      fullWidth
                      margin="normal" />
                  <TextField
                      label="Requirments"
                      name="requirments"
                      type="requirments"
                      value={values.requirments}
                      onChange={handleChange}
                      fullWidth
                      margin="normal" />
                  <TextField
                      label="Location"
                      name="location"
                      type="location"
                      value={values.location}
                      onChange={handleChange}
                      fullWidth
                      margin="normal" />
                 <TextField
                      label="Info"
                      name="info"
                      type="info"
                      value={values.info}
                      onChange={handleChange}
                      fullWidth
                      multiline
                      margin="normal"
                      rows={3}
                      />
                      <Divider sx={{margin:"5%"}} />

                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    sx={{
                        width:"40%"
                        }}>
                      Submit
                  </Button>
              </form>
          </Container>
</Container>
  );
};

export default PostJob;