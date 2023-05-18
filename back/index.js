const express =require ("express");
const dotenv =require ("dotenv");
dotenv.config();
const  http  =require ("http");
const connect =require ("./db/connect.js");
const cors =require ("cors");

const authRoute =require ("./routes/authRoutes.js");
const companyRoutes =require ("./routes/companyRoutes.js"); 
const studentRoutes =require ("./routes/studentRoutes.js"); 
const jobRoutes =require ("./routes/jobRoutes.js"); 



const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server Running!");
  });

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/student",studentRoutes);
app.use("/api/v1/company", companyRoutes);
app.use("/api/v1/job", jobRoutes);


const port = 5000;
const server = http.createServer(app);
const start = async() => {
    try {
      await connect(process.env.MONGO_URI);
      server.listen(port, () =>
        console.log(`Server Running on port : ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };





start();
