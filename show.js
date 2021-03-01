// selects the HTML container that will hold all the items
$allTiniesContainer = document.querySelector('#show-tiny-container')

// parses the params
const queryParams = window.location.search;
  console.log(`query params: ${queryParams}`)
const queryParamsObject = new URLSearchParams(queryParams)
  console.log(`query params: ${queryParamsObject}`)
const letter = queryParamsObject.get("letter-form")
  console.log(`letter: ${letter}`)

// fetches the data
fetch(`http://localhost:3000/tinies/show_by_letter/${letter}`)
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
      }
    )

