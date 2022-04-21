// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "f2eba8e4-d8ae-4510-9c3f-d7ad111f541f",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "g2eba8e4-d8ae-4510-9c3f-d7ad111f552g",
    firstName: "Nikhil",
    lastName: "Jugale",
    username: "nikhiljugale007",
    password: "nikhil#123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
