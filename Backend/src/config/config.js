import dotenv from "dotenv";
dotenv.config();

// console.log(process.env)
// console.log("google api key",process.env.GOOGLE_API_KEY)
// console.log("mongodb uri ",process.env.MONGODB_URI)

const config = {
  GOOGLE_API_KEY: "AIzaSyDdk0Opy2bEGiVrgT_p2BWNtMQ3t_Xwjwg",
  MONGODB_URI:"mongodb://localhost:27017/CodeReviewer",
};

export default config;
