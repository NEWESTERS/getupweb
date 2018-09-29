let slides = [
	{
		name: "Web",
		img: "assets/slider/web.png",
		color: "#3370d7",
		header: "Landing Page, интернет-магазин или корпоративный сайт для Вашего бизнеса",
		text: "Вы сможете получать адекватных и платежеспособных клиентов из интернета. Оптимизировать и сократить текущие рекламные расходы и при этом увеличить поток заявок покупателей."
	},
	{
		name: "Design",
		img: "assets/slider/design.png",
		color: "#45efb5",
		header: "Увеличьте поток заказов с сайта на 20-30% через Яндекс Директ и Google Adwords",
		text: "Сделаем анализ текущих рекламных кампаний и подготовим план работ по улучшению показателей. После этого создадим новый аккаунт с учётом всех правок."
	},
	{
		name: "Code",
		img: "assets/slider/code.png",
		color: "#ffc000",
		header: "Получайте целевых посетителей на Ваш сайт и сообщество в социальных сетях",
		text: "Таргетированная реклама в Vk, Facebook и Instagram. Показывайте рекламу только целевым клиентам, которые уже готовые купить Ваш товар."
	}
]

window.onload = _ => {
	let slider = new Slider()
}

function Slider() {
	let image = document.querySelector("#image-box>img")
	let bg = document.getElementById("second-background")
	let text = document.querySelector("#text-box>p")
	let header = document.querySelector("#text-box>h1")
	let textBox = document.getElementById("text-box")
	let leftButton = document.querySelector("#left-arrow")
	let rightButton = document.querySelector("#right-arrow")
	let current = 0

	leftButton.onclick = _ => {
		this.turnLeft()
	}

	rightButton.onclick = _ => {
		this.turnRight()
	}

	this.turnLeft = _ => {
		this.set(current != 0 ? current - 1 : 2)
	}

	this.turnRight = _ => {
		this.set(current != 2 ? current + 1 : 0)
	}


	image.src = slides[0].img
	text.innerHTML = slides[0].text
	header.innerHTML = slides[0].header

	this.set = num => {
		current = num
		image.classList.add("rotate")
		textBox.classList.add("hidden")
		
		setTimeout(_ => {
			image.src = slides[num].img
		}, 300)

		setTimeout(_ => {
			text.innerHTML = slides[num].text
			header.innerHTML = slides[num].header
			textBox.classList.remove("hidden")
		}, 600)

		setTimeout(_ => {
			image.classList.remove("rotate")
		}, 1200)

		switch(num) {
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

		bg.style.color = slides[num].color
	}

	let numbers = document.getElementsByClassName("number")
	let lines = document.getElementsByClassName("line")

	this._setFirstSlide = _ => {
		numbers[0].classList.add("active")
		numbers[1].classList.remove("active")
		numbers[2].classList.remove("active")

		lines[0].classList.remove("medium")
		lines[1].classList.remove("long")
		lines[1].classList.remove("medium")
		lines[0].classList.add("long")
	}

	numbers[0].onclick = _ => {
		this.set(0)
	}

	this._setSecondSlide = _ => {
		numbers[0].classList.remove("active")
		numbers[1].classList.add("active")
		numbers[2].classList.remove("active")

		lines[0].classList.remove("long")
		lines[1].classList.remove("long")
		lines[0].classList.add("medium")
		lines[1].classList.add("medium")
	}

	numbers[1].onclick = _ => {		
		this.set(1)
	}

	this._setThirdSlide = _ => {
		numbers[0].classList.remove("active")
		numbers[1].classList.remove("active")
		numbers[2].classList.add("active")

		lines[0].classList.remove("long")
		lines[0].classList.remove("medium")
		lines[1].classList.remove("medium")
		lines[1].classList.add("long")
	}

	numbers[2].onclick = _ => {
		this.set(2)
	}
}




