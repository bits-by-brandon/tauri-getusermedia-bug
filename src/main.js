window.addEventListener("DOMContentLoaded", () => {
  navigator.mediaDevices.getUserMedia({ audio: true }).then((media) => {
    console.log(media);
  });
});
