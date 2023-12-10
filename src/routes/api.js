const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const menuController = require("../controllers/menuController");
const sliderController = require("../controllers/sliderController");
const noticeController = require("../controllers/noticeController");
const eventController = require("../controllers/eventController");
const postController = require("../controllers/postController");
const activityController = require("../controllers/activityController");
const commentController = require("../controllers/commentController");
const aboutController = require("../controllers/aboutController");
const widgetController = require("../controllers/widgetController");
const profileController = require("../controllers/profileController");
const loginController = require("../controllers/loginController");
const resultController = require("../controllers/resultController");
const logController = require("../controllers/logController");
const abacusStudentController = require("../controllers/allAbacusController/abacusStudentController");
const madrashaAbacusController = require("../controllers/allAbacusController/madrashaAbacusController");

//Middleware Import
const passEncrypted = require("../middlewares/passwordEncryption");
const authverify = require("../middlewares/authverifyMiddleware");

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express.js!" });
});

//api for data management

//authentication
router.get("/isAdmin", authverify, (req, res) => {
  let userName = req.headers["userName"];
  let userRole = req.headers["userRole"];
  let isAdmin = req.headers["isAdmin"];

  res.status(200).json({
    status: "Alhamdulillah",
    data: {
      userName,
      userRole,
      isAdmin,
    },
  });
});
router.get("/logout", authverify, (req, res) => {
  let userName = req.headers["userName"];
  let userRole = req.headers["userRole"];
  let isAdmin = req.headers["isAdmin"];

  res.clearCookie("access_token").status(200).json({
    status: "Alhamdulillah! You are Logged Out",
    data: {
      userName,
      userRole,
      isAdmin,
    },
  });
});

//signup
router.post(
  "/create-teacher",
  passEncrypted.hashedPassword,
  profileController.createTeacher
);

router.post(
  "/create-student",
  passEncrypted.hashedPassword,
  profileController.createStudent
);

//abacus
router.post(
  "/create-madrasha-abacus",
  passEncrypted.hashedPassword,
  madrashaAbacusController.createMadrashaAbacus
);
router.post(
  "/create-abacus-student",
  passEncrypted.hashedPassword,
  abacusStudentController.createAbacusStudent
);


//Login api for students and teachers
router.post(
  "/student-login",
  passEncrypted.checkPasswordStudent,
  loginController.studentLogin
);
router.post(
  "/teacher-login",
  passEncrypted.checkPasswordTeacher,
  loginController.teacherLogin
);

//create data to database
router.post("/create-course", authverify, courseController.createCourse);
router.post("/create-menu", authverify, menuController.createMenu);
router.post("/create-slider", authverify, sliderController.createSlider);
router.post("/create-notice", authverify, noticeController.createNotice);
router.post("/create-event", authverify, eventController.createEvent);
router.post("/create-post", authverify, postController.createPost);
router.post("/create-activity", authverify, activityController.createActivity);
router.post("/create-comment", authverify, commentController.createComment);
router.post("/create-about", authverify, aboutController.createAbout);
router.post("/create-widget", authverify, widgetController.createWidget);
router.post("/create-result", authverify, resultController.createResult);
router.post("/create-log", authverify, logController.createLog);

//Select or find the data from the database
router.post("/select-students", authverify, profileController.selectStudents);
router.post(
  "/select-all-students",
  authverify,
  profileController.selectAllStudents
);
router.post("/select-teachers", authverify, profileController.selectTeachers);
router.post(
  "/select-all-teachers",
  authverify,
  profileController.selectAllTeachers
);

//abacus
router.post(
  "/select-all-madrasha-abacus",
  madrashaAbacusController.selectMadrashaAbacus
);
router.post(
  "/select-all-abacus-students",
  abacusStudentController.selectAbacusStudents
);


router.post("/select-courses", authverify, courseController.selectCourses);
router.post("/select-menus", authverify, menuController.selectMenus);
router.post("/select-sliders", authverify, sliderController.selectSliders);
router.post("/select-notices", authverify, noticeController.selectNotices);
router.post("/select-events", authverify, eventController.selectEvents);
router.post("/select-posts", authverify, postController.selectPosts);
router.post(
  "/select-activities",
  authverify,
  activityController.selectActivities
);
router.post("/select-comments", authverify, commentController.selectComments);
router.post("/select-abouts", authverify, aboutController.selectAbouts);
router.post("/select-widgets", authverify, widgetController.selectWidgets);
router.post("/select-results", authverify, resultController.selectResults);
router.post("/select-logs", authverify, logController.selectLogs);

//Select or update the data from the database
router.put("/update-student", authverify, profileController.updateStudent);
router.put("/update-teacher", authverify, profileController.updateTeacher);
router.put("/update-course", authverify, courseController.updateCourse);
router.put("/update-menu", authverify, menuController.updateMenu);
router.put("/update-slider", authverify, sliderController.updateSlider);
router.put("/update-notice", authverify, noticeController.updateNotice);
router.put("/update-event", authverify, eventController.updateEvent);
router.put("/update-post", authverify, postController.updatePost);
router.put("/update-activity", authverify, activityController.updateActivity);
router.put("/update-comment", authverify, commentController.updateComment);
router.put("/update-about", authverify, aboutController.updateAbout);
router.put("/update-widget", authverify, widgetController.updateWidget);
router.put("/update-result", authverify, resultController.updateResult);
router.put("/update-log", authverify, logController.updateLog);

//abacus update

router.put(
  "/update-madrasha-abacus",
  madrashaAbacusController.updateMadrashaAbacus
);
router.put(
  "/update-abacus-student",
  abacusStudentController.updateAbacusStudent
);


router.put("/update-log", authverify, logController.updateLog);

//Delete the data from the database
router.delete(
  "/delete-teacher/:id",
  authverify,
  profileController.deleteTeacher
);
router.delete(
  "/delete-student/:id",
  authverify,
  profileController.deleteStudent
);
router.delete("/delete-course/:id", authverify, courseController.deleteCourse);
router.delete("/delete-menu/:id", authverify, menuController.deleteMenu);
router.delete("/delete-slider/:id", authverify, sliderController.deleteSlider);
router.delete("/delete-notice/:id", authverify, noticeController.deleteNotice);
router.delete("/delete-event/:id", authverify, eventController.deleteEvent);
router.delete("/delete-post/:id", authverify, postController.deletePost);
router.delete(
  "/delete-activity/:id",
  authverify,
  activityController.deleteActivity
);
router.delete(
  "/delete-comment/:id",
  authverify,
  commentController.deleteComment
);
router.delete("/delete-about/:id", authverify, aboutController.deleteAbout);
router.delete("/delete-widget/:id", authverify, widgetController.deleteWidget);
router.delete("/delete-result/:id", authverify, resultController.deleteResult);
router.delete("/delete-log/:id", authverify, logController.deleteLog);

//abacus delete
router.delete(
  "/delete-madrasha-abacus/:id",
  madrashaAbacusController.deleteMadrashaAbacus
);
router.delete(
  "/delete-abacus-student/:id",
  abacusStudentController.deleteAbacusStudent
);


module.exports = router;
