menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if(x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

$(function() {
	 
	$(window).scroll(function() {
	 
	if($(this).scrollTop() != 0) {
	 
	$('#toTop').fadeIn();
	 
	} else {
	 
	$('#toTop').fadeOut();
	 
	}
	 
	});
	 
	$('#toTop').click(function() {
	 
	$('body,html').animate({scrollTop:0},800);
	 
	});
	 
});

function initMap() {
        var uluru = {lat: 52.507, lng: 13.3985};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

