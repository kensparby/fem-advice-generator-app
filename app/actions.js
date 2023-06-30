"use server";
export async function fetchAdvice() {
  return await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  }).then((data) => data.json());
  // return {
  //   slip: {
  //     advice:
  //       "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  //     id: 117,
  //   },
  // };
  // if (!fetcher.ok) {
  //   throw new Error("Failed to fetch advice.");
  // }

  // return await data;
}
