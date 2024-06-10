import "./loginpage.css";
import { selectAllData as selectStudents } from "@/apiservices/studentapiservices";
import { selectAllData as selectTeachers } from "@/apiservices/teacherapiservices";

async function getData() {
  const res = await selectStudents(
    {
      activeStatus: "active",
    },
    {
      password: false,
    }
  );

  const res2 = await selectTeachers(
    {
      activeStatus: "active",
    },
    {
      password: false,
    }
  );

  if (res.status == "Alhamdulillah" && res2.status == "Alhamdulillah") {
    const dataObject = {
      teachers: [],
      students: [],
    };

    dataObject.teachers = res.data;
    dataObject.students = res2.data;

    const finalArray = [...dataObject.teachers];
    return {
      final: finalArray.concat(dataObject.students),
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
  
  return <LoginPageDesign userData={data.final} />;
}

export default LoginPage;
