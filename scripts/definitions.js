const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '121afa2ddbmsh918835f1e6cd27ep1b2deejsn635eba7b1a86',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

const userWord = document.getElementById("input-word")
const paraEL = document.getElementById("para")
const defHeadEL = document.getElementById("def-header")
const getteraEL = document.getElementById("getter")


let answers =[]

function Definitions(){
    getDefinitions()
    layout();
    
}
function layout(){
    paraEL.style.backgroundColor="aqua";
    defHeadEL.style.marginTop="10%"

}


function getDefinitions(){
fetch(`https://wordsapiv1.p.rapidapi.com/words/${userWord.value}/definitions`, options)
	.then(response => {
        if(response.ok){
           return response.json()
        }else{
            console.log("error");
        }
    } ).then( paraEL.innerText = `GETTING YOUR RESULTS`)

	.then(data => displayDefinition(data.definitions))

}

function displayDefinition(definitions){
    for (const x of definitions){
        paraEL.innerHTML += `<li> <span id="word-span"> ${userWord.value}</span> :  ${x.definition} </li> <br><br> `; 
        //console.log(x.definition);
    }
}