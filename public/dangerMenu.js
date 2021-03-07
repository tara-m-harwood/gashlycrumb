$selectContainer = document.querySelector( '#danger-select-endparam' )

fetch('https://gashlycrumb-randomly-creepy.herokuapp.com/tinies/')
  .then(response => response.json())
  .then( tinies => {tinies.forEach(tiny => {
      $selectOption = document.createElement('option')
      $selectOption.className = 'danger-select-options'
      $selectOption.value = tiny.id
      $selectOption.innerText = tiny.danger
      $selectContainer.append($selectOption)
      }
    )
  }
)


