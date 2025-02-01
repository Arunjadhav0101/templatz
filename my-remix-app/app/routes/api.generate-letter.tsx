import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import  instructions from "~/assests/instructions";
import { LoaderFunction } from "@remix-run/node";
import config from "~/config/config";

const genAI = new GoogleGenerativeAI(config.genAIApiKey);
const sampleData:any = {
    "sender-name": "Rameshwar Patil",
    "sender-address": "SYBCA(science) Div B Roll no : [ROLL_NO]",
    "sender-city": "Dr.DY Patil Arts Commerce & Science Pimpri Pune",
    "sender-state": "Maharastra",
    "sender-zip": "411018",
    "sender-email": "rameshwarpatil9689@gmail.com",
    "sender-phone": "9890472354",
    "recipient-name": "Dr Ranjit Patil",
    "recipient-title": "Principal",
    "recipient-company": "Dr.DY Patil Arts Commerce & Science Pimpri Pune",
    "recipient-address": "Sant Tukram Nagar",
    "recipient-city": "Pimpri",
    "recipient-state": "Maharastra",
    "recipient-zip": "411018",
    "sender-title": "Student",
    "prompt":"Write a leave application letter "
}



const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  }
];
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: instructions,
  safetySettings,
});
const getPrompt=():string=>{
    let promptStr = ''
    for(let key in sampleData){
        promptStr+=`${key}: ${sampleData[key]}\n`;
    }
    return promptStr;
}
export const loader: LoaderFunction = async () => {
  const prompt = getPrompt();
  const result = await model.generateContent(prompt);
  const data = result.response.text();
  let ans = '';
for (let i = 0; i < data.length; i++) {
  if (data[i] == '`') continue;
  ans += data[i];
}
ans.replace("json", "arun")

console.log(ans);
//ans = JSON.parse(ans)
  return Response.json({ data: "hey", result: ans });
};
