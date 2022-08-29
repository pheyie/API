const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '121afa2ddbmsh918835f1e6cd27ep1b2deejsn635eba7b1a86',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

const userWord = document.getElementById("input-word")
const paraEL = document.getElementById("para")

let answers =[]

function Definitions(){
    getDefinitions()
}

function getDefinitions(){
fetch(`https://wordsapiv1.p.rapidapi.com/words/${userWord.value}/definitions`, options)
	.then(response => {
        if(response.ok){
           return response.json()
        }else{
            console.log("error");
        }
    } )
	.then(data => displayDefinition(data.definitions))
}

function displayDefinition(definitions){
    for (const x of definitions){
        paraEL.innerHTML += `<li> ${x.definition} </li> <br><br> `; 
        //console.log(x.definition);
    }
}