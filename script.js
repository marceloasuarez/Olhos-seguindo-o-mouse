const olhos=[...document.getElementsByClassName("olho")]
	let posx_mouse=0
	let posy_mouse=0
window.addEventListener("mousemove",(evt)=>{ //captura posicion del mouse
	posx_mouse=evt.clientX
	posy_mouse=evt.clientY
	
	const rot=Math.atan2(posy_mouse,posx_mouse) * 180/Math.PI //retorn arcotangente(angulo en radianos) de 2 coeficientes, x e y. El 180 y el PI lo convierte para angulo.
	
	
	olhos.forEach((o)=>{
		o.style.transform="rotate("+rot+"deg)"
	})
})

//olhos[0].style.transform="rotate("+90+"deg)"