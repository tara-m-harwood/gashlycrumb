// selects the HTML container that will hold all the items
$allTiniesContainer = document.querySelector('#all-tinies-container')

// fetches the data
fetch('http://localhost:3000/tinies')
  .then(response => response.json())
  .then(tinies => {
      console.log(tinies) 
      tinies.forEach(tiny => {
      // creates a new HTML container element to hold each item
      const $eachTinyContainer = document.createElement('div')
      $eachTinyContainer.className = "tinyCard"
      // creates the HTML elements for each item 
      const $tinyTitle = document.createElement('h2')
      const $tinySubtitle = document.createElement('h4')
      const $tinyImage = document.createElement('img')
      // manipulates the elements
      $tinyTitle.innerText = `${tiny.letter} is for ${tiny.name}`
      console.log(tiny.letter)
      $tinySubtitle.innerText = tiny.fate
      $tinyImage.src = tiny.image 
      // attaches elements to the DOM
      $eachTinyContainer.append($tinyTitle, $tinySubtitle, $tinyImage)
      $allTiniesContainer.append($eachTinyContainer)
      }
    )
  }
)       

