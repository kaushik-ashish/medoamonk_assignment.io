window.onload = function(){
	
	var arrowNext = document.getElementById('arrow--next'),
			arrowPrev = document.getElementById('arrow--back'),
			bgImage = document.getElementById('bg_image'),
			navigation = document.getElementById('navigation'),
			newPosition = 0,
			currentId = 0,
			prevId;


	var coordinatesArray = [ 0, 125, 225, 350, 495, 625, 780, 900, 950, 1060 ];
	var lengthUnit = "vh";


	function getCoordinates(coordinatesArray, pageId) {
		return "-" + coordinatesArray[pageId];
	};

	arrowNext.addEventListener( "click", function(){
		currentId ++;
		var nextPageCoordinates = getCoordinates(coordinatesArray, currentId);
		renderPage(nextPageCoordinates);
	});

	arrowPrev.addEventListener( "click", function(){
		currentId --;
		var nextPageCoordinates = getCoordinates(coordinatesArray, currentId);
		renderPage(nextPageCoordinates);
	});

	navigation.addEventListener("click", function(event){
		var coordinates = getCoordinates(coordinatesArray, event.target.id);
		currentId = event.target.id;
		renderPage(coordinates);
	});

	function checkArrowVisibility() {
		if (currentId == 9) {
			arrowNext.style.visibility = "hidden";
		} else if (currentId == 0) {
			arrowPrev.style.visibility = "hidden";
		} else {
			arrowNext.style.visibility = "visible";
			arrowPrev.style.visibility = "visible";
		}
	}

	function renderPage(coordinates) {
		
		newPosition = coordinates;
		bgImage.style["transform"] = "translate(" + newPosition + lengthUnit + ", 0)";

		if (prevId != null) {
			var prevArticleId = "article--" + prevId,
					prevArticle = document.getElementById(prevArticleId),
					prevNavButton = document.getElementById(prevId);

			if (prevId != 9) {
				prevArticle.style.opacity = 0;
			}
			prevNavButton.className = "";
		}

		var newNavButton = document.getElementById(currentId);
		newNavButton.className = "listitem--clicked"; 

		setTimeout(function(){
			var articleId = "article--" + currentId, 
					currentArticle = document.getElementById(articleId);

			currentArticle.style.opacity = 1;
		}, 1500);

		checkArrowVisibility();

		prevId = currentId;
	}

	checkArrowVisibility();
	renderPage(0);


};

(function(){
	var loader = document.getElementById("loader"),

		show = function(){
			loader.style.display = "block";
		setTimeout(hide, 4000);
		},

		hide = function(){
			loader.style.display = "none";
		};

	show();
})();