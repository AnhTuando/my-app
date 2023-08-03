import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  productsData: [],
  quantity: 1,
  footerValueRouter: "Home",
  customerName: "",
  customerPhone: "",
  customerAddress: "",
  email: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    plus: (state) => {
      state.quantity += 1;
    },
    minus: (state) => {
      if (state.quantity > 1) state.quantity -= 1;
    },
    changeValueRouter: (state, actions) => {
      state.footerValueRouter = actions.payload;
    },
    buyBtn: (state, action) => {
      state.productsData.push({
        id: `${action.payload.name}/${action.payload.id}`,
        name: action.payload.name,
        quantity: state.quantity,
        price: action.payload.price * state.quantity,
        src: action.payload.src,
        customerName: state.customerName,
        customerPhone: state.customerPhone,
        customerAddress: state.customerAddress,
      });
    },
    handleNameInput: (state, action) => {
      state.customerName = action.payload;
    },
    handleAdressInput: (state, action) => {
      state.customerAddress = action.payload;
    },
    handlePhoneInput: (state, action) => {
      state.customerPhone = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {
  plus,
  minus,
  getEmail,
  handleNameInput,
  handleAdressInput,
  handlePhoneInput,
  changeValueRouter,
  buyBtn,
} = cartSlice.actions;
export default cartSlice.reducer;
