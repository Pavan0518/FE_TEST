function gotoOffers(nType){
	var strType = nType == 1 ? "internet" : nType == 2 ? "phone" : "tv";
	localStorage["type"] = strType;
	window.location.href="offer.html";
}

