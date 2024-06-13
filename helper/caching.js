import CryptoJS from "crypto-js";
import { Dexie } from "dexie";

//encrypt the data
exports.encryptData = (data) => {
  return CryptoJS.AES.encrypt(data, NEXT_SECRET_KEY).toString();
};

//decrypt the data
exports.decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, NEXT_SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

//initiate indexed DB Database
const db = new Dexie("internetmadrasha");

//initiate database
db.version(1).stores({
  students: "++id, value, date",
  teachers: "++id, value, date",
  isadmin: "++id, value, date",
  classes: "++id, value, date",
});

const { students, teachers, isadmin, classes } = db;

//create
exports.createStudent = async (data) => {
  const res = await students.add({
    value: data,
    date: new Date(Date.now()).toISOString(),
  });
  return res;
};

exports.createTeacher = async (data) => {
  const res = await teachers.add({
    value: data,
    date: new Date(Date.now()).toISOString(),
  });
  return res;
};

exports.createIsAdmin = async (data) => {
  const res = await isadmin.add({
    value: data,
    date: new Date(Date.now()).toISOString(),
  });
  return res;
};

exports.createClass = async (data) => {
  const res = await classes.add({
    value: data,
    date: new Date(Date.now()).toISOString(),
  });
  return res;
};

//read

exports.selectStudents = async () => {
  const res = await students.toArray();
  return res;
};

exports.selectTeachers = async () => {
  const res = await teachers.toArray();
  return res;
};

exports.selectIsAdmin = async () => {
  const res = await isadmin.toArray();
  return res;
};

exports.selectClasses = async () => {
  const res = await classes.toArray();
  return res;
};

//update
exports.updateStudent = async (id, data) => {
  const res = await students.update(id, data);
  return res;
};

exports.updateTeacher = async (id, data) => {
  const res = await teachers.update(id, data);
};

exports.updateIsAdmin = async (id, data) => {
  const res = await isadmin.update(id, data);
};

exports.updateClass = async (id, data) => {
  const res = await classes.update(id, data);
};

//delete

exports.deleteStudent = async (id) => {
  const res = await students.delete(id);
  return res;
};

exports.deleteTeacher = async (id) => {
  const res = await teachers.delete(id);
  return res;
};

exports.deleteIsAdmin = async (id) => {
  const res = await isadmin.delete(id);
  return res;
};

exports.deleteClass = async (id) => {
  const res = await classes.delete(id);
  return res;
};

exports.dateComparison = (previousDate, currentDate) => {
  let currentDate = new Date(currentDate);
  let newDate = new Date(previousDate);

  let difference = currentDate - newDate;

  if (difference >= 3600000) {
    return true;
  } else {
    return false;
  }
};



