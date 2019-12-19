const router = require("express").Router();
const applicationForm = require("../models/applicationForm");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  }
});

const upload = multer({ storage });

router.get("/allApplicationForm", (req, res) => {
  applicationForm.find().then(allData => res.json(allData));
});

router.post("/addApplicationForm", upload.single("file"), (req, res) => {
  const {
    city,
    course,
    onlineLearning,
    timingPreference,
    campusLocation,
    programmingBackground,
    priorExperience,
    student_FullName,
    student_CNIC_or_BForm,
    student_email,
    student_Mobile_Number,
    student_Fb_or_LinkedIn_Profile,
    student_Date_of_Birth,
    student_Gender,
    student_Image,
    student_Province,
    student_City,
    student_Present_Address,
    student_Permanant_Address,
    student_Highest_Qualification,
    student_Highest_Qualification_Institute_Name,
    student_Qualification_category,
    student_Other_Qualification_Category,
    student_Degree_Title,
    student_Major_Subject_One,
    student_Major_Subject_Two,
    student_Major_Subject_Three,
    student_Major_Subject_Four,
    student_Major_Subject_Five,
    student_Major_Subject_Six,
    student_Major_Subject_Seven,
    student_Major_Subject_Eight,
    student_Have_Laptop,
    father_Guardian_Name,
    father_Guardian_Email,
    father_Guardian_Contact_Number,
    father_Guardian_CNIC,
    father_Guardian_Present_Address,
    father_Guardian_Permanant_Address,
    father_Guardian_Gender
  } = req.body;
  let applicationFormData = {
    city,
    course,
    onlineLearning,
    timingPreference,
    campusLocation,
    programmingBackground,
    priorExperience,
    student_FullName,
    student_CNIC_or_BForm,
    student_email,
    student_Mobile_Number,
    student_Fb_or_LinkedIn_Profile,
    student_Date_of_Birth,
    student_Gender,
    student_Image,
    student_Province,
    student_City,
    student_Present_Address,
    student_Permanant_Address,
    student_Highest_Qualification,
    student_Highest_Qualification_Institute_Name,
    student_Qualification_category,
    student_Other_Qualification_Category,
    student_Degree_Title,
    student_Major_Subject_One,
    student_Major_Subject_Two,
    student_Major_Subject_Three,
    student_Major_Subject_Four,
    student_Major_Subject_Five,
    student_Major_Subject_Six,
    student_Major_Subject_Seven,
    student_Major_Subject_Eight,
    student_Have_Laptop,
    father_Guardian_Name,
    father_Guardian_Email,
    father_Guardian_Contact_Number,
    father_Guardian_CNIC,
    father_Guardian_Present_Address,
    father_Guardian_Permanant_Address,
    father_Guardian_Gender
  };
  const newApplicationForm = new applicationForm(applicationFormData);
  newApplicationForm.save().then(() => res.json("Application Submitted"));
});

router.delete("/del/:id", (req, res) => {
  applicationForm
    .findByIdAndRemove({ _id: req.params.id })
    .then(() => res.json("Deleted"));
});

module.exports = router;
