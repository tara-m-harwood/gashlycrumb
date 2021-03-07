const baseURL = 'https://gashlycrumb-randomly-creepy.herokuapp.com/tinies/'
const $tinyContainer = document.querySelector( '#tiny-container' )

const queryParams = window.location.search
const queryParamsObject = new URLSearchParams(queryParams)

const endpoint = queryParamsObject.get( 'endpoint')
const endparam = queryParamsObject.get( 'endparam' ).toUpperCase()


fetch( `${baseURL}${endpoint}/${endparam}` )
    .then(response => response.json())
    .then(tiny => {

        const $tinyCard = document.createElement('div')

        const $tinyTitle = document.createElement('h1')
        $tinyTitle.textContent = `You are ${tiny.name}`

        const $tinyImg = document.createElement('img')
        $tinyImg.src = tiny.image

        const $tinyWarning = document.createElement('h2')
        $tinyWarning.textContent = `Beware of ${tiny.danger} today.`

        $tinyCard.append($tinyTitle, $tinyImg, $tinyWarning)
        $tinyContainer.append($tinyCard)
    })