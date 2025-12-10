import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedUser || null,
  },
  reducers: {
    register: (state, action) => {
      const { email, password } = action.payload;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = users.some((u) => u.email === email);

      if (userExists) {
        alert("User already exists!");
        return;
      }

      const newUser = { email, password };
      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful!");
    },

   login: (state, action) => {
  const { email, password } = action.payload;

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = storedUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (foundUser) {
    state.user = foundUser;
    localStorage.setItem("user", JSON.stringify(foundUser));
    state.error = null;
  } else {
    state.error = "Invalid email or password";
  }
},


    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
