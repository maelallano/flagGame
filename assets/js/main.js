var flagImg = document.querySelector('.flagImg')
var answers = document.querySelectorAll('.answers')
var scoreText = document.querySelector('.score')
var commentText = document.querySelector('.comment')
var timerText = document.querySelector('.timer')
var score = 0
var timeLeft = 60

timerText.textContent = timeLeft + 's restantes...'

mainFunction()

setInterval(function() {
	timeLeft--
	timerText.textContent = timeLeft + 's restantes...'
	if (timeLeft < 1) {
		window.location.reload()
	}
}, 1000)

function mainFunction() {

 	// for (var i = 0; i < answers.length; i++) {
 	// 	answers[i].setAttribute('nom', 'pasOK')
 	// }

	scoreText.textContent = 'Ton score est de ' + score

	var theAnswer = Math.floor(Math.random() * (data.drapeaux.length - 1))
	var wesh = Math.floor(Math.random() * 4)


	flagImg.setAttribute('src', data.drapeaux[theAnswer].src)

	for (var i = 0; i < answers.length; i++) {
		answers[i].textContent = data.drapeaux[i].nom
		if (i === theAnswer) {
			answers[i].setAttribute('nom', 'ok')
		}
	}

	for (var i = 0; i < answers.length; i++) {
		answers[i].addEventListener('click', function ansClick() {
			if (this.getAttribute('nom') === 'ok') {
				this.setAttribute('nom', 'pasOK')
				// for (var j = 0; j < answers.length; j++) {
				// 	answers[j].removeEventListener('click', ansClick)
				// }
				commentText.textContent = 'BRAVO !'
				setTimeout(function() {
					score++
					commentText.textContent = ''
					scoreText.textContent = 'Ton score est de ' + score

					var theAnswer = Math.floor(Math.random() * (data.drapeaux.length - 1))

					flagImg.setAttribute('src', data.drapeaux[theAnswer].src)

					for (var i = 0; i < answers.length; i++) {
						answers[i].textContent = data.drapeaux[i].nom
						if (i === theAnswer) {
							answers[i].setAttribute('nom', 'ok')
						}
					}
				}, 500)
			 } else {
		 	 	for (var j = 0; j < answers.length; j++) {
		 	 		if (answers[j].getAttribute('nom') === 'ok') {
 						answers[j].setAttribute('nom', 'pasOK')
 					}
 				}
				commentText.textContent = 'T\'es pas très fort...'
				setTimeout(function() {
					score--
					commentText.textContent = ''
					scoreText.textContent = 'Ton score est de ' + score

					var theAnswer = Math.floor(Math.random() * (data.drapeaux.length - 1))

					flagImg.setAttribute('src', data.drapeaux[theAnswer].src)

					for (var i = 0; i < answers.length; i++) {
						answers[i].textContent = data.drapeaux[i].nom
						if (i === theAnswer) {
							answers[i].setAttribute('nom', 'ok')
						}
					}
				}, 500)
			}
		})
	}
}