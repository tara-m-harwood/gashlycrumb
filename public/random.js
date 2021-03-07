
// selects the HTML container that will hold all the items
$allTiniesContainer = document.querySelector('#show-tiny-container')

// fetches the data
fetch('https://gashlycrumb-randomly-creepy.herokuapp.com/tinies/random/0')
.then(response => response.json())
.then(tiny => {
    const $eachTinyContainer = document.createElement('div')
    $eachTinyContainer.className = "tinyCard"
    // creates the HTML elements for each item 
    const $tinyTitle = document.createElement('h1')
    const $tinyImage = document.createElement('img')
    const $tinySubtitle = document.createElement('h3')
    // manipulates the elements
    $tinyTitle.innerText = `You are ${tiny.name}`
    $tinyImage.src = tiny.image 
    $tinySubtitle.innerText = `Beware of ${tiny.danger} today!`
    // attaches elements to the DOM
    $eachTinyContainer.append($tinyTitle, $tinyImage, $tinySubtitle)
    $allTiniesContainer.append($eachTinyContainer)
    }
  )    
