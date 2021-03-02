$selectContainer = document.querySelector('#fate-select')

fetch('http://localhost:3000/tinies/')
  .then(response => response.json())
  .then( tinies => {tinies.forEach(tiny => {
      console.log(tiny.name)
      $selectOption = document.createElement('option')
      $selectOption.className = 'fate-select-option'
      $selectOption.innerText = tiny.name
      $selectContainer.append($selectOption)
      }
    )
  }
)


