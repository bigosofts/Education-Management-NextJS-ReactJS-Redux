const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const faqsSlice = createSlice({
  name: "courseFaqs",
  initialState,
  reducers: {
    addFaq(state, actions) {
      state.push(actions.payload);
    },
    removeFaq(state, actions) {
      state = state.filter(
        (item) => item.question.en !== actions.payload.question.en
      );

      return state.filter(item => item.question.en !== actions.payload.question.en)
    },
  },
});
export const { addFaq, removeFaq } = faqsSlice.actions;
export default faqsSlice.reducer;
