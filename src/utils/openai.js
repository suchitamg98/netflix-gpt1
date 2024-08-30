// import OpenAI from "openai";
// import { OPENAI_GPT_KEY } from "../utils/constants";

// const openai = new OpenAI({
//   apiKey: OPENAI_GPT_KEY, // This is the default and can be omitted
//   dangerouslyAllowBrowser: true,
// });

// export default openai;
//import { GEMINI_KEY } from "../utils/constants";
//import  API_KEY  from "../utils/constants";
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// export default genAI;

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
