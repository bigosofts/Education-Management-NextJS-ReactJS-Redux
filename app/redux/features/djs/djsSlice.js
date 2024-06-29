import { selectDataTwo as selectDepartment } from "@/apiservices/departmentapiservices";
import { selectDataTwo as seletcJamat } from "@/apiservices/jamatapiservices";
import { selectDataTwo as selectSemester } from "@/apiservices/semesterapiservices";

import { selectDataTwo as selectPayments } from "@/apiservices/paymentapiservices";

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
  const departments = await selectDepartment(null, null);
  const jamats = await seletcJamat(null, null);
  const semesters = await selectSemester({ activeStatus: "active" }, null);
  let payments;
  if (paymentID == "all") {
    payments = await selectPayments(null, null);
  } else {
    payments = await selectPayments({ paymentID }, null);
  }

  if (
    departments.status == "Alhamdulillah" &&
    jamats.status == "Alhamdulillah" &&
    semesters.status == "Alhamdulillah" &&
    payments.status == "Alhamdulillah"
  ) {
  }

  return {
    departments: departments.data,
    jamats: jamats.data,
    semesters: semesters.data,
    payments: payments.data,
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
