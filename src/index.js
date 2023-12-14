const { default: Example } = require("./scripts/example");

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main);
    console.log("Hello world!");
})