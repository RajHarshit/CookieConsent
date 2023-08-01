const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const form = document.getElementById("form")
const modalText = document.getElementById("modal-text")
const modalChoiceBtn = document.getElementById("modal-choice-btns")
const decline = document.getElementById("decline")


setTimeout(function() {
	modal.style.display = "inline";
}, 1500)


modalCloseBtn.addEventListener("click", function() {
	modal.style.display = "none";
})


decline.addEventListener("mouseenter", function() {
	modalChoiceBtn.classList.toggle("modal-choice-btns-reverse")
})


form.addEventListener("submit", function(e) {
	e.preventDefault()

	const form1 = new FormData(form)
	const Name = form1.get("name")


	modalText.innerHTML = `
	<div class="modal-inner-loading">
	    <img src="loading.svg" class="loading">
	    <p id="uploadText">
	        Uploading your data to the dark web...
	    </p>
	</div>`


	setTimeout(function(){
		document.getElementById("uploadText").innerText = `
			Making the sale...`
	}, 1500)


	setTimeout(function() {
		document.getElementById("modal-inner").innerHTML = `
			<h2>Thanks <span class="modal-display-name">${Name}</span>, you sucker! </h2>
	        <p>We just sold the rights to your eternal soul.</p>
	        <div class="idiot-gif">
	            <img src="pirate.gif">
	        </div>
		` 

		modalCloseBtn.disabled = false
	},3000)

})