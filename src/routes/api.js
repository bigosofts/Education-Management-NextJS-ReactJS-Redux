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

const bookController = require("../controllers/bookController");
const departmentController = require("../controllers/departmentController");
const jamatController = require("../controllers/jamatController");
const paymentController = require("../controllers/paymentController");
const SemesterController = require("../controllers/semesterController");
const StudentRoleController = require("../controllers/studentRoleController");

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

router.post("/create-book", authverify, bookController.createBook);
router.post(
  "/create-department",
  authverify,
  departmentController.createDepartment
);
router.post("/create-jamat", authverify, jamatController.createJamat);
router.post("/create-payment", authverify, paymentController.createPayments);
router.post("/create-semester", authverify, SemesterController.createSemester);
router.post(
  "/create-studentrole",
  authverify,
  StudentRoleController.createStudentRole
);

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

router.post("/select-books", authverify, bookController.selectBooks);
router.post(
  "/select-departments",
  authverify,
  departmentController.selectDepartments
);
router.post("/select-jamats", authverify, jamatController.selectJamats);
router.post("/select-payments", authverify, paymentController.selectPayments);
router.post(
  "/select-semesters",
  authverify,
  SemesterController.selectSemesters
);
router.post(
  "/select-studentroles",
  authverify,
  StudentRoleController.selectStudentRoles
);

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

router.put("/update-book", authverify, bookController.updateBook);
router.put(
  "/update-department",
  authverify,
  departmentController.updateDepartment
);
router.put("/update-jamat", authverify, jamatController.updateJamat);
router.put("/update-payment", authverify, paymentController.updatePayment);
router.put("/update-semester", authverify, SemesterController.updateSemester);
router.put(
  "/update-studentrole",
  authverify,
  StudentRoleController.updateStudentRole
);

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

router.delete("/delete-book", authverify, bookController.deleteBook);
router.delete(
  "/delete-department",
  authverify,
  departmentController.deleteDepartment
);
router.delete("/delete-jamat", authverify, jamatController.deleteJamat);
router.delete("/delete-payment", authverify, paymentController.deletePayment);
router.delete(
  "/delete-semester",
  authverify,
  SemesterController.deleteSemester
);
router.delete(
  "/delete-studentrole",
  authverify,
  StudentRoleController.deleteStudentRole
);

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
