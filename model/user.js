const mongoose = require("mongoose");
const user_schema1 = new mongoose.Schema({
        
        userEMAIL: {
        type: String,
        required: true,
        trim: true,
        lowercase : true
        },
        userNAME: {
        type: String,
        required: true,
        trim: true
        },
        userPASSWORD: {
        type: String,
        required: true,
        trim: true
        },
        userDOB: {
        type: String,
        required: true,
        trim: true
        },
        userPHONENUMBER: {
        type: Number,
        required: true,
        trim: true
        },
        userOCCUPATION: {
        type: String,
        required: true,
        trim: true
        },
        },
        {
        timestamps: true,
        }
)

module.exports = mongoose.model("USER-INFO1" , user_schema1 );