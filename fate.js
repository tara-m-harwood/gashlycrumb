$allTiniesContainer = document.querySelector('#show-tiny-container')

queryParams = window.location.search
queryParamsObject = new URLSearchParams(queryParams)
id = queryParamsObject.get("fate-select")

console.log(id)
fetch(`http://localhost:3000/tinies/${id}`)
  .then(response => response.json())
  .then(tiny => {
    console.log(tiny) 
    // creates a new HTML container element to hold each item
    const $eachTinyContainer = document.createElement('div')
    $eachTinyContainer.className = "tinyCard"
    // creates the HTML elements for each item 
    const $tinyTitle = document.createElement('h1')
    const $tinyImage = document.createElement('img')
    // manipulates the elements
    $tinyTitle.innerText = `You are ${tiny.name} ${tiny.fate}`
    $tinyImage.src = tiny.image 
    // attaches elements to the DOM
    $eachTinyContainer.append($tinyTitle, $tinyImage)
    $allTiniesContainer.append($eachTinyContainer)
    });