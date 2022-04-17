import axios from "axios";
const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3ZjM4Mjk2OS1hZjcxLTRiYTYtODk5ZS0yZDNkMGUyMDA2M2MiLCJ1c2VybmFtZSI6ImFkYXJzaGJhbGlrYSJ9.JJ9LNL-Vr8G23BIJoGsHzT2cqLT7RfX0hMyJSUVIK44";

const PostApi =async (url,body,isAuthRequired) =>{
	try{
		const response = await axios.post(url,body,{
			headers : isAuthRequired ? auth : ""
		})
		return {
			data:response.data,
			success:true
		}
	}
	catch(err){
		console.log(err);
		console.log(err.message);
		return{
			data:"",
			success:false
		}
	}
}

export {PostApi}