import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector(".form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit (event) {
    event.preventDefault();
    const delay = Number(event.target.elements.delay.value)
    const state = event.target.elements.state.value;
    const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (state === "fulfilled") {
      resolve(delay);
    } else {
      reject(delay);
    }
  }, delay);
    });
    promise
  .then(ms => {
    iziToast.success({
      message: `✅ Fulfilled promise in ${ms}ms`,
      position: "topRight",
    });
  })
  .catch(ms => {
    iziToast.error({
      message: `❌ Rejected promise in ${ms}ms`,
      position: "topRight",
    });
  });
}

