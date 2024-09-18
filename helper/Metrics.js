"use client";
import { useState } from "react";

import { useSelector } from "react-redux";

// const data = useSelector((state) => state.isAdmin.value);

// const classes = useSelector((state) => state.classes.classes);

// const students = useSelector((state) => state.students.students);

// const teachers = useSelector((state) => state.teachers.teachers);

// const books = useSelector((state) => state.books.books);

// const courses = useSelector((state) => state.courses.courses);

// const semesters = useSelector((state) => state.djs.semesters);

// const jamats = useSelector((state) => state.djs.jamats);

// const departments = useSelector((state) => state.djs.departments);

// const payments = useSelector((state) => state.djs.payments);

export const sts1 = (students) => {
  return {
    data: students,
    total: students.length,
  };
};

export const sts2 = (students) => {
  let annualActive = [];

  students.map((student) => {
    if (student.accountStatus.status == "regular") {
      if (
        student.paymentStatus.addmissionDueStatus == false &&
        student.paymentStatus.consequentDueStatus == false
      ) {
        annualActive.push(student);
      } else if (
        student.paymentStatus.addmissionDueStatus == true &&
        student.paymentStatus.consequentDueStatus == false
      ) {
        return;
      } else if (
        student.paymentStatus.addmissionDueStatus == true &&
        student.paymentStatus.consequentDueStatus == true
      ) {
        return;
      }
    } else {
      return;
    }
  });

  return {
    data: annualActive,
    total: annualActive.length,
  };
};

export const sts3 = (students) => {
  let data = [];

  students.map((student) => {
    if (student.accountStatus.status == "regular") {
      if (
        student.paymentStatus.addmissionDueStatus == false &&
        student.paymentStatus.consequentDueStatus == false
      ) {
        return;
      } else if (
        student.paymentStatus.addmissionDueStatus == true &&
        student.paymentStatus.consequentDueStatus == false
      ) {
        return;
      } else if (
        student.paymentStatus.addmissionDueStatus == true &&
        student.paymentStatus.consequentDueStatus == true
      ) {
        data.push(student);
      }
    } else {
      return;
    }
  });

  return {
    data: data,
    total: data.length,
  };
};

export const sts4 = (students, payments) => {
  let data = [];

  students.map((student) => {
    const paymentResult = payments.find((item) => {
      return item.paymentID == student.paymentStatus.paymentID;
    });

    if (student.accountStatus.status == "regular") {
      if (
        student.paymentStatus.addmissionDueStatus == false &&
        student.paymentStatus.consequentDueStatus == false
      ) {
        return;
      } else if (
        student.paymentStatus.addmissionDueStatus == true &&
        student.paymentStatus.consequentDueStatus == false
      ) {
        if (paymentResult) {
          return;
        } else {
          data.push(student);
        }
      } else if (
        student.paymentStatus.addmissionDueStatus == true &&
        student.paymentStatus.consequentDueStatus == true
      ) {
        return;
      }
    } else {
      return;
    }
  });

  return {
    data: data,
    total: data.length,
  };
};

export const sts18 = (students, payments) => {
  let data = [];

  students.map((student) => {
    const paymentResult = payments.find((item) => {
      return item.paymentID == student.paymentStatus.paymentID;
    });

    if (student.accountStatus.status == "regular") {
      if (
        student.paymentStatus.addmissionDueStatus == false &&
        student.paymentStatus.consequentDueStatus == false
      ) {
        return;
      } else if (
        student.paymentStatus.addmissionDueStatus == true &&
        student.paymentStatus.consequentDueStatus == false
      ) {
        if (paymentResult) {
          data.push(student);
        } else {
          return;
        }
      } else if (
        student.paymentStatus.addmissionDueStatus == true &&
        student.paymentStatus.consequentDueStatus == true
      ) {
        return;
      }
    } else {
      return;
    }
  });

  return {
    data: data,
    total: data.length,
  };
};

export const sts5 = (students) => {
  let data = [];

  students.map((student) => {
    if (student.accountStatus.status == "regular") {
      if (
        student.paymentStatus.addmissionDueStatus == false &&
        student.paymentStatus.consequentDueStatus == false
      ) {
        return;
      } else if (
        student.paymentStatus.addmissionDueStatus == true &&
        student.paymentStatus.consequentDueStatus == false
      ) {
        return;
      } else if (
        student.paymentStatus.addmissionDueStatus == true &&
        student.paymentStatus.consequentDueStatus == true
      ) {
        return;
      }
    } else {
      data.push(student);
    }
  });

  return {
    data: data,
    total: data.length,
  };
};

export const sts6 = (students, payments) => {
  let data = [];

  students.map((student) => {
    const paymentResult = payments.find((item) => {
      return item.paymentID == student.paymentStatus.paymentID;
    });

    if (paymentResult && student.accountStatus.status == "regular") {
      let actualArray = [...paymentResult.monthlyPaymentHistory];
      actualArray.pop();

      let decisionPending = actualArray.some((item) => {
        return item.Price && item.PaymentStatus == false;
      });

      let decisionActive = actualArray.every((item) => {
        return item.PaymentStatus == true;
      });

      if (decisionPending) {
        return;
      } else if (decisionActive) {
        data.push(student);
      } else {
        return;
      }
    }
  });

  return {
    data: data,
    total: data.length,
  };
};

export const sts7 = (students, payments) => {
  let data = [];

  students.map((student) => {
    const paymentResult = payments.find((item) => {
      return item.paymentID == student.paymentStatus.paymentID;
    });

    if (paymentResult && student.accountStatus.status == "regular") {
      let actualArray = [...paymentResult.monthlyPaymentHistory];
      actualArray.pop();

      let decisionPending = actualArray.some((item) => {
        return item.Price && item.PaymentStatus == false;
      });

      let decisionActive = actualArray.every((item) => {
        return item.PaymentStatus == true;
      });

      if (decisionPending) {
        data.push(student);
      } else if (decisionActive) {
        return;
      } else {
        return;
      }
    }
  });

  return {
    data: data,
    total: data.length,
  };
};

export const sts8 = (students, payments) => {
  let data = [];

  students.map((student) => {
    const paymentResult = payments.find((item) => {
      return item.paymentID == student.paymentStatus.paymentID;
    });

    if (paymentResult && student.accountStatus.status == "regular") {
      let actualArray = [...paymentResult.monthlyPaymentHistory];
      actualArray.pop();

      let decisionPending = actualArray.some((item) => {
        return item.Price && item.PaymentStatus == false;
      });

      let decisionActive = actualArray.every((item) => {
        return item.PaymentStatus == true;
      });

      if (decisionPending) {
        return;
      } else if (decisionActive) {
        return;
      } else {
        data.push(student);
      }
    }
  });

  return {
    data: data,
    total: data.length,
  };
};

export const sts9 = (students, payments) => {
  let data = [];

  students.map((student) => {
    const paymentResult = payments.find((item) => {
      return item.paymentID == student.paymentStatus.paymentID;
    });

    if (paymentResult && student.accountStatus.status == "regular") {
      if (student.fundStatus == "nafalSadka") {
        data.push(student);
      }
    }
  });

  return {
    data: data,
    total: data.length,
  };
};
export const sts10 = (students, payments) => {
  let data = [];

  students.map((student) => {
    const paymentResult = payments.find((item) => {
      return item.paymentID == student.paymentStatus.paymentID;
    });

    if (paymentResult && student.accountStatus.status == "regular") {
      if (student.fundStatus == "jakat") {
        data.push(student);
      }
    }
  });

  return {
    data: data,
    total: data.length,
  };
};
export const sts11 = (students, payments) => {
  let data = [];

  students.map((student) => {
    const paymentResult = payments.find((item) => {
      return item.paymentID == student.paymentStatus.paymentID;
    });

    if (paymentResult && student.accountStatus.status == "regular") {
      if (student.fundStatus == "none") {
        data.push(student);
      }
    }
  });

  return {
    data: data,
    total: data.length,
  };
};
