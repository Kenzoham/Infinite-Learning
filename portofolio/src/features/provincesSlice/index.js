import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const provincesSlice = createSlice({
  name: "Covid Slice",
  initialState: {
    dataProvinsi: data,
  },
  reducers: {
    addData(state, action) {
      state.dataProvinsi = {
        ...state.dataProvinsi,
        provinces: action.payload,
      };
    },
    deleteData() {},
  },
});

const provincesReducer = provincesSlice.reducer;
const { addData, deleteData } = provincesSlice.actions;

export default provincesReducer;
export { addData, deleteData };
