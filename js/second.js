var ThisCell, CellHeight;
var arr = new Array(9);
var canvas = document.getElementById('canvas');
CWidth = window.innerWidth;
CHeight = window.innerHeight;
canvas.style.width = CWidth  + 'px';
canvas.style.height = CHeight + 'px';
for (var i=0; i < 9; i++){
	divCell = document.createElement('div');
	divCell.className = "cell";
	divCell.id = i +"";
	divCell.setAttribute("onClick", "TakeElement(this.id)");
	divCell.setAttribute("ontouchend", "TakeElement(this.id)");
	divCell.style.width = CWidth / 3 - 35 + 'px';
	divCell.style.height = CHeight / 3 - 35 + 'px';
	canvas.appendChild(divCell);
}
var Cells = document.getElementsByClassName('cell');
var X = true;

function TakeElement(val){
	ThisCell = document.getElementById(val);
	CellHeight = ThisCell.style.height;
	if(X){	
		WriteElement("X",false, val);
	}
	else if(!X){
		WriteElement("0",true);
	}
	isitend();
};
function WriteElement (first, second, id){
	if (!ThisCell.firstElementChild){
		ThisCell.innerHTML = "<div class='Value'>" + first + "</div>";
		Value = ThisCell.firstElementChild;
		Value.style.lineHeight = CellHeight;
		Value.style.fontSize = parseInt(CellHeight, 10) - 30 + 'px';
		X = second;
		return 0;
		arr[i] = first;
	}
}
function isitend(id){
	if (arr[0]=='X' && arr[1]=='X' && arr[2]=='X' || arr[0]=='0' && arr[1]=='0' && arr[2]=='0')  return true;
  	if (arr[3]=='X' && arr[4]=='X' && arr[5]=='X' || arr[3]=='0' && arr[4]=='0' && arr[5]=='0')  return true;
  	if (arr[6]=='X' && arr[7]=='X' && arr[8]=='X' || arr[6]=='0' && arr[7]=='0' && arr[8]=='0')  return true;
  	if (arr[0]=='X' && arr[3]=='X' && arr[6]=='X' || arr[0]=='0' && arr[3]=='0' && arr[6]=='0')  return true;
  	if (arr[1]=='X' && arr[4]=='X' && arr[7]=='X' || arr[1]=='0' && arr[4]=='0' && arr[7]=='0')  return true;
  	if (arr[2]=='X' && arr[5]=='X' && arr[8]=='X' || arr[2]=='0' && arr[5]=='0' && arr[8]=='0')  return true;
  	if (arr[0]=='X' && arr[4]=='X' && arr[8]=='X' || arr[0]=='0' && arr[4]=='0' && arr[8]=='0')  return true;
  	if (arr[2]=='X' && arr[4]=='X' && arr[6]=='X' || arr[2]=='0' && arr[4]=='0' && arr[6]=='0')  return true;
  	if(arr[0] && arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8]) return true;
}
