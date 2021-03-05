$selectContainer = document.querySelector('#fate-select')

fetch('http://localhost:3000/tinies/')
  .then(response => response.json())
  .then( tinies => {tinies.forEach(tiny => {
      $selectOption = document.createElement('option')
      $selectOption.className = 'fate-select-option'
      $selectOption.value = tiny.id
      $selectOption.innerText = tiny.danger
      $selectContainer.append($selectOption)
      }
    )
  }
)


