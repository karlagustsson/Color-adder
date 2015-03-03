var c = 0;
var colors = [];

function addToArray()
{
	color = document.myColorForm.myColor.value;
	colors.push(color);
	smallColorBoxes();
}

function subtractFromArray()
{
	colors.pop();
	/* check if colors array is empty*/
	if(colors.length === 0) {
		document.getElementById('arrayBox').innerHTML = '';
		document.getElementById('colorBox').style.backgroundColor = 'white';
	} else {
		smallColorBoxes();
	}
}

function makeColors(myIdBox)
{
	document.getElementById(myIdBox).style.backgroundColor = colors[c];
	if(c < (colors.length - 1)) {
		c++; }
	else
	{  c = 0;  }
}

function smallColorBoxes()
{
	p = true;
	for(i=0; i < colors.length; i++)
		{
		if(p === true) {
			document.getElementById('arrayBox').innerHTML = '<div id="smallBox" style="background-color:' +colors[i] + '"></div>';
			} else {
			document.getElementById('arrayBox').innerHTML += '<div id="smallBox" style="background-color:' +colors[i] + '"></div>';
			}
		p = false;
		}
}

function redirect()
{

	/* code for random linking (with array use) */
	var link;
	var links = ["http://www.mbl.is/", 
				"http://www.visir.is/", 
				"http://www.dv.is/",
				"http://eyjan.pressan.is",
				"http://www.ruv.is"];
	r = Math.floor(Math.random() * links.length);
	link = links[r];
	window.open(link);
}	

