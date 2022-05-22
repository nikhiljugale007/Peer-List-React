// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "f2eba8e4-d8ae-4510-9c3f-d7ad111f541e",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-5.jpg",
  },
  {
    _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f552e",
    firstName: "Nikhil",
    lastName: "Jugale",
    username: "nikhiljugale007",
    password: "nikhil#123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-4.jpg",
  },
  {
    _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f553e",
    firstName: "Sanket",
    lastName: "Patil",
    username: "sanketpatil006",
    password: "Sanket@006",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-6.jpg",
  },
  {
    _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f554e",
    firstName: "Shubham",
    lastName: "Patil",
    username: "shubhampatil005",
    password: "Shubham@005",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-7.jpg",
  },
  {
    _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f555e",
    firstName: "Prem",
    lastName: "Melage",
    username: "premmelage01",
    password: "Prem@01",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-8.jpg",
  },
  {
    _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f556e",
    firstName: "Harshal",
    lastName: "Shelake",
    username: "harshalshelake02",
    password: "Harshal@02",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userProfile: "https://www.sragenkab.go.id/assets/images/demo/user-9.jpg",
  },
];
