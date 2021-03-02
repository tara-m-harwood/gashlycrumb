
// selects the HTML container that will hold all the items
$allTiniesContainer = document.querySelector('#show-tiny-container')

// fetches the data
fetch('http://localhost:3000/tinies/random')
  .then(response => response.json())
  .then(tinies => {
      console.log(tinies) 
      tinies.forEach(tiny => {
      // creates a new HTML container element to hold each item
      const $eachTinyContainer = document.createElement('div')
      $eachTinyContainer.className = "tinyCard"
      // creates the HTML elements for each item 
      const $tinyTitle = document.createElement('h1')
      const $tinyImage = document.createElement('img')
      // manipulates the elements
      console.log(tiny.letter) // for testing
      $tinyTitle.innerText = `You are ${tiny.name} ${tiny.fate}`
      $tinyImage.src = tiny.image 
      // attaches elements to the DOM
      $eachTinyContainer.append($tinyTitle, $tinyImage)
      $allTiniesContainer.append($eachTinyContainer)
      }
    )
  }
) 