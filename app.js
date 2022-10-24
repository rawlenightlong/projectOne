const baseUrl = "https://rickandmortyapi.com/api/"

function searchCharacter (character1, character2, character3){
    url1 = `${baseUrl}character/?name=${character1}`
    console.log(url1)

    url2 = `${baseUrl}character/?name=${character2}`
    console.log(url2)

    url3 = `${baseUrl}character/?name=${character3}`
    console.log(url3)

    let char1Episodes = []
    let char2Episodes = []
    let char3Episodes = []
    const sharedEpisodes = []
    let $divResults = $("<div.results>")

    $.ajax(url1)
    .then ((info1) => {
        console.log(character1)
        char1Episodes = info1.results[0].episode
        console.log(char1Episodes)
        $.ajax(url2)
        .then((info2) => {
            console.log(character2)
            char2Episodes = info2.results[0].episode
            console.log(char2Episodes)
            $.ajax(url3)
            .then((info3) => {
                console.log(character3)
                char3Episodes=info3.results[0].episode
                console.log(char3Episodes)

                for (let i = 0; i < char1Episodes.length; i++){
                    for (let j = 0; j < char2Episodes.length; j++){
                        for (let k = 0; k < char3Episodes.length; k++){
                            if (char1Episodes[i] === char2Episodes[j] && char1Episodes[i]=== char3Episodes[k]){
                                sharedEpisodes.push(char1Episodes[i])
    
                            }                           
                        } 
                    }
                } 
                
                let episodeNameNumbers = []
                for (episode of sharedEpisodes){
                    $.ajax(episode)
                    .then((data) =>{
                        // console.log(`{${data.name}, ${data.episode}}`)
                        episodeNameNumbers.push(`{${data.name}, ${data.episode}}`)
                        
                    })
                }
                console.log(episodeNameNumbers)
            }) 
              
        })
        
    })    
    
    

}

const $submit = $("input[type=submit]")
const $firstChar = $("input[type=text].firstChar")
const $secondChar = $("input[type=text].secondChar")
const $thirdChar = $("input[type=text].thirdChar")

$submit.on("click", (event) => {
    event.preventDefault()

    const char1Entry = $firstChar[0].value
    const char2Entry = $secondChar[0].value
    const char3Entry = $thirdChar[0].value
    searchCharacter(char1Entry, char2Entry, char3Entry)
})



searchCharacter("rick", "morty", "jerry")