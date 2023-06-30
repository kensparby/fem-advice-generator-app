"use server";
export async function fetchAdvice() {
  return await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  }).then((data) => data.json());
}
