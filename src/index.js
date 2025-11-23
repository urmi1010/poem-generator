function generatePoem(event){
    event.preventDefault();
     new Typewriter(document.querySelector("#poem"), {
    strings: "La lune veille sur mes rêves comme une douce lumière.",
    autoStart: true,
    delay: 1,
    cursor: ""
});
}
    
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",generatePoem);