import CryptoJS from "crypto-js";
import { Dexie } from "dexie";

//encrypt the data
const encryptAuto = async (data) => {
  let JSONData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(JSONData, NEXT_SECRET_KEY).toString();
};

exports.encryptData = async (data) => {
  let JSONData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(JSONData, NEXT_SECRET_KEY).toString();
};

//decrypt the data
exports.decryptData = async (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, NEXT_SECRET_KEY);
  let finalBytes = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return finalBytes;
};

//initiate indexed DB Database
const db = new Dexie("internetmadrasha");

//initiate database
db.version(1).stores({
  students: "++id, value, date",
  teachers: "++id, value, date",
  isadmin: "++id, value, date",
  classes: "++id, value, date",
  books: "++id, value, date",
});

const { students, teachers, isadmin, classes, books } = db;

//create
exports.createStudent = async (data) => {
  const encryptedData = await encryptAuto(data);

  const res = await students.add({
    value: encryptedData,
    date: new Date(Date.now()).toISOString(),
  });
  return res;
};

exports.createTeacher = async (data) => {
  const encryptedData = await encryptAuto(data);

  const res = await teachers.add({
    value: encryptedData,
    date: new Date(Date.now()).toISOString(),
  });
  return res;
};

exports.createIsAdmin = async (data) => {
  const encryptedData = await encryptAuto(data);

  const res = await isadmin.add({
    value: encryptedData,
    date: new Date(Date.now()).toISOString(),
  });
  return res;
};

exports.createClass = async (data) => {
  const encryptedData = await encryptAuto(data);

  const res = await classes.add({
    value: encryptedData,
    date: new Date(Date.now()).toISOString(),
  });
  return res;
};

exports.createClass = async (data) => {
  const encryptedData = await encryptAuto(data);

  const res = await classes.add({
    value: encryptedData,
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
