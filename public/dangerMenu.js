$selectContainer = document.querySelector('#fate-select')

fetch('https://gashlycrumb-randomly-creepy.herokuapp.com/tinies/')
  .then(response => response.json())
  .then( tinies => {tinies.forEach(tiny => {
      console.log(tiny)
      $selectOption = document.createElement('option')
      $selectOption.className = 'fate-select-option'
      $selectOption.value = tiny.id
      $selectOption.innerText = tiny.danger
      $selectContainer.append($selectOption)
      }
    )
  }
)


