// web worker example

self.addEventListener("message", (event) => {
  if (event.data === "ping") {
    self.postMessage("Welcome to the webpack tutorial");
  } else {
    self.postMessage("Ping not received");
  }
});
