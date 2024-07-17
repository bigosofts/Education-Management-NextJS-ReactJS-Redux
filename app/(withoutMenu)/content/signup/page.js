import "./loginpage.css";
import { selectAllData as selectStudents } from "@/apiservices/studentapiservices";
import { selectAllData as selectTeachers } from "@/apiservices/teacherapiservices";

async function getData() {
  const res = await selectStudents(
    {
      activeStatus: "active",
    },
    {
      emailAddress: true,
      mobileNumber: true,
      userRole: true,
      userName: true,
    }
  );

  const res2 = await selectTeachers(
    {
      activeStatus: "active",
    },
    {
      emailAddress: true,
      mobileNumber: true,
      userRole: true,
      userName: true,
    }
  );

  if (res.status == "Alhamdulillah" && res2.status == "Alhamdulillah") {
    const dataObject = {
      teachers: [],
      students: [],
    };

    dataObject.teachers = res.data;
    dataObject.students = res2.data;

    return {
      students: dataObject.students,
      teachers: dataObject.teachers,
    };
  } else {
    mytoast.danger("Data fetching error. Try Refreshing the page");
  }
}

import LoginPageDesign from "@/components/loginPage/Loginpage";

async function LoginPage() {
  const data = await getData();

  return <LoginPageDesign finalData={data} />;
}

export default LoginPage;
