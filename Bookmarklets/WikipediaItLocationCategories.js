javascript:  
/* creates template for a category when being on entry of German Wikipedia article about the place */

var coor = "coordinate=" + document.getElementsByClassName("geo")[0].innerText.replace("; ", ",");
var wikidata = "|wikidataID=";  
var allAnkerNodes = document.getElementsByTagName("a"); 
for (var i=0; i < allAnkerNodes.length ; i++)  
{
	if ( href = allAnkerNodes[i].getAttribute("href")) 
	{ 
		hrefParts = href.split("/"); 
		if(hrefParts[4]=="Special:EntityPage") 
		{ 
			wikidata = wikidata + hrefParts[5]; 
			break; 
		} 
	} 
}  
alert("{{CategoryInfoBox Location\n|parent=\n|project=\n|team=\n|" + coor + "\n"+ wikidata + "\n}}"); 
void(0);
