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
    let sharedEpisodes = []
    let $divFirstEpisodes = $(".firstEpisodes")

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
                console.log(char1Episodes.length)

                for (let i=0; i < char1Episodes.length; i++){
                    for (let j = 0; j < char2Episodes.length; j++){
                        for (let k = 0; k < char3Episodes.length; k++){
                            if (char1Episodes[i] === char2Episodes[j] === char3Episodes[k])
                            // sharedEpisodes.push(char1Episodes[i])
                            // 
                        }
                    }
                }

            })
        })
        
    })

   
    // $.ajax(url2)
    // .then ((info2) => {
    //     console.log(character2)
    //     console.log(info2.info.count + " total")
    //     console.log(info2.info.pages + " pages")
    //     console.log(info2.results[0].episode)
    //     char2Episodes = info2.results[0].episode
    //     return char2Episodes
    // })    

    // $.ajax(url3)
    // .then ((info3) => {
    //     console.log(character3)
    //     console.log(info3.info.count + " total")
    //     console.log(info3.info.pages + " pages")
    //     console.log(info3.results[0].episode)
    //     char3Episodes = info3.results[0].episode
    //     return char3Episodes        
    // }) 
    
   
}

searchCharacter("rick", "morty", "jerry")