async function makeRequest() {
  // const url =
  //   "https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000";
  const url = "https://procodrr.vercel.app/?sleep=3000";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

// makeRequest();

// async function makeRequest() {
//   return "Arpit";
// }

// function check() {
//   console.log("hello");
//   // throw "Arpit error";
//   throw new Error("Arpit error");
//   console.log("no reachable code");
// }
