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
    // console.log(err.response.status);
    return {
      data: "",
      success: false,
      status: err.response.status,
    };
  }
};

const PostApi2 = async (url, body, isAuthRequired) => {
  const auth = isAuthRequired ? localStorage.getItem("token") : "";
  return await axios.post(url, body, {
    headers: {
      authorization: auth,
    },
  });
};
export { PostApi, PostApi2 };
