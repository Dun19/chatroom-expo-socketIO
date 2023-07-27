export let ioServerURL: string;

if (window.location.href.includes("localhost")) {
  ioServerURL = "ws://localhost:8200";
} else {
  throw new Error("Unknown environment");
}

export default ioServerURL;
