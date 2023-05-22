const mongoose =require ("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,

    },
    description: {
        type: String,

    },
    requirments: {
        type: String,

    },
    location: {
        type: String,

    },
    infos: {
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
