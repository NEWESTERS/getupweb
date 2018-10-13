// Data
let slides = [
	{
		name: "Web",
		img: "assets/slider/cup.png",
		color: "#3370d7",
		header: "Внедрите автоворонку в Ваш бизнес и поднимите ROI рекламного бюджета в 1,5 раза",
		text: "Вы получите концепцию прибыльной автоворонки для Вашей ниши бизнеса с внедрением под ключ. Создадим цепочки писем, SMS сообщений, автозвонков в зависимости от поведения покупателей на сайте и интегрируем всё это в CRM.</p><p>Возвратите ушедших посетителей, повысите средний чек и чистую прибыль с каждого заказа на сайте."
	},
	{
		name: "Design",
		img: "assets/slider/label.png",
		color: "#45efb5",
		header: "Увеличьте поток заказов с сайта на 20-30% через Яндекс Директ и Google Adwords",
		text: "Сделаем анализ текущих рекламных кампаний и подготовим план работ по улучшению показателей. После этого создадим новый аккаунт с учётом всех правок.</p><p>Вам останется пополнить рекламный бюджет и сравнить показатели \"было/стало\"."
	},
	{
		name: "Code",
		img: "assets/slider/tube.png",
		color: "#ffc000",
		header: "Получайте целевых посетителей на Ваш сайт и сообщество в социальных сетях",
		text: "Таргетированная реклама в Vk, Facebook и Instagram. Показывайте рекламу только целевым клиентам, которые уже готовы купить Ваш товар.</p><p>Создадим стратегию продвижения в социальных сетях, которая удвоит поток лояльных клиентов в Ваш бизнес."
	}
]

window.onload = _ => {
	// Images preload
	for (let i = 0; i < slides.length; i++) {
		new Image().src = slides[i].img
	}

	// Create slider
	let slider = new Slider();
	
	// (function autoTurn() {
	// 	setTimeout(
	// 		_ => {
	// 			slider.turnRight()
	// 			autoTurn()
	// 		}, 5000)
	// })()
}

// Slider class
function Slider() {
	// Bind DOM objects with variables
	let image = document.querySelector("#image-box>img")
	let bg = [ document.querySelector("#second-background>#first"),
				document.querySelector("#second-background>#second"),
				document.querySelector("#second-background>#third") ]
	let text = document.querySelector("#text-box>p")
	let header = document.querySelector("#text-box>h1")
	let textBox = document.getElementById("text-box")
	let leftButton = document.querySelector("#left-arrow")
	let rightButton = document.querySelector("#right-arrow")
	let numbers = document.getElementsByClassName("number")
	let lines = document.getElementsByClassName("line")

	// Initial state
	let currentNum = 0
	image.src = slides[0].img
	text.innerHTML = slides[0].text
	header.innerHTML = slides[0].header

	// Slide setter
	this.set = newNum => {
		if (newNum == currentNum) { return }

		// Start animations
		if (newNum > currentNum) {
			image.classList.add("slide-right")
			textBox.classList.add("slide-right")
		} else {
			image.classList.add("slide-left")
			textBox.classList.add("slide-left")
		}

		

		for (let i = bg.length - 1; i >= 0; i--) {
			bg[i].classList.remove("active")
		}

		bg[newNum].classList.add("active")

		// Change content
		setTimeout(_ => {
			image.src = slides[newNum].img
			text.innerHTML = slides[newNum].text
			header.innerHTML = slides[newNum].header
			//textBox.classList.remove("hidden")

		}, 350)

		// Remove animation classes
		setTimeout(_ => {
			image.classList.remove("slide-left")
			image.classList.remove("slide-right")
			textBox.className = ""
		}, 600)

		// Update slide selector
		switch(newNum) {
			case 0:
				this._setFirstSlide()
				break
			case 1:
				this._setSecondSlide()
				break
			case 2:
				this._setThirdSlide()
				break
		}

		currentNum = newNum
	}

	/* Set left slide */
	this.turnLeft = _ => {
		this.set(currentNum != 0 ? currentNum - 1 : 2)
	}

	/* Set right slide */
	this.turnRight = _ => {
		this.set(currentNum != 2 ? currentNum + 1 : 0)
	}

	// Slide selector state setters
	this._setFirstSlide = _ => {
		numbers[0].classList.add("active")
		numbers[1].classList.remove("active")
		numbers[2].classList.remove("active")

		
		lines[1].className = "line"
		lines[0].className = "long line"
	}

	this._setSecondSlide = _ => {
		numbers[0].classList.remove("active")
		numbers[1].classList.add("active")
		numbers[2].classList.remove("active")
		
		lines[1].className = "medium line"
		lines[0].className = "medium line"
	}	

	this._setThirdSlide = _ => {
		numbers[0].classList.remove("active")
		numbers[1].classList.remove("active")
		numbers[2].classList.add("active")

		lines[0].className = "line"
		lines[1].className = "long line"
	}

	// Add event handlers
	for (let i = numbers.length - 1; i >= 0; i--) {
		numbers[i].onclick = _ => {
			this.set(i)
		}
	}

	leftButton.onclick = _ => {
		this.turnLeft()
	}

	rightButton.onclick = _ => {
		this.turnRight()
	}
}
