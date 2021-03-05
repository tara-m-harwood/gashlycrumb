// selects the HTML container that will hold all the items
$allTiniesContainer = document.querySelector('#show-tiny-container')

// parses the params
const queryParams = window.location.search;
const queryParamsObject = new URLSearchParams(queryParams)
const letter = queryParamsObject.get("letter-form")
const letterUp = letter.toUpperCase()

// fetches the data
fetch(`http://localhost:3000/tinies/show_by_letter/${letterUp}`)
  .then(response => response.json())
  .then(tiny => {
      console.log(tiny) 
      // creates a new HTML container element to hold each item
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

