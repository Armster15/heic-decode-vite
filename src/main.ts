import heicDecode from "heic-decode";

const fileInput = document.querySelector("input#file-input") as HTMLInputElement;

fileInput.addEventListener("change", async () => {
  const file = fileInput.files![0];
  const buffer = new Uint8Array(await file.arrayBuffer());
  const heic = heicDecode({buffer: buffer})
  console.log(heic);
})

export {};
