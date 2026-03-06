import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {

    // Load all projects from JSON
    setProjects: (state, action) => {
      return action.payload;
    },

    // Add a new project
    addProject: (state, action) => {
      state.push(action.payload);
    }

  },
});

export const { setProjects, addProject } = projectSlice.actions;

export default projectSlice.reducer;
