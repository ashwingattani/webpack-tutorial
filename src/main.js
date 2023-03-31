import "./main.css";
import map from "lodash/map";

const workerInstance = new Worker(new URL("./worker.js", import.meta.url));

workerInstance.onmessage = (event) => {
  console.log(event.data);
};

workerInstance.postMessage("pong"); //thread1
workerInstance.postMessage("ping"); //thread2

function square(n) {
  return n * n;
}

const value = map([1, 2, 3], square());

console.log(value); //[1,4,9]
