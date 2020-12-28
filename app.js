
const adjetivos = [
	 
	"vividor", "prenda", "golfo", "valiente",
	"canario", "johnny", "bravo", "canallita", "chulazo", "truhan",
	
	// Superlativos
	"mostrenco", "mastodonte", 

	// Adjetivos de victoria
	"figura", "crack", "ídolo", "champion", "referente", "artista", "elemento", "jefe", "maestro", "héroe", "fenómeno", "campeón", "killer", "genio",
	
	// Mandos
	"socio", "jefe", "capitán", "sargento", "coronel", "mariscal", "macho alfa", 
	
	// Desastres
	"tifón", "huracán", "terremoto", "maremoto", "tornado", "tsunami", "ciclón", "lluvia torrencial", 
	
	// Cosas de metal
	"caza de combate", "robocop", "truck", "maquinola", "terminator", "tanque", "helicóptero", "pieza", "buque",  
	
	// Animales
	"animal", "gacela", "tigre", "semental", "fiera", "caimán", "león", "toro", "búfalo", "lobo", "lobezno", "king", "kong", "depredador", "presa", "bestia", "halcón", "águila", "rottweiler", 
	
	// Dinosaurios
	"brontosaurio", "tiranosaurio", "velociraptor", "godzilla", 
	
	// Personajes
	"vaquero", "samurai", "ninja", "paladín", "vikingo", "valkiria",  "superman", "willyrex",
	
	// Mitología
	"dios", "deidad", "zeus", "titán", "gigante", "minotauro", "goliat", "coloso", "atlas", "fénix", 
	
	// Paranormal
	"espectro", "mostro", "monstruo", "monster", 
	
	// Objetos
	"adamantium", "hacha", "mole", "espada", "espadón", "bracamarte", 
	
];
const nAdjetivos = adjetivos.length;
let cantidad = 5;



function gracias () {
	
	// Selecciono x aleatorios
	let str = "Gracias máquina, ";
	
	
	let clon = [...adjetivos];
	let nClon = clon.length;
	
	
	for (let _i = 1; _i <= cantidad; _i ++) {
		
		let idx = Math.floor(Math.random() * nClon);
		let adjetivo = clon[idx];
		
		
		if (_i < cantidad) {
			str += `${adjetivo}, `;
		} else {
			str += `${adjetivo}.`;
		};
		
		clon.splice(idx, 1);
		nClon = clon.length;
		
	};
	
	
	
	const ele = document.getElementById("input");
	
	ele.value = str;
	
};



document.addEventListener("wheel", (ev) => {
	
	let {deltaY} = ev;
	
	if (deltaY < 0) {
		cantidad = Math.min(nAdjetivos, cantidad + 1);
	} else {
		cantidad = Math.max(cantidad - 1, 5);
	};
	
	
	pintaCantidad();
	
});



document.getElementById("input").addEventListener("click", ev => {
	
	let ele = ev.target;
	if (!ele.value) return;
	
	ele.select();
	ele.setSelectionRange(0, 99999);
	
	document.execCommand("copy");
	muestraTextoCopiado();
	
});



const pintaCantidad = () => {
	
	document.querySelector("button").innerText = `Agradecer x ${cantidad}`;
	
};


const muestraTextoCopiado = () => {
	
	let ele = document.getElementsByClassName("textoCopiado")[0];
	
	ele.classList.add("fadeIn");
	
	setTimeout( () => {
		ele.classList.remove("fadeIn");
	}, 1500);
	
	
};


const pintaVersion = () => {
	
	let adjetivo = adjetivos[Math.floor(Math.random() * nAdjetivos)];
	document.getElementsByClassName("version")[0].innerText = `Versión ${adjetivo}`;
	
};



const comprueba = () => {

	const prLink = document.getElementsByClassName("prLink")[0];
	prLink.style.opacity = 0;
	
	let ele = document.getElementsByClassName("inputComprueba")[0];
	let eleResultado = document.getElementsByClassName("resultadoComprueba")[0];
	let adjetivo = ele.value.toLowerCase();
	
	if (!adjetivo) {
		eleResultado.innerText = "Adjetivo no válido";
		eleResultado.classList.add("rojo");
		return;
	};
	
	
	if (adjetivos.includes(adjetivo)) {
		
		eleResultado.innerText = "Ya existe :(";
		eleResultado.classList.add("rojo");
		
	} else {
		
		eleResultado.innerText = "¡No existe!";
		eleResultado.classList.remove("rojo");
		
		prLink.style.opacity = 1;
		
	};
	
};



pintaCantidad();
pintaVersion();