const baseURL = "https://gashlycrumb-randomly-creepy.herokuapp.com/tinies/"

const $tinyContainer = document.querySelector("#tiny-container")

const queryParams = window.location.search
const queryParamsObject = new URLSearchParams(queryParams)

console.log(queryParamsObject)

const endpoint = queryParamsObject.get("endpoint")
const endparam = queryParamsObject.get("endparam")




fetch(`${baseURL}${endpoint}/${endparam}`)
    .then(response => response.json())
    // .then(console.log)
    // // .then(console.log(`${baseURL}${endpoint}/${endparam}`))
    .then(tiny => {
        const $tinyCard = document.createElement('div')

        const $tinyTitle = document.createElement('h1')
        $tinyTitle.textContent = `You are ${tiny.name}`

        $tinyCard.append($tinyTitle)
        $tinyContainer.append($tinyCard)
    })
