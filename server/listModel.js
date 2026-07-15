// import "dotenv/config";
// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// const models = await ai.models.list();

// for (const model of models) {
//   console.log(model.name);
// }

import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

try {
  const pager = await ai.models.list();

  for await (const model of pager) {
    console.log(model.name);
  }
} catch (err) {
  console.error(err);
}