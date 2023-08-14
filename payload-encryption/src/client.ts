import axios from "axios";
import { encrypt } from "./encrypt-payload";

export const client = axios.create({
	baseURL: "https://localhost:7100/"
});

type reqBody = { name: string; id: number }

export async function postRequest(body: reqBody) {
  const cipher = await encrypt(JSON.stringify(body))

  const response = await client.post("/WeatherForecast", {
    cipher: cipher  });
	return response.data
}
