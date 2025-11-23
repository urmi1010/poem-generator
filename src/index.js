function displayPoem(response) {
new Typewriter(document.querySelector("#poem"), {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: ""
});
}
function generatePoem(event){
    event.preventDefault();
let instructionInput = document.querySelector("#user-instruction");
    let apiKey ="34623bac3et9db7dfd3433of9aa07620";
        let prompt=`user instruction: Generate a french poem about ${instructionInput.value}`;
    let context ="you are a romantic poem expert and love to write short poems .you mission is to generate a 4 line poem and separate each line with a <br />. make sure follow the user instructions.";
    let apiURL =`https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)
}&context=${context}&key=${apiKey}`;

let poemElemnt = document.querySelector("#poem");
poemElemnt.classList.remove("hidden");
poemElemnt.innerHTML = `<div class="generating">🧭Generating a French poem about ${instructionInput.value}</div>`;

    axios.get(apiURL).then(displayPoem);
}
    
let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit",generatePoem);