const mongoose =require ("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Provide the job title"]

    },
    description: {
        type: String,
        required: [true, "Please Provide the job description"]

    },
    requirments: {
        type: String,
        required: [true, "Please Provide the job requirments"]

    },
    location: {
        type: String,
        required: [true, "Please Provide the job location"]

    },
    infos: {
        type: String,
        required: [true, "Please Provide the job information"]
    },
    salary: {
        type: String,
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
    },
    saved:{
        type: Boolean,
        default:false
    }
    
},
    { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
