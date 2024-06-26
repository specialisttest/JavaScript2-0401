function success(position) {
	var mapToYou = document.querySelector('#mapToYou');
	alert("Gotcha!");
	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var myOptions = {
		zoom: 15,
		center: latlng,
		mapTypeControl: false,
		navigationControlOptions: {
			style: google.maps.NavigationControlStyle.SMALL
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var googleMap = new google.maps.Map(mapToYou, myOptions);
	var marker = new google.maps.Marker({
	  position: latlng, 
	  map: googleMap, 
	  title:"You are here!"
	});
}

function error(msg) {
	var mapToYou = document.querySelector('#mapToYou');
	mapToYou.innerHTML = typeof msg == 'string' ? msg : "failed";
	mapToYou.className = 'fail';
	
	// console.log(arguments);
}

window.addEventListener("load", function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			//success
		function(position){
			var mapToYou = document.getElementById('mapToYou');
			mapToYou.innerHTML = ""
			for(let prop in position.coords)
				mapToYou.innerHTML += prop + ' : ' + position.coords[prop] + '<br>'

		}, error);
		//navigator.geolocation.watchPosition(f1, f2)
	} else {
		error('not supported');
	}
},false);