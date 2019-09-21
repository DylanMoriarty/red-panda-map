
// console.log(zooDat)

// const zooDates = {}

// zooDat.forEach((p, i) => {
// 	const thisZoo = pandasByZoo[p.zoo]
// 	thisZoo.address = p.address	
// })

// console.log(pandasByZoo)



mapboxgl.accessToken = 'pk.eyJ1IjoiZG1vcmlhcnR5IiwiYSI6Ikd3T29EOWMifQ.-DKJ4ernht84AZmc6Bk51Q';
	var map = new mapboxgl.Map({
	container: 'map', // container id
	style: 'mapbox://styles/dmoriarty/ck01kgiey5k0o1dov9c5xse3r', // stylesheet location
	center: [0,0], // starting position [lng, lat]
	zoom: 1, // starting zoom
	renderWorldCopies: false,
	attributionControl: false
});

var popup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false
});

map.on('click', 'background (1) copy', function(e) {
	if(window.innerWidth > 600) {
		popup.remove()		
	}
})

map.on('mouseenter', 'zooss', function(e) {
// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = 'pointer';
	 
	var coordinates = e.features[0].geometry.coordinates.slice();
	var props = e.features[0].properties;

	// console.log(props)
	const zoo = props.zoo
	const pandas = (pandasByZoo[zoo])

	const titleString = '<h3 class="zooName">' + zoo + '</h3>'
	let pandaString = '<ul class="pandaList">'
	const address = pandas.address.replace(/ /g,"+")
	const directionString = '<p class="directionSpacing"><a href="http://maps.google.com/?q=' + address + '" target="_blank" class="directions">&#x2192; Get Directions</a></p>'
	const killSwitch = '<div class="popupKill" ></div>'

	pandas.redPands.forEach((p, i) => {
		if (i < 3) {
			pandaString = pandaString + '<li><img src="img/panda-face.svg"/ class="pandaFace">' + p + '</li>'
		} else if (i === 3) {
			pandaString = pandaString + '<li class="pandaListEnd">...and more!</li>'
		}
	})

	pandaString = pandaString + '</ul>'

	const description = killSwitch + titleString + directionString + pandaString


	// for (var k in pandasByZoo) {
	// 	if (k === props.zoo ) {
	// 		console.log(k, 'match!')
	// 	}
	// }

	// pandasByZoo.forEach((z) => {
	// 	console.log(z)
	// })
	// const value = pandasByZoo.find(o => {
	// 	Object.entries(o).find(([k, value]) => {
	// 		k === ''
	// 	})
	// })

    // object = items.GROUP.find(o => Object.entries(o).find(([k, value]) => k === 'name' && value === key) !== undefined);


	// console.log(props)

	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	// while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	// coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	// }
	 
	// // Populate the popup and set its coordinates
	// // based on the feature found.
	popup.setLngLat(coordinates)
		.setHTML(description)
		.addTo(map);

	const killSwitchElm = document.querySelector('.popupKill')

	killSwitchElm.addEventListener('click', ()=> {
		popup.remove()
	})
});

map.on('mouseout', 'zooss', function(e) {
	map.getCanvas().style.cursor = 'grab'
	// popup.remove()
})

const ZoomIn = document.querySelector('.zoomin-btn')
const ZoomOut = document.querySelector('.zoomout-btn')

ZoomIn.addEventListener('click', () => {
	map.zoomIn()
})

ZoomOut.addEventListener('click', () => {
	map.zoomOut()
})

const aboutBtn = document.querySelector('.about')
const method = document.querySelector('.method')
const methodCon = document.querySelector('.method-contain')
const methodBack = document.querySelector('.method-back')

aboutBtn.addEventListener('click', function() {
	methodCon.style.opacity = 1
	methodCon.className = 'method-contain visible'
}) 

methodBack.addEventListener('click', function() {
	methodCon.className = 'method-contain hidden'
})


// methodCon.addEventListener('click', fadeOutEffect())

// function fadeOutEffect() {
// 	console.log('why not work')

// 	const fadeTarget = document.querySelector('.method-contain')

//     var fadeEffect = setInterval(function () {
//         if (!fadeTarget.style.opacity) {
//             fadeTarget.style.opacity = 1
//         }
//         if (fadeTarget.style.opacity > 0) {
//             fadeTarget.style.opacity -= 0.1
//         } else {
//         	console.log('woof')
//         	fadeTarget.style.display = 'none'
//             clearInterval(fadeEffect)
//         }
//     }, 80);
// }

