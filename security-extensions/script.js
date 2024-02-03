//import { config } from "dotenv"
//config()

/*
import OpenAI from "openai";

const apiKey = "";

const openai = new OpenAI({
    apiKey: apiKey
    //apiKey: process.env.OPENAI_API_KEY
})

openai.chat.completions.create({
    messages: [{ role: "system", content: "please respond in only animal noises, how is your day?" }],
    model: "gpt-3.5-turbo",
})
.then(res => {
    console.log(res.choices[0].message.content);
});
*/

const apiKey = '';
const apiUrl = 'https://api.openai.com/v1/engines/gpt-3.5-turbo-0613/completions'; // Adjust the API endpoint based on your OpenAI model

// Example prompt for code completion
const prompt = 'Complete the following Python code:';

// Your code to complete
const codeToComplete = 'print("Hello, ';

// Construct the request payload
const requestBody = {
  prompt: prompt
};

// Make the fetch request
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiKey
  },
  body: JSON.stringify(requestBody)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the response data
    console.log(data.choices[0].text);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });

