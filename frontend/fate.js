$allTiniesContainer = document.querySelector('#show-tiny-container')

queryParams = window.location.search
queryParamsObject = new URLSearchParams(queryParams)
id = queryParamsObject.get("fate-select")

fetch(`http://localhost:3000/tinies/${id}`)
  .then(response => response.json())
  .then(tiny => {
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
    });