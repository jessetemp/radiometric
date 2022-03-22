function hoverByClass(className) {
	var elements = document.getElementsByClassName(className);
	for(let n = 0; n < elements.length; n++){
		elements[n].onmouseover = function() {
			for(let n2 = 0; n2 < elements.length; n2++){
				elements[n2].style.opacity = 1;
				elements[n2].style["stop-opacity"] = 1;
			}
		};
		elements[n].onmouseout = function() {
			for(var n2 = 0; n2 < elements.length; n2++){
				elements[n2].style.opacity = 0.7;
				elements[n2].style["stop-opacity"] = 0.7;
			}
		};
	}
}

hoverByClass("carbon");
hoverByClass("uranium");