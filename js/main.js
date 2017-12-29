var audio, playbtn, mutebtn, seek_bar;
	function initAudioPlayer(){
		audio = new Audio();
		audio.src = "sound/audio.mp3";
		audio.loop = true;
		audio.play();
		// Set object references
		playbtn = document.getElementById("playpausebtn");
		//mutebtn = document.getElementById("mutebtn");
		// Add Event Handling
		playbtn.addEventListener("click",playPause);
		//mutebtn.addEventListener("click", mute);
		// Functions
		function playPause(){
			if(audio.paused){
			    audio.play();
			    playbtn.style.background = "url(img/play.png) no-repeat";
		    } else {
			    audio.pause();
			    playbtn.style.background = "url(img/pause.png) no-repeat";
		    }
		}
		/*function mute(){
			if(audio.muted){
			    audio.muted = false;
			    mutebtn.style.background = "url(images/speaker.png) no-repeat";
		    } else {
			    audio.muted = true;
			    mutebtn.style.background = "url(images/speaker_muted.png) no-repeat";
		    }
		}*/
	}
window.addEventListener("load", initAudioPlayer);



var slider = $('.bxslider').bxSlider({
			mode: 'vertical',
		  	slideMargin: 5,
		  	pager: false,
		  	infiniteLoop: false,
		  	hideControlOnEnd: true,
		  	onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
		            console.log(currentSlideHtmlObject);
		            if(currentSlideHtmlObject==1){
				      $(".texto-1").fadeIn(1500);
				      $(".texto-2").fadeIn(3000);
				      $(".texto-3").fadeIn(4500);
				    }
				    else{
				      $(".texto-1").hide();
				      $(".texto-2").hide();
				      $(".texto-3").hide();
				    }  
				    if(currentSlideHtmlObject==2){
				      $(".texto-4").fadeIn(1500);
				      $(".texto-5").fadeIn(3000);
				      $(".texto-6").fadeIn(4500);
				      $(".texto-7").fadeIn(6000);
				    }
				    else{
				      $(".texto-4").hide();
				      $(".texto-5").hide();
				      $(".texto-6").hide();
				      $(".texto-7").hide();
				    } 
				    if(currentSlideHtmlObject==3){
				      $(".texto-8").fadeIn(1500);
				      $(".texto-9").fadeIn(3000);
				      $(".texto-10").fadeIn(4500);
				      $(".texto-11").fadeIn(6000);
				    }
				    else{
				      $(".texto-8").hide();
				      $(".texto-9").hide();
				      $(".texto-10").hide();
				      $(".texto-11").hide();
				    }
				    if(currentSlideHtmlObject==4){
				      $(".texto-12").fadeIn(1500);
				      $(".texto-13").fadeIn(3000);
				      $(".texto-14").fadeIn(4500);
				      $(".texto-15").fadeIn(6000);
				    }
				    else{
				      $(".texto-12").hide();
				      $(".texto-13").hide();
				      $(".texto-14").hide();
				      $(".texto-15").hide();
				    } 
				    if(currentSlideHtmlObject==5){
				      $(".texto-16").fadeIn(1500);
				      $(".texto-17").fadeIn(3000);
				      $(".texto-18").fadeIn(4500);
				      $(".texto-19").fadeIn(6000);
				    }
				    else{
				      $(".texto-16").hide();
				      $(".texto-17").hide();
				      $(".texto-18").hide();
				      $(".texto-19").hide();
				    }
				    if(currentSlideHtmlObject==6){
				      $(".texto-20").fadeIn(1500);
				      $(".texto-21").fadeIn(3000);
				      $(".texto-22").fadeIn(4500);
				      $(".texto-23").fadeIn(6000);
				    }
				    else{
				      $(".texto-20").hide();
				      $(".texto-21").hide();
				      $(".texto-22").hide();
				      $(".texto-23").hide();
				    }  
				    if(currentSlideHtmlObject==7){
				      $(".texto-24").fadeIn(1500);
				      $(".texto-25").fadeIn(3000);
				      $(".texto-26").fadeIn(4500);
				    }
				    else{
				      $(".texto-24").hide();
				      $(".texto-25").hide();
				      $(".texto-26").hide();
				    }
				    if(currentSlideHtmlObject==8){
				      $(".texto-27").fadeIn(1500);
				      $(".texto-28").fadeIn(3000);
				      $(".texto-29").fadeIn(4500);
				    }
				    else{
				      $(".texto-27").hide();
				      $(".texto-28").hide();
				      $(".texto-29").hide();
				    }
				    if(currentSlideHtmlObject==9){
				      $(".texto-30").fadeIn(1500);
				      $(".texto-31").fadeIn(3000);
				      $(".texto-32").fadeIn(4500);
				      $(".texto-33").fadeIn(6000);
				    }
				    else{
				      $(".texto-30").hide();
				      $(".texto-31").hide();
				      $(".texto-32").hide();
				      $(".texto-33").hide();
				    }
				    if(currentSlideHtmlObject==10){
				      $(".texto-34").fadeIn(1500);
				      $(".texto-35").fadeIn(3000);
				      $(".texto-36").fadeIn(4500);
				      $(".texto-37").fadeIn(6000);
				    }
				    else{
				      $(".texto-34").hide();
				      $(".texto-35").hide();
				      $(".texto-36").hide();
				      $(".texto-37").hide();
				    }
				    if(currentSlideHtmlObject==11){
				    	$("#value").fadeTo("slow", 1);
				    	$("#value-2").fadeTo("slow", 1);
				    	$("#value-3").fadeTo("slow", 1);
				    	$("#value-4").fadeTo("slow", 1);
				      	function animateValue(id, start, end, duration) {
						    var range = end - start;
						    var current = start;
						    var increment = end > start? 1 : -1;
						    var stepTime = Math.abs(Math.floor(duration / range));
						    var obj = document.getElementById(id);
						    var timer = setInterval(function() {
						        current += increment;
						        obj.innerHTML = current;
						        if (current == end) {
						            clearInterval(timer);
						        }
						    }, stepTime);
						}
						animateValue("value", 0, 600, 4000);
						animateValue("value-2", 0, 72, 4000);
						animateValue("value-3", 0, 126, 4000);
						animateValue("value-4", 0, 2160, 3000);
				    }
				    else{
				      $("#value").fadeTo("slow", 0);
				      $("#value-2").fadeTo("slow", 0);
				      $("#value-3").fadeTo("slow", 0);
				      $("#value-4").fadeTo("slow", 0);
				    }
			}        	
		});