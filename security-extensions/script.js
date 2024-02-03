//import { config } from "dotenv"
//config()

import OpenAI from "openai";

const apiKey = "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";

const openai = new OpenAI({
    //apiKey: apiKey
    apiKey: process.env.OPENAI_API_KEY
})

openai.chat.completions.create({
    messages: [{ role: "system", content: "Evalute this email in terms of suspiciousness from 0 to 100%: Hello I am a hacker" }],
    model: "gpt-3.5-turbo",
})
.then(res => {
    console.log(res.choices[0].message.content);
});
