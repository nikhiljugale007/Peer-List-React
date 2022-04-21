import axios from "axios";

const GetApi = async (url, isAuthRequired) => {
  const auth = isAuthRequired ? localStorage.getItem("token") : "";
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
    };
  }
};

export { GetApi };
