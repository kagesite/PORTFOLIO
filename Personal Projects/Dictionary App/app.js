const appMessage = document.getElementById("appMessage");
const wordInput = document.getElementById('wordInput');
const searchBtn = document.getElementById("searchBtn");

const wordElement = document.getElementById("word");
const wordTypeElement = document.getElementById("wordType");
const wordDefinitionElement = document.getElementById('wordDefinition');


function getSearchWord() {
    const searchWord = wordInput.value;

    if (!searchWord) {
        appMessage.textContent = 'Please enter a word!';
        return
    }
    
    
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
        .then(response => response.json())
        .then((data) => {
            appMessage.textContent = "Search for word meanings"
            
            const displayElement = document.getElementById('displayElement');
            displayElement.style.display = 'flex'

            const word = searchWord
            const wordType = data[0].meanings[0].partOfSpeech;
            const wordDefinition = data[0].meanings[0].definitions[0].definition;
            
            wordElement.innerText = word;
            wordTypeElement.innerText = wordType
            wordDefinitionElement.innerText = `"${wordDefinition}"`
            
            console.log(data)
            wordInput.value = "";
        })
}

searchBtn.addEventListener('click', getSearchWord);