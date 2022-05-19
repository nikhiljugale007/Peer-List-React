import axios from "axios";

const DeleteApi = async (url, isAuthRequired) => {
  const auth = isAuthRequired ? localStorage.getItem("token") : "";
  try {
    const response = await axios.delete(url, {
      headers: {
        authorization: auth,
      },
    });
    return {
      data: response.data,
      success: true,
    };
  } catch (err) {
    console.log(err);
    return {
      data: "",
      success: false,
    };
  }
};
const DeleteApi2 = async (url, isAuthRequired) => {
  const auth = isAuthRequired ? localStorage.getItem("token") : "";
  return await axios.delete(url, {
    headers: {
      authorization: auth,
    },
  });
};
export { DeleteApi, DeleteApi2 };
