const mongoose = require("mongoose");
const applicationFormSchema = new mongoose.Schema({
  city: String,
  course: String,
  onlineLearning: {
    type: Boolean,
    default: false
  },
  timingPreference: String,
  campusLocation: String,
  programmingBackground: String,
  priorExperience: String,
  student_FullName: String,
  student_CNIC_or_BForm: Number,
  student_email: String,
  student_Mobile_Number: String,
  student_Fb_or_LinkedIn_Profile: String,
  student_Date_of_Birth: String,
  student_Gender: String,
  student_Image: String,
  student_Province: String,
  student_City: String,
  student_Present_Address: String,
  student_Permanant_Address: String,
  student_Highest_Qualification: String,
  student_Highest_Qualification_Institute_Name: String,
  student_Qualification_category: String,
  student_Other_Qualification_Category: String,
  student_Degree_Title: String,
  student_Major_Subject_One: String,
  student_Major_Subject_Two: String,
  student_Major_Subject_Three: String,
  student_Major_Subject_Four: String,
  student_Major_Subject_Five: String,
  student_Major_Subject_Six: String,
  student_Major_Subject_Seven: String,
  student_Major_Subject_Eight: String,
  student_Have_Laptop: {
    type: Boolean,
    default: false
  },
  father_Guardian_Name: String,
  father_Guardian_Email: String,
  father_Guardian_Contact_Number: Number,
  father_Guardian_CNIC: Number,
  father_Guardian_Present_Address: String,
  father_Guardian_Permanant_Address: String,
  father_Guardian_Gender: String
});

const applicationFormModel = mongoose.model(
  "Application Form",
  applicationFormSchema
);
module.exports = applicationFormModel;
