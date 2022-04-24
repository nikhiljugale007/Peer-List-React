import axios from "axios";

const PostApi = async (url, body, isAuthRequired) => {
  const auth = isAuthRequired ? localStorage.getItem("token") : "";
  try {
    const response = await axios.post(url, body, {
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
    console.log(err.message);
    return {
      data: "",
      success: false,
    };
  }
};
const NewPostApi = async (url, body, isAuthRequired) => {
  const auth = isAuthRequired ? localStorage.getItem("token") : "";
  try {
    const response = await axios.post(url, body, {
      headers: {
        authorization: auth,
        "Content-Type": "multipart/form-data",
      },
    });
    return {
      data: response.data,
      success: true,
    };
  } catch (err) {
    console.log(err);
    console.log(err.message);
    return {
      data: "",
      success: false,
    };
  }
};
export { PostApi, NewPostApi };
