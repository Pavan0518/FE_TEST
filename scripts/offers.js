var strHtml = "";
function onLoad(){
	selectProductType(0);
}
function getOffers(){
	return {
			  "response": "0000",
			  "offers": [
				{
				  "offerType": "internet",
				  "price": "100",
				  "disclosures": {
					"disclosure1": "Disclosure 1",
					"disclosure2": "Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2",
					"disclosure3": "Disclosure 3 Disclosure 3 Disclosure 3"
				  }
				},
				{
				  "offerType": "phone",
				  "price": "150",
				  "disclosures": {
					"disclosure1": "Disclosure 1",
					"disclosure2": "Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2",
					"disclosure3": "Disclosure 3 Disclosure 3 Disclosure 3"
				  }
				},
				{
				  "offerType": "tv",
				  "price": "200",
				  "disclosures": {
					"disclosure1": "Disclosure 1",
					"disclosure2": "Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2 Disclosure 2",
					"disclosure3": "Disclosure 3 Disclosure 3 Disclosure 3"
				  }
				}
			  ]
			};
}

function selectProductType(nMode){
	var value = document.getElementById("ddlProd").value;
	if(nMode == 0){
		var strType = localStorage["type"];
		value = strType ? strType : value;
		if(strType) document.getElementById("ddlProd").value = strType;	
	}
	var data = getOffers();
	var reqData;
	var arrData = data.offers;
	document.getElementById("dynamicAppend").innerHTML = "";
	strHtml = "";
	for(var nI = 0; nI < arrData.length; nI++){
		reqData = arrData[nI];
		if(arrData[nI].offerType == value){
				strHtml = prepareHtml(arrData[nI]);
				break;
		} else if(value == "all") {
			strHtml += prepareHtml(arrData[nI]);
		}
	}
	document.getElementById("dynamicAppend").innerHTML = strHtml;
}

function prepareHtml(reqData){
	var strPrepareHtml = `
	<div class="center-div center">
				<h3>${reqData.disclosures.disclosure1}</h3>
				<div class="disp-money">
					<svg height="100" width="100">
					  <circle cx="50" cy="50" r="40" stroke="" stroke-width="3" fill="#cccc" />
					   <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20px" font-family="Arial" dy=".3em">$${reqData.price}*</text>
					</svg> 
				</div>
				<div style="float:none;">
					<ul>
						<li>${reqData.disclosures.disclosure2}</li>
					</ul>
				</div>
				
				<div>
					<span>${reqData.disclosures.disclosure3}</span>
				</div>
			</div>
	
	`;
	return strPrepareHtml;
}