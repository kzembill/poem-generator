function displayPoem(response) {
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
   }

   function generatePoem (event){
   event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "a56bd14t7ad00f6eo465f0e67d3dc8fa";
    let prompt = `User Instructions: Generate a poem about ${instructionsInput.value}`;
    let context = "You are a romatic poem expert and you love to write short poems. Your mission is to provide a simple, four-line poem in HTML form and separate each line with a <br />. Do not include a title for the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the bottom of the poem. Be sure to follow user instructions"; 
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = 'Sit tight, we are generating your poem...';

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    
    axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);