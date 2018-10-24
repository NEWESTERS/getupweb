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
	let currentNum = -1

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
		}, 300)

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

	this.set(0)
}
