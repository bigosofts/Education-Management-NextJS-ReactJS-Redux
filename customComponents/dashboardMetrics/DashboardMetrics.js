"use client";
import "./css/style.css";
import BarChart from "./Barchart.js";
import PieChart from "./Piechart";

import { useEffect, useState } from "react";
import {
  selectAllData as selectStudents,
  updateData as updateStudents,
} from "@/apiservices/studentapiservices";
import { selectData as selectAbouts } from "@/apiservices/aboutapiservices";
import { selectData as selectActivities } from "@/apiservices/activityapiservices";
import { selectData as selectComments } from "@/apiservices/commentapiservice";
import { selectData as selectCourses } from "@/apiservices/courseapiservices";
import { selectData as selectEvents } from "@/apiservices/eventapiservices";
import { selectData as selectMenus } from "@/apiservices/menuapiservices";
import { selectData as selectnotices } from "@/apiservices/noticeapiservices";
import { selectData as selectPosts } from "@/apiservices/postapiservices";
import { selectData as selectResults } from "@/apiservices/resultapiservices";
import { selectData as selectSliders } from "@/apiservices/sliderapiservices";
import { selectAllData as selectTeachers } from "@/apiservices/teacherapiservices";
import { selectData as selectWidgets } from "@/apiservices/widgetapiservices";
import {
  selectDataTwo as selectPayments,
  updateData as updatePayments,
} from "@/apiservices/paymentapiservices";

import {
  selectDataTwo as selectClasses,
  updateData as updateClasses,
} from "@/apiservices/classapiservices";

function DashboardMetrics(props) {
  const [data, setData] = useState();
  const [students, setStudents] = useState();
  const [allalemalema, setAllAlemalema] = useState();
  const [allurdu, setAllUrdu] = useState();
  const [payments, setPayments] = useState();
  const [classes, setClasses] = useState();

  const [allFarzeayinampara, setAllFarzeayinampara] = useState();
  const [allEzranahusorof, setAllEzranahusorof] = useState();
  const [allShishumaktab, setAllShishumaktab] = useState();
  const [allAbacusteacher, setAllAbacusteacher] = useState();
  const [allFarzeayinnajera, setAllFarzeayinnajera] = useState();
  const [allAbacusstudent, setAllAbacusstudent] = useState();
  const [allRamadanquranulkarim, setAllRamadanquranulkarim] = useState();
  const [allShishunajera, setAllShishunajera] = useState();
  const [allHifjulQuran, setAllHifjulQuran] = useState();
  const [allFarzeAyinMaktab, setAllFarzeAyinMaktab] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const [
          res,
          res1,
          res2,
          res3,
          res4,
          res5,
          res6,
          res7,
          res8,
          res9,
          res10,
          res11,
          res12,
          res13,
          res14,
        ] = await Promise.all([
          selectStudents(null, null),
          selectAbouts(null, null),
          selectActivities(null, null),
          selectComments(null, null),
          selectCourses(null, null),
          selectEvents(null, null),
          selectMenus(null, null),
          selectnotices(null, null),
          selectPosts(null, null),
          selectResults(null, null),
          selectSliders(null, null),
          selectTeachers(null, null),
          selectWidgets(null, null),
          selectPayments(null, null),
          selectClasses(null, null),
        ]);

        setStudents(res.data);
        setPayments(res13.data);
        setClasses(res14.data);

        async function alemalemaQuery(datas) {
          return datas.filter((item) => {
            if (item.batchCount == "batch-20240713") {
              let semester = item.studentSemester.filter((item) => {
                return /school/i.test(item.code) && item.status == "active";
              });

              if (semester.length > 1) {
                if (
                  semester[semester.length - 1].code == "school-year1semester1"
                ) {
                  return item;
                }
              } else if (semester.length == 1) {
                if (
                  semester[semester.length - 1].code == "school-year1semester1"
                ) {
                  return item;
                }
              }
            }
          });
        }

        async function alemalemaQueryS2(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester02") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester02") {
                return item;
              }
            }
          });
        }

        async function alemalemaQueryS3(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester03") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester03") {
                return item;
              }
            }
          });
        }

        async function alemalemaQueryS4(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester04") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester04") {
                return item;
              }
            }
          });
        }

        async function alemalemaQueryS5(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester05") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester05") {
                return item;
              }
            }
          });
        }

        async function alemalemaQueryS6(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester06") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester06") {
                return item;
              }
            }
          });
        }

        async function alemalemaQueryS7(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester07") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester07") {
                return item;
              }
            }
          });
        }

        async function alemalemaQueryS8(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester08") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester08") {
                return item;
              }
            }
          });
        }
        async function alemalemaQueryS9(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester09") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester09") {
                return item;
              }
            }
          });
        }
        async function alemalemaQueryS10(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester10") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester10") {
                return item;
              }
            }
          });
        }
        async function alemalemaQueryS11(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester11") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester11") {
                return item;
              }
            }
          });
        }
        async function alemalemaQueryS12(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester12") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester12") {
                return item;
              }
            }
          });
        }
        async function alemalemaQueryS13(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester13") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester13") {
                return item;
              }
            }
          });
        }
        async function alemalemaQueryS14(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester14") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester14") {
                return item;
              }
            }
          });
        }
        async function alemalemaQueryS15(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester15") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester15") {
                return item;
              }
            }
          });
        }
        async function alemalemaQueryS16(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (semester[semester.length - 1].code == "semester16") {
                return item;
              }
            } else if (semester.length == 1) {
              if (semester[semester.length - 1].code == "semester16") {
                return item;
              }
            }
          });
        }

        async function allalemalemaQuery(datas) {
          return datas.filter((item) => {
            let semester = item.studentSemester.filter((item) => {
              return /semester/i.test(item.code) && item.status == "active";
            });

            if (semester.length > 1) {
              if (/semester/i.test(semester[semester.length - 1].code)) {
                return item;
              }
            } else if (semester.length == 1) {
              if (/semester/i.test(semester[semester.length - 1].code)) {
                return item;
              }
            }
          });
        }

        async function hifjulquranQuery(datas) {
          return datas.filter((item) => {
            let course = item.studentCourseCode.filter((item) => {
              return /hifjulquran/i.test(item.code) && item.status == "active";
            });

            if (course.length > 1) {
              if (/hifjulquran/i.test(course[course.length - 1].code)) {
                return item;
              }
            } else if (course.length == 1) {
              if (/hifjulquran/i.test(course[course.length - 1].code)) {
                return item;
              }
            }
          });
        }

        async function farzeAyinMaktabQuery(datas) {
          return datas.filter((item) => {
            let course = item.studentCourseCode.filter((item) => {
              return (
                /farzeayinmaktab/i.test(item.code) && item.status == "active"
              );
            });

            if (course.length > 1) {
              if (/farzeayinmaktab/i.test(course[course.length - 1].code)) {
                return item;
              }
            } else if (course.length == 1) {
              if (/farzeayinmaktab/i.test(course[course.length - 1].code)) {
                return item;
              }
            }
          });
        }

        async function farzeayinamparaQuery(datas) {
          return datas.filter((item) => {
            let course = item.studentCourseCode.filter((item) => {
              return (
                /farzeayinampara/i.test(item.code) && item.status == "active"
              );
            });

            if (course.length > 1) {
              if (/farzeayinampara/i.test(course[course.length - 1].code)) {
                return item;
              }
            } else if (course.length == 1) {
              if (/farzeayinampara/i.test(course[course.length - 1].code)) {
                return item;
              }
            }
          });
        }

        async function ezranahusorofQuery(datas) {
          return datas.filter((item) => {
            let course = item.studentCourseCode.filter((item) => {
              return (
                /ezranahusorof/i.test(item.code) && item.status == "active"
              );
            });

            if (course.length > 1) {
              if (/ezranahusorof/i.test(course[course.length - 1].code)) {
                return item;
              }
            } else if (course.length == 1) {
              if (/ezranahusorof/i.test(course[course.length - 1].code)) {
                return item;
              }
            }
          });
        }

        async function shishumaktabQuery(datas) {
          return datas.filter((item) => {
            let course = item.studentCourseCode.filter((item) => {
              return /shishumaktab/i.test(item.code) && item.status == "active";
            });

            if (course.length > 1) {
              if (/shishumaktab/i.test(course[course.length - 1].code)) {
                return item;
              }
            } else if (course.length == 1) {
              if (/shishumaktab/i.test(course[course.length - 1].code)) {
                return item;
              }
            }
          });
        }

        async function abacus_teacherQuery(datas) {
          return datas.filter((item) => {
            let course = item.studentCourseCode.filter((item) => {
              return (
                /abacus_teacher/i.test(item.code) && item.status == "active"
              );
            });

            if (course.length > 1) {
              if (/abacus_teacher/i.test(course[course.length - 1].code)) {
                return item;
              }
            } else if (course.length == 1) {
              if (/abacus_teacher/i.test(course[course.length - 1].code)) {
                return item;
              }
            }
          });
        }

        async function farzeayinnajeraQuery(datas) {
          return datas.filter((item) => {
            let course = item.studentCourseCode.filter((item) => {
              return (
                /farzeayinnajera/i.test(item.code) && item.status == "active"
              );
            });

            if (course.length > 1) {
              if (/farzeayinnajera/i.test(course[course.length - 1].code)) {
                return item;
              }
            } else if (course.length == 1) {
              if (/farzeayinnajera/i.test(course[course.length - 1].code)) {
                return item;
              }
            }
          });
        }

        async function abacus_studentQuery(datas) {
          return datas.filter((item) => {
            if (item.batchCount == "batch-20240420") {
              let course = item.studentCourseCode.filter((item) => {
                return (
                  /abacus_student/i.test(item.code) && item.status == "active"
                );
              });

              if (course.length > 1) {
                if (/abacus_student/i.test(course[course.length - 1].code)) {
                  return item;
                }
              } else if (course.length == 1) {
                if (/abacus_student/i.test(course[course.length - 1].code)) {
                  return item;
                }
              }
            }
          });
        }

        async function urduQuery(datas) {
          return datas.filter((item) => {
            let course = item.studentCourseCode.filter((item) => {
              return /urdu/i.test(item.code) && item.status == "active";
            });

            if (course.length > 1) {
              if (/urdu/i.test(course[course.length - 1].code)) {
                return item;
              }
            } else if (course.length == 1) {
              if (/urdu/i.test(course[course.length - 1].code)) {
                return item;
              }
            }
          });
        }

        async function ramadanquranulkarimQuery(datas) {
          return datas.filter((item) => {
            let course = item.studentCourseCode.filter((item) => {
              return (
                /ramadanquranulkarim/i.test(item.code) &&
                item.status == "active"
              );
            });

            if (course.length > 1) {
              if (/ramadanquranulkarim/i.test(course[course.length - 1].code)) {
                return item;
              }
            } else if (course.length == 1) {
              if (/ramadanquranulkarim/i.test(course[course.length - 1].code)) {
                return item;
              }
            }
          });
        }

        async function shishunajeraQuery(datas) {
          return datas.filter((item) => {
            let course = item.studentCourseCode.filter((item) => {
              return /shishunajera/i.test(item.code) && item.status == "active";
            });

            if (course.length > 1) {
              if (/shishunajera/i.test(course[course.length - 1].code)) {
                return item;
              }
            } else if (course.length == 1) {
              if (/shishunajera/i.test(course[course.length - 1].code)) {
                return item;
              }
            }
          });
        }

        const alemalemaCount = await alemalemaQuery(res.data);

        console.log(
          JSON.stringify(
            alemalemaCount.map((item) => {
              return {
                Name: item.firstName.en + " " + item.lastName.en,
                SID: item.userName,
                Email: item.emailAddress,
                Mobile: item.mobileNumber,
                Gender: item.gender,
                Country: item.countryName,
                Batch: item.batchCount,
              };
            })
          )
        );

        const alemalemaCountS2 = await alemalemaQueryS2(res.data);
        const alemalemaCountS3 = await alemalemaQueryS3(res.data);
        const alemalemaCountS4 = await alemalemaQueryS4(res.data);
        const alemalemaCountS5 = await alemalemaQueryS5(res.data);
        const alemalemaCountS6 = await alemalemaQueryS6(res.data);
        const alemalemaCountS7 = await alemalemaQueryS7(res.data);
        const alemalemaCountS8 = await alemalemaQueryS8(res.data);
        const alemalemaCountS9 = await alemalemaQueryS9(res.data);
        const alemalemaCountS10 = await alemalemaQueryS10(res.data);

        const alemalemaCountS11 = await alemalemaQueryS11(res.data);
        const alemalemaCountS12 = await alemalemaQueryS12(res.data);
        const alemalemaCountS13 = await alemalemaQueryS13(res.data);
        const alemalemaCountS14 = await alemalemaQueryS14(res.data);
        const alemalemaCountS15 = await alemalemaQueryS15(res.data);
        const alemalemaCountS16 = await alemalemaQueryS16(res.data);

        const allalemalemaCount = await allalemalemaQuery(res.data);
        setAllAlemalema(allalemalemaCount);

        const hifjulQuranCount = await hifjulquranQuery(res.data);
        setAllHifjulQuran(hifjulQuranCount);

        const farzeAyinMaktabCount = await farzeAyinMaktabQuery(res.data);
        setAllFarzeAyinMaktab(farzeAyinMaktabCount);

        const farzeayinampara = await farzeayinamparaQuery(res.data);
        setAllFarzeayinampara(farzeayinampara);
        const ezranahusorof = await ezranahusorofQuery(res.data);
        setAllEzranahusorof(ezranahusorof);
        const shishumaktab = await shishumaktabQuery(res.data);
        setAllShishumaktab(shishumaktab);
        const abacus_teacher = await abacus_teacherQuery(res.data);
        setAllAbacusteacher(abacus_teacher);
        const farzeayinnajera = await farzeayinnajeraQuery(res.data);
        setAllFarzeayinnajera(farzeayinnajera);

        const abacus_student = await abacus_studentQuery(res.data);
        setAllAbacusstudent(abacus_student);
        const urdu = await urduQuery(res.data);
        setAllUrdu(urdu);
        const ramadanquranulkarim = await ramadanquranulkarimQuery(res.data);
        setAllRamadanquranulkarim(ramadanquranulkarim);
        const shishunajera = await shishunajeraQuery(res.data);
        setAllShishunajera(shishunajera);

        // console.log(
        //   alemalemaCount &&
        //     JSON.stringify(
        //       alemalemaCount.map((item) => {
        //         return {
        //           SID: item.userName,
        //           Name: item.firstName.en + " " + item.lastName.en,
        //           Mobile: item.mobileNumber,
        //         };
        //       })
        //     )
        // );

        // let male = alemalemaCount.filter((item) => {
        //   return item.gender == "male";
        // });
        // let female = alemalemaCount.filter((item) => {
        //   return item.gender == "female";
        // });

        // console.log(
        //   JSON.stringify(
        //     male.map((item, i) => {
        //       return {
        //         No: i + 1,
        //         SID: item.userName,
        //         Name: item.firstName.en + " " + item.lastName.en,
        //         Mobile: item.mobileNumber,
        //         Email: item.emailAddress,
        //         Day_1: {
        //           Mizan_Munshaib: "",
        //           Illmus_Saraf: "",
        //           Aso_Arbi_Sikhi: "",
        //           Talimul_Islam: "",
        //           At_Tamrinul_Kitabi: "",
        //           Eso_Sorof_Sikhi: "",
        //         },
        //         Day_2: {
        //           Mizan_Munshaib: "",
        //           Illmus_Saraf: "",
        //           Aso_Arbi_Sikhi: "",
        //           Talimul_Islam: "",
        //           At_Tamrinul_Kitabi: "",
        //           Eso_Sorof_Sikhi: "",
        //         },
        //         Day_3: {
        //           Mizan_Munshaib: "",
        //           Illmus_Saraf: "",
        //           Aso_Arbi_Sikhi: "",
        //           Talimul_Islam: "",
        //           At_Tamrinul_Kitabi: "",
        //           Eso_Sorof_Sikhi: "",
        //         },
        //         Day_4: {
        //           Mizan_Munshaib: "",
        //           Illmus_Saraf: "",
        //           Aso_Arbi_Sikhi: "",
        //           Talimul_Islam: "",
        //           At_Tamrinul_Kitabi: "",
        //           Eso_Sorof_Sikhi: "",
        //         },
        //         Day_5: {
        //           Mizan_Munshaib: "",
        //           Illmus_Saraf: "",
        //           Aso_Arbi_Sikhi: "",
        //           Talimul_Islam: "",
        //           At_Tamrinul_Kitabi: "",
        //           Eso_Sorof_Sikhi: "",
        //         },
        //       };
        //     })
        //   )
        // );

        setData({
          student: res.data.length,
          alemalema: alemalemaCount && alemalemaCount.length,
          alemalemas2: alemalemaCountS2 && alemalemaCountS2.length,
          alemalemas3: alemalemaCountS3 && alemalemaCountS3.length,
          alemalemas4: alemalemaCountS4 && alemalemaCountS4.length,
          alemalemas5: alemalemaCountS5 && alemalemaCountS5.length,
          alemalemas6: alemalemaCountS6 && alemalemaCountS6.length,
          alemalemas7: alemalemaCountS7 && alemalemaCountS7.length,
          alemalemas8: alemalemaCountS8 && alemalemaCountS8.length,
          alemalemas9: alemalemaCountS9 && alemalemaCountS9.length,
          alemalemas10: alemalemaCountS10 && alemalemaCountS10.length,
          alemalemas11: alemalemaCountS11 && alemalemaCountS11.length,
          alemalemas12: alemalemaCountS12 && alemalemaCountS12.length,
          alemalemas13: alemalemaCountS13 && alemalemaCountS13.length,
          alemalemas14: alemalemaCountS14 && alemalemaCountS14.length,
          alemalemas15: alemalemaCountS15 && alemalemaCountS15.length,
          alemalemas16: alemalemaCountS16 && alemalemaCountS16.length,

          farzeayinampara: farzeayinampara && farzeayinampara.length,
          ezranahusorof: ezranahusorof && ezranahusorof.length,
          shishumaktab: shishumaktab && shishumaktab.length,
          abacus_teacher: abacus_teacher && abacus_teacher.length,
          farzeayinnajera: farzeayinnajera && farzeayinnajera.length,
          abacus_student: abacus_student && abacus_student.length,
          urdu: urdu && urdu.length,
          ramadanquranulkarim:
            ramadanquranulkarim && ramadanquranulkarim.length,
          shishunajera: shishunajera && shishunajera.length,

          allalemalema: allalemalemaCount && allalemalemaCount.length,
          hifjulquran: hifjulQuranCount && hifjulQuranCount.length,
          farzeayinmaktab: farzeAyinMaktabCount && farzeAyinMaktabCount.length,
          about: res1.data.length,
          activity: res2.data.length,
          comment: res3.data.length,
          course: res4.data.length,
          event: res5.data.length,
          menu: res6.data.length,
          notice: res7.data.length,
          post: res8.data.length,
          result: res9.data.length,
          slider: res10.data.length,
          teacher: res11.data.length,
          widget: res12.data.length,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error (e.g., retry or show an error message)
      }
    }

    getData();
  }, []);

  async function changeBatch1() {
    if (students) {
      if (allalemalema) {
        try {
          for (const item of allalemalema) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch2() {
    if (students) {
      if (allurdu) {
        try {
          for (const item of allurdu) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch3() {
    if (students) {
      if (allAbacusteacher) {
        try {
          for (const item of allAbacusteacher) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch4() {
    if (students) {
      if (allEzranahusorof) {
        try {
          for (const item of allEzranahusorof) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch5() {
    if (students) {
      if (allFarzeAyinMaktab) {
        try {
          for (const item of allFarzeAyinMaktab) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch6() {
    if (students) {
      if (allFarzeayinampara) {
        try {
          for (const item of allFarzeayinampara) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch7() {
    if (students) {
      if (allFarzeayinnajera) {
        try {
          for (const item of allFarzeayinnajera) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch8() {
    if (students) {
      if (allHifjulQuran) {
        try {
          for (const item of allHifjulQuran) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch9() {
    if (students) {
      if (allRamadanquranulkarim) {
        try {
          for (const item of allRamadanquranulkarim) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch10() {
    if (students) {
      if (allShishumaktab) {
        try {
          for (const item of allShishumaktab) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch11() {
    if (students) {
      if (allShishunajera) {
        try {
          for (const item of allShishunajera) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }
  async function changeBatch12() {
    if (students) {
      if (allAbacusstudent) {
        try {
          for (const item of allAbacusstudent) {
            let specific = students.find((item2) => {
              return item2.userName === item.userName;
            });
            if (specific) {
              const res5 = await updateStudents(
                specific.userName,
                specific.firstName.en,
                specific.firstName.bn,
                specific.lastName.en,
                specific.lastName.bn,
                specific.nidNumber,
                specific.birthRegNumber,
                specific.fatherName.en,
                specific.fatherName.bn,
                specific.emailAddress,
                undefined,
                specific.mobileNumber,
                specific.occupation,
                specific.studentCourseCode,
                specific.studentJamatCode,
                specific.gender,
                specific.dateOfBirth,
                specific.countryName,
                specific.fullPresentAddress,
                specific.fullPermanentAddress,
                specific.admissionSession,
                specific.admissionDate,
                specific.studentMotive,
                specific.details,
                specific.paymentStatus,
                specific.userRole,
                specific.extracurricular,
                specific.activeStatus,
                specific._id,
                specific.studentDepartment,
                specific.studentSemester,
                "batch-20240420"
              );
              if (res5 && res5.status === "Alhamdulillah") {
                console.log(specific.userName + " updated successfully.");
              } else {
                console.log("Failed to update " + specific.userName);
              }
            } else {
              console.log("Student not found:", item.userName);
            }
          }
        } catch (error) {
          console.error("Error updating students:", error);
        }
      }
    }
  }

  // async function modifyRecord(payments) {
  //   if (!Array.isArray(payments) || payments.length === 0) {
  //     console.log("No payments data available.");
  //     return;
  //   }

  //   let idArray = ["payment-IMS2024030537"];
  //   // for (let i = 547; i <= 1622; i++) {
  //   //   let id = "payment-IMS202404" + i.toString().padStart(4, "0");
  //   //   idArray.push(id);
  //   // }

  //   idArray.forEach(async (item) => {
  //     const specificPayment = payments.find((item2) => item2.paymentID == item);
  //     let monthlyPaymentHistory = specificPayment.monthlyPaymentHistory;

  //     monthlyPaymentHistory.unshift({
  //       Date: new Date("2024-04-20"),
  //       PaymentStatus: false,
  //       Price: null,
  //       currency: "",
  //       transactionID: "",
  //       senderNo: "",
  //       paymentWay: "",
  //       nextMonthlyDate: "",
  //     });

  //     const res = await updatePayments({
  //       paymentID: specificPayment.paymentID,
  //       paymentCurrency: specificPayment.paymentCurrency,
  //       admissionDate: specificPayment.admissionDate,
  //       admissionPrice: specificPayment.admissionPrice,
  //       monthlyPaymentPrice: specificPayment.monthlyPaymentPrice,
  //       admissionPaymentHistory: specificPayment.admissionPaymentHistory,
  //       monthlyPaymentHistory: monthlyPaymentHistory,
  //       activeStatus: specificPayment.activeStatus,
  //       idValue: specificPayment._id,
  //     });

  //     if (res.status === "Alhamdulillah") {
  //       console.log(
  //         `Data updated: ${specificPayment.paymentID}`,
  //         specificPayment
  //       );
  //     }
  //   });
  // }
  // modifyRecord(payments && payments);

  // async function changeClass(classes) {
  //   for (const item of classes) {
  //     try {
  //       const res = await updateClasses({
  //         classID: item.classID,
  //         courseID: item.courseID,
  //         batchNo: item.batchNo,
  //         maleClassLink: item.maleClassLink,
  //         femaleClassLink: item.femaleClassLink,
  //         departmentID: item.departmentID,
  //         jamatID: item.jamatID,
  //         semesterID: item.semesterID,
  //         bookID: item.bookID,
  //         teacher: item.teacher,
  //         examQuestion: item.examQuestion,
  //         students: [],
  //         classStartTime: item.classStartTime,
  //         classEndTime: item.classEndTime,
  //         activeStatus: item.activeStatus,
  //         idValue: item._id,
  //       });
  //       console.log("Class updated successfully:", res);
  //     } catch (error) {
  //       console.error("Error updating class:", error);
  //     }
  //   }
  // }

  // async function setStudentToClass(datas, classes) {
  //   // Filter specific students based on batch and active semester
  //   let specificStudent = datas.filter((item) => {
  //     if (item.batchCount == "batch-20240420") {
  //       // let semester = item.studentSemester.filter((sem) => {
  //       //   return /semester/i.test(sem.code) && sem.status == "active";
  //       // });

  //       // if (semester.length > 1) {
  //       //   if (semester[semester.length - 1].code == "semester01") {
  //       //     return true;
  //       //   }
  //       // } else if (semester.length == 1) {
  //       //   if (semester[semester.length - 1].code == "semester01") {
  //       //     return true;
  //       //   }
  //       // }

  //       let semester = item.studentCourseCode.filter((sem) => {
  //         return /hifjulquran/i.test(sem.code) && sem.status == "active";
  //       });

  //       if (semester.length > 1) {
  //         if (/hifjulquran/i.test(semester[semester.length - 1].code)) {
  //           return true;
  //         }
  //       } else if (semester.length == 1) {
  //         if (/hifjulquran/i.test(semester[semester.length - 1].code)) {
  //           return item;
  //         }
  //       }
  //     }
  //     return false;
  //   });

  //   // Filter classes based on course ID and semester ID
  //   let relevantClasses = classes.filter((cls) => {
  //     return cls.courseID == "hifjulquran" && cls.batchNo == "batch-20240420";
  //   });

  //   if (relevantClasses.length > 0) {
  //     for (const cls of relevantClasses) {
  //       for (const student of specificStudent) {
  //         // If the class has no students, add the student
  //         if (cls.students.length == 0) {
  //           cls.students.push({
  //             SID: student.userName,
  //             sName: student.firstName.en + " " + student.lastName.en,
  //             mobileNumber: student.mobileNumber,
  //             attendance: [],
  //           });

  //           const res = await updateClasses({
  //             classID: cls.classID,
  //             courseID: cls.courseID,
  //             batchNo: cls.batchNo,
  //             maleClassLink: cls.maleClassLink,
  //             femaleClassLink: cls.femaleClassLink,
  //             departmentID: cls.departmentID,
  //             jamatID: cls.jamatID,
  //             semesterID: cls.semesterID,
  //             bookID: cls.bookID,
  //             teacher: cls.teacher,
  //             examQuestion: cls.examQuestion,
  //             students: cls.students,
  //             classStartTime: cls.classStartTime,
  //             classEndTime: cls.classEndTime,
  //             activeStatus: cls.activeStatus,
  //             idValue: cls._id,
  //           });

  //           if (res.status == "Alhamdulillah") {
  //             console.log(
  //               "A student record has been created inside " + cls.classID
  //             );
  //           }
  //         } else if (!cls.students.some((s) => s.SID == student.userName)) {
  //           // If the student is not already in the class, add the student
  //           cls.students.push({
  //             SID: student.userName,
  //             sName: student.firstName.en + " " + student.lastName.en,
  //             mobileNumber: student.mobileNumber,
  //             attendance: [],
  //           });

  //           const res = await updateClasses({
  //             classID: cls.classID,
  //             courseID: cls.courseID,
  //             batchNo: cls.batchNo,
  //             maleClassLink: cls.maleClassLink,
  //             femaleClassLink: cls.femaleClassLink,
  //             departmentID: cls.departmentID,
  //             jamatID: cls.jamatID,
  //             semesterID: cls.semesterID,
  //             bookID: cls.bookID,
  //             teacher: cls.teacher,
  //             examQuestion: cls.examQuestion,
  //             students: cls.students,
  //             classStartTime: cls.classStartTime,
  //             classEndTime: cls.classEndTime,
  //             activeStatus: cls.activeStatus,
  //             idValue: cls._id,
  //           });

  //           if (res.status == "Alhamdulillah") {
  //             console.log(
  //               "A student record has been created inside " + cls.classID
  //             );
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  // function foreignCountry(students) {
  //   let a = students.filter((item) => {
  //     if (
  //       item.countryName != "Bangladesh" &&
  //       item.paymentStatus.addmissionDueStatus == false &&
  //       item.paymentStatus.consequentDueStatus == false
  //     ) {
  //       return true;
  //     }
  //   });

  //   console.log(
  //     JSON.stringify(
  //       a.map((item) => {
  //         return {
  //           SID: item.userName,
  //           Name: item.firstName.en + " " + item.lastName.en,
  //           Mobile: item.mobileNumber,
  //           Email: item.emailAddress,
  //           Country: item.countryName,
  //           Gender: item.gender,
  //         };
  //       })
  //     )
  //   );
  // }

  // if (students) {
  //   foreignCountry(students);
  // }

  if (data) {
    return (
      <div className="main-box w-full min-w-[250px] overflow-y-scroll mx-5 pb-10">
        <div className="dsh-container">
          <div class="dsh-card-row">
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Students</p>
                      <h2 class="card-text text-amount">{data.student}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-yellow">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Teachers</p>
                      <h2 class="card-text text-amount">{data.teacher}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-blue">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Notices</p>
                      <h2 class="card-text text-amount">{data.notice}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-orange">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Events</p>
                      <h2 class="card-text text-amount">{data.event}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-blue">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Results</p>
                      <h2 class="card-text text-amount">{data.result}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-id-card" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-orange">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Abouts</p>
                      <h2 class="card-text text-amount">{data.about}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-address-book-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-yellow">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Courses</p>
                      <h2 class="card-text text-amount">{data.course}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Activities</p>
                      <h2 class="card-text text-amount">{data.activity}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-book" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Widgets</p>
                      <h2 class="card-text text-amount">{data.widget}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-cogs" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-yellow">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Posts</p>
                      <h2 class="card-text text-amount">{data.post}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-check" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-blue">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Comments</p>
                      <h2 class="card-text text-amount">{data.comment}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-comments-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-orange">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Menus</p>
                      <h2 class="card-text text-amount">{data.menu}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-folder" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-blue">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Sliders</p>
                      <h2 class="card-text text-amount">{data.slider}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-bolt" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-orange">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Connected</p>
                      <h2 class="card-text text-amount">10</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-rss" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-yellow">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Emails</p>
                      <h2 class="card-text text-amount">20</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Fund</p>
                      <h2 class="card-text text-amount">5000</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-money" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Mijan Nahobemir</p>
                      <h2 class="card-text text-amount">{data.alemalema}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">All Alemalema</p>
                      <h2 class="card-text text-amount">{data.allalemalema}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Mijan-Nahobemir-2</p>
                      <h2 class="card-text text-amount">{data.alemalemas2}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Mijan-Nahobemir-3</p>
                      <h2 class="card-text text-amount">{data.alemalemas3}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Nahu</p>
                      <h2 class="card-text text-amount">{data.alemalemas4}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Fique</p>
                      <h2 class="card-text text-amount">{data.alemalemas5}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Quranul Karim</p>
                      <h2 class="card-text text-amount">{data.alemalemas6}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Usule Fique</p>
                      <h2 class="card-text text-amount">{data.alemalemas7}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Adab</p>
                      <h2 class="card-text text-amount">{data.alemalemas8}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">usule Hadis & Aqidah</p>
                      <h2 class="card-text text-amount">{data.alemalemas9}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Balagat & Mantek</p>
                      <h2 class="card-text text-amount">{data.alemalemas10}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Hadis</p>
                      <h2 class="card-text text-amount">{data.alemalemas11}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Quranul Karim Tafsir</p>
                      <h2 class="card-text text-amount">{data.alemalemas12}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Hidayat</p>
                      <h2 class="card-text text-amount">{data.alemalemas13}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Daorah</p>
                      <h2 class="card-text text-amount">{data.alemalemas14}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Urdu Alemalema</p>
                      <h2 class="card-text text-amount">{data.alemalemas15}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Ezra Alemalema</p>
                      <h2 class="card-text text-amount">{data.alemalemas16}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">farzeayinampara</p>
                      <h2 class="card-text text-amount">
                        {data.farzeayinampara}
                      </h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">ezranahusorof</p>
                      <h2 class="card-text text-amount">
                        {data.ezranahusorof}
                      </h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">shishumaktab</p>
                      <h2 class="card-text text-amount">{data.shishumaktab}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">abacus_teacher</p>
                      <h2 class="card-text text-amount">
                        {data.abacus_teacher}
                      </h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">farzeayinnajera</p>
                      <h2 class="card-text text-amount">
                        {data.farzeayinnajera}
                      </h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">abacus_student</p>
                      <h2 class="card-text text-amount">
                        {data.abacus_student}
                      </h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">urdu</p>
                      <h2 class="card-text text-amount">{data.urdu}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">ramadanquranulkarim</p>
                      <h2 class="card-text text-amount">
                        {data.ramadanquranulkarim}
                      </h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">shishunajera</p>
                      <h2 class="card-text text-amount">{data.shishunajera}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">All Hifjul Quran</p>
                      <h2 class="card-text text-amount">{data.hifjulquran}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">FarzeAyin Maktab</p>
                      <h2 class="card-text text-amount">
                        {data.farzeayinmaktab}
                      </h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dsh-card-row">
            <div class="dsh-col-chart">
              <div class="card chart">
                <BarChart />
              </div>
            </div>
            <div class="dsh-col-chart">
              <div class="card chart">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={changeBatch1}>
          Change Batch for alemalema students
        </button>
        <br />
        <br />
        <button onClick={changeBatch2}>Change Batch for urdu students</button>
        <br />
        <br />
        <button onClick={changeBatch3}>Change Batch for Abacus Teacher</button>
        <br />
        <br />

        <button onClick={changeBatch4}>Change Batch for Ezra solo</button>
        <br />
        <br />
        <button onClick={changeBatch5}>
          Change Batch for Farze ayin Maktab
        </button>
        <br />
        <br />
        <button onClick={changeBatch6}>
          Change Batch for Farze ayin Ampara
        </button>
        <br />
        <br />

        <button onClick={changeBatch7}>
          Change Batch for Farze ayin Najera
        </button>
        <br />
        <br />
        <button onClick={changeBatch8}>Change Batch for Hifjul Quran</button>
        <br />
        <br />
        <button onClick={changeBatch9}>
          Change Batch for Ramadan Quranul Karim
        </button>
        <br />
        <br />
        <button onClick={changeBatch10}>Change Batch for Shishu Maktab</button>
        <br />
        <br />
        <button onClick={changeBatch11}>Change Batch for Shishu Najera</button>
        <br />
        <br />
        <button onClick={changeBatch12}>Change Batch for Abacus Student</button>
        <br />
        <br />
        <button onClick={insertOneRecord}>
          Change Batch for Abacus Student
        </button>
        <br />
        <br /> */}
      </div>
    );
  }
}

export default DashboardMetrics;
