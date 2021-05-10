document.getElementById('enter').addEventListener('click', rateMovie)

function movieByAge (age) {
  if (age >= 17) {
    return 'You may watch R rated movies'
  } else if (age >= 13) {
    return 'You may watch PG-13 rated movies'
  } else {
    return 'You may watch G or PG rated movies'
  }
}

function rateMovie () {
  const age = parseInt(document.getElementById('input').value)
  const answer = document.getElementById('answer')

  answer.innerText = movieByAge(age)
}
