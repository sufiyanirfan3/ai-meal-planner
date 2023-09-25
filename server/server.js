import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import {
  ApiController,
  ApiError,
  Client,
} from "cohere-apilib";

dotenv.config();

const client = new Client({
  timeout: 0,
  accessToken: process.env.COHERE_API_KEY,
});
const apiController = new ApiController(client);



const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from ChatGPT!",
  });
});

app.post("/chat", async (req, res) => {
  try {
    const question = req.body.question;

    const body = {
      prompt: question,
      maxTokens: 1600,
    };
    
    try {
      const { result, ...httpResponse } = await apiController.generate(body);
      var response = result.generations[0].text;
      console.log(response)
      // Get more response info...
      // const { statusCode, headers } = httpResponse;
    } catch (error) {
      if (error instanceof ApiError) {
        const errors = error.result;
        console.log(errors)
        // const { statusCode, headers } = error;
      }
      else{
        console.log(error)
      }
    }

    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error || "Something went wrong");
  }
});

app.listen(3000, () =>
  console.log("AI server started on http://localhost:3000")
);
