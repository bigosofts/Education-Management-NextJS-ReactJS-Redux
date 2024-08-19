import { selectDataPlus as selectDepartment } from "@/apiservices/departmentapiservices";
import { selectDataPlus as seletctJamat } from "@/apiservices/jamatapiservices";
import { selectDataPlus as selectSemester } from "@/apiservices/semesterapiservices";
import { batchAPICall } from "@/helper/batchApiCall";

import {
  selectDataPlus as selectPaymentsPlus,
  selectDataTwo as selectPayments,
} from "@/apiservices/paymentapiservices";

//this is async thunk example broilerplate
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  semesters: [],
  jamats: [],
  departments: [],
  payments: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchDjs = createAsyncThunk("djs/fetchDjs", async (paymentID) => {
  const departments = await batchAPICall(selectDepartment, 5, 0);

  const jamats = await batchAPICall(seletctJamat, 5, 0);

  const semesters = await batchAPICall(selectSemester, 5, "active");

  let payments;
  if (paymentID == "all") {
    payments = await batchAPICall(selectPayments, 5, 0);
  } else {
    payments = await batchAPICall(selectPaymentsPlus, 5, paymentID);
  }

  if (
    departments.length >= 0 &&
    jamats.length >= 0 &&
    semesters.length >= 0 &&
    payments.length >= 0
  ) {
  }

  return {
    departments: departments,
    jamats: jamats,
    semesters: semesters,
    payments: payments,
  };
});

const djsSlice = createSlice({
  name: "djs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDjs.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchDjs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jamats = action.payload.jamats;
        state.semesters = action.payload.semesters;
        state.departments = action.payload.departments;
        state.payments = action.payload.payments;
      })
      .addCase(fetchDjs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default djsSlice.reducer;
