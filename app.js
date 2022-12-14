const baseUrl = "https://rickandmortyapi.com/api/"

const $ulResults = $(".results")
const $ulEpisodeName = $(".episodeName")
const $ulEpisodeNumber = $(".episodeNumber")
const randomEpisodeURL = "https://rickandmortyapi.com/api/character?name=rick"
const randomEp = $(".randomEp")
const button = $(".button")


function randomEpisode(url){
    $.ajax(url)
    .then((data) => {
    let episodes = data.results[0].episode
    let random = episodes[Math.floor(Math.random() * episodes.length)]
    console.log(random)
   
    $.ajax(random)
    .then((episode) => {
        randomEp.append(episode.name + ", " + episode.episode)
        })
    })
}


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
    

    $.ajax(url1)
    .then ((info1) => {
        // console.log(character1)
        char1Episodes = info1.results[0].episode
        console.log(info1.results[0])
        // console.log(char1Episodes)
        $.ajax(url2)
        .then((info2) => {
            // console.log(character2)
            char2Episodes = info2.results[0].episode
            // console.log(char2Episodes)
            $.ajax(url3)
            .then((info3) => {
                // console.log(character3)
                char3Episodes=info3.results[0].episode
                // console.log(char3Episodes)

                for (let i = 0; i < char1Episodes.length; i++){
                    for (let j = 0; j < char2Episodes.length; j++){
                        for (let k = 0; k < char3Episodes.length; k++){
                            if (char1Episodes[i] === char2Episodes[j] && char1Episodes[i]=== char3Episodes[k]){
                                sharedEpisodes.push(char1Episodes[i])
    
                            }                           
                        } 
                    }
                } 
                // console.log(sharedEpisodes)
                for (episode of sharedEpisodes){
                    $.ajax(episode)
                    .then((data) =>{
                        // $ulResults.append(`<li>${data.name} ---  ${data.episode}</li>`)
                        $ulEpisodeName.append(`<li>${data.name}</li>`)
                        $ulEpisodeNumber.append(`<li>${data.episode}</li>`)
                    })
                }
            })     
        })
    })    
}

const $submit = $("input[type=submit]")
const $firstChar = $("input[type=text].firstChar")
const $secondChar = $("input[type=text].secondChar")
const $thirdChar = $("input[type=text].thirdChar")

$submit.on("click", (event) => {

    $ulResults.empty()
    $ulEpisodeName.empty()
    $ulEpisodeNumber.empty()
    event.preventDefault()
    const char1Entry = $firstChar[0].value
    const char2Entry = $secondChar[0].value
    const char3Entry = $thirdChar[0].value
    searchCharacter(char1Entry, char2Entry, char3Entry)
    
})

button.on("click", event => {
    event.preventDefault
    randomEp.empty()
    randomEpisode(randomEpisodeURL)
})


// finished

// searchCharacter("rick", "morty", "jerry")

//for book of books{}
//const div = div
//const obj = object

//obj.name, obj.art, obj.synopis = whatever for each
//div.append(obj)