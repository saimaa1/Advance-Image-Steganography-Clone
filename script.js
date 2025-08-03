const textarea = document.querySelector("textarea");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", () => {
  charCount.textContent = `${textarea.value.length} characters`;
});


const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
  textarea.value = "";
  charCount.textContent = "0 characters";
  document.getElementById("encryptToggle").checked = false;
});


const encodeBtn = document.getElementById("encodeBtn");
encodeBtn.addEventListener("click", () => {
  const message = textarea.value.trim();
  const isEncrypted = document.getElementById("encryptToggle").checked;

  if (!message) {
    alert("Please enter a secret message to encode.");
    return;
  }

  alert(`Message ready to encode!\nEncryption: ${isEncrypted ? "ON" : "OFF"}`);
});

const imageInput = document.getElementById("imageInput");
imageInput.addEventListener("change", () => {
  if (imageInput.files.length > 0) {
    const fileName = imageInput.files[0].name;
    alert(`Image selected: ${fileName}`);
  }
});
