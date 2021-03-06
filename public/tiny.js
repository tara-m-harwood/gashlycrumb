baseURL = "https://gashlycrumb-randomly-creepy.herokuapp.com/tinies/"
$tinyContainer = document.querySelector('#tiny-container')

fetch(`${baseURL}/random/`)
    .then(response => response.json())
    .then(tiny => {
        console.log(tiny)
        console.log
    )


        }
    )