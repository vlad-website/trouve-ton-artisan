const API_URL = "http://localhost:5000";

export async function apiGet(path) {
  const response = await fetch(API_URL + path);
  if (!response.ok) {
    throw new Error("API error: " + response.status);
  }
  return response.json();
}