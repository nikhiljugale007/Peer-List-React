import axios from "axios";

const GetApi = async (url, isAuthRequired) => {
  const auth = isAuthRequired ? localStorage.getItem("authToken") : "";
  try {
    const response = await axios.get(url, {
      headers: isAuthRequired ? auth : "",
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
      error: err.message,
    };
  }
};

const GetApi2 = async (url, isAuthRequired) => {
  const auth = isAuthRequired ? localStorage.getItem("authToken") : "";
  return await axios.get(url, {
    headers: isAuthRequired ? auth : "",
  });
};
export { GetApi, GetApi2 };
