import { createAction, nanoid } from "@reduxjs/toolkit";


export const addTask = createAction("tasks/addTask", text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});

console.log(addTask("Learn Redux Toolkit"));
export const deleteTask = createAction("tasks/deleteTask");
export const toggleCompleted = createAction("tasks/toggleCompleted");
export const setAllComplited = createAction("tasks/setAllComplited");
export const setStatusFilter = createAction("filters/setStatusFilter");

// У генератора екшену є властивість type
console.log(addTask.type); // "tasks/AddTask"

// Метод toString() функції addTask був перевизначений
console.log(addTask.toString()); // "tasks/AddTask"
// import { nanoid } from "nanoid";

// export const addTask = text => {
//   return {
//     type: "tasks/addTask",
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };

// export const setAllComplited = (on) => {
//   return {
//     type: "tasks/setAllComplited",
//     payload: on,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };

