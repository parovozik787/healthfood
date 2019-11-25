//Cross-browser cross-frame element retrieval
function Get( oName, oFrame, oDoc ) {
	if( !oDoc ) { if( oFrame ) { oDoc = oFrame.document; } else { oDoc = window.document; } }
	if( oDoc[oName] ) { return oDoc[oName]; } if( oDoc.all && oDoc.all[oName] ) { return oDoc.all[oName]; }
	if( oDoc.getElementById && oDoc.getElementById(oName) ) { return oDoc.getElementById(oName); }
	for( var x = 0; x < oDoc.forms.length; x++ ) { if( oDoc.forms[x][oName] ) { return oDoc.forms[x][oName]; } }
	for( var x = 0; x < oDoc.anchors.length; x++ ) { if( oDoc.anchors[x].name == oName ) { return oDoc.anchors[x]; } }
	for( var x = 0; document.layers && x < oDoc.layers.length; x++ ) {
		var theOb = Get( oName, null, oDoc.layers[x].document ); if( theOb ) { return theOb; } }
	if( !oFrame && window[oName] ) { return window[oName]; } if( oFrame && oFrame[oName] ) { return oFrame[oName]; }
	for( var x = 0; oFrame && oFrame.frames && x < oFrame.frames.length; x++ ) {
		var theOb = Get( oName, oFrame.frames[x], oFrame.frames[x].document ); if( theOb ) { return theOb; } }
	return null;
}

// Numeric test
function isNumeric(num, fieldPrompt, fieldName) {
	var regTest=/(^\d+$)|(^\d+\.\d+$)/
	if (regTest.test(num))
		return true;
	else {
		if (fieldPrompt) {
			alert(fieldPrompt + " В данном поле допускаются только цифры");
			Get(fieldName).focus();
			Get(fieldName).select();
		}
		return false;
	}
}

//Iterate thru table rows
function loopTable(tbl, fnCallback, data)
{

  var r, c;
  if (!tbl || !fnCallback)
	return;

  for (r = 0; r < tbl.rows.length; ++r) {
    if (false == fnCallback(tbl.rows[r], true, r, c, data)) {
		return;
	}
/*
    for (c = 0; c < obj.rows[r].cells.length; ++c) {
      if (false == fnCallback(obj.rows[r].cells[c], false, r, c, data)) {
		return;
	  }
    }*/
  }
}

/* xTableCursor - mouseover highlight on rows and cells.
   id  - table id.
   inh - inherit style.
   def - default style.
   hov - row hover style.
   sel - cell selected style.
*/
function TableObject(id, inh, def, hov, sel, alt) // object prototype
{
  var tbl = Get(id);
  if (tbl) {
    loopTable(tbl, doHover);
  }
  function doHover(obj, isRow)
  {
    if (isRow) {

	  if (obj.className == alt) {
	  	//debug("got alt");
	  		obj.onmouseout = trOutAlt;
	  } else {
	  	obj.onmouseout = trOut;
	  }
      //obj.className = def;
      obj.onmouseover = trOver;

    }
    else {
      obj.className = inh;
      obj.onmouseover = tdOver;
      obj.onmouseout = tdOut;
    }
  }
  this.unload = function() { loopTable(tbl, clearEvents); }
  function clearEvents(o) { o.onmouseover = o.onmouseout = null; }
  function trOver() { this.className = hov; }
  function trOut() {this.className = def;}
  function trOutAlt() {this.className = alt;}
  function tdOver() { this.className = sel; }
  function tdOut() { this.className = inh; }
}

function init() {
	//showDebug();
	//Get("age").focus();
}

//window.onload = init;

function printPage (elementPrint) {
	var printDiv = Get(elementPrint);

	if (document.getElementsByTagName) {
		linkEl = document.getElementsByTagName('link');
		styleEl= document.getElementsByTagName('style');
		}
	printWindow = window.open("","printWindow","left=50,top=50,width=400,height=400,scrollbars=yes,"+"status=yes,resizable=yes");
    printWindow.opener = self;
    d = printWindow.document;
	//Write the printed contents
    d.open();
	d.writeln("<html><head><title>" + document.title + "</title>");
	if (linkEl) {
	  	d.writeln ("<link rel='stylesheet' type='text/css' href='" +linkEl[0].getAttribute('href') + "'/>");
		d.writeln ("<style type='text/css'>" + styleEl[0].innerHTML + "</style>");
	}
	d.writeln("</head><body>");
	d.writeln(printDiv.innerHTML);
	d.writeln("<br><b style='font-family:tahoma;'>Calculated at www.freedieting.com/tools/index.html");
	d.writeln("</html>");

	d.close();
	printWindow.print();
	printWindow.close();
}

function showHide(block) {

	//var result = document.getElementById("zigResults");
	if (block.className == "displayNone") {
		block.className = "displayBlock";
		isVis = true;
	} else {
		block.className = "displayNone";
		isVis = false;
	}

	return true;
}

function toggleMe(trigger, div) {
  showHide(document.getElementById(div));
  linkImages = trigger.getElementsByTagName('IMG');
  zipImg = linkImages[0];
  if (isVis) {
    zipImg.src = "files/widget_triangle_open.gif";
  } else {
    zipImg.src = "files/widget_triangle.gif";
  }
}

function calcIt() {

/* anim effects */
let anim = document.querySelectorAll('tr > td, .calculator-table-header__title ~ p');

for (let elem of anim) {
	elem.style.opacity = 0;
	function opacity() {
	  elem.style.opacity = 1;
	}
	if (elem.style.opacity == 0) {
		elem.style.opacity = 0;
		setTimeout(opacity, 200);
	} else {
		elem.style.opacity = 1;
	}
}
/* anim effects */

function animation() {

	oForm = document.calculatorSlimming;

	weight = parseInt(oForm.weight.value*1);
	age = parseInt(oForm.age.value*1);
	//feet = parseInt(oForm.feet.value*1);
	//inches = parseInt(oForm.inches.value*1);
	sm = parseInt(oForm.sm.value*1);
	//var bfPer = parseInt(oForm.txtBF.value*1);

	var bfPer=1;

	if (!isNumeric(age,"ВОЗРАСТ:","age"))
		return false;
	else if ( (age <= 12) || (age > 80) ) {
		alert ("Возраст должен быть между 13 и 80");
		return false;
	}

	if (!isNumeric(weight,"ВЕС:","weight"))
		return false;
	else if ( (weight <= 35) || (weight > 500) ) {
		alert ("Пожалуйста, введите реальный вес");
		return false;
	}


	/*
	if (!isNumeric(feet,"Feet:","feet"))
		return false;
	else if ( (feet < 4) || (feet > 7) ) {
		alert ("Height must be between 4 and 7 feet");
		return false;
	}

	if (!isNumeric(inches,"Inches:","inches"))
		return false;
	*/
	/*
	if (!isNumeric(bfPer,"Жир %","txtBF"))
		return false;
	*/
	if (oForm.weighttype[1].checked)
	//	weight = weight/2.2;

		weight = weight*0.45;

	//height = ((feet*12) + inches) * 2.54;

	height=sm;


	if (oForm.optFormula[1].checked) {
		//Harris Benedict
		if (oForm.sex[0].checked) {
			result = 66.5 + (13.75 * weight) + (5.003 * height) - (6.775 * age); //Men
		} else {
			result = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age); //Women
		}
	} else {

		if (oForm.optFormula[0].checked) {
			var leanMass = weight - (weight * (bfPer / 100));
			//result = 21.6 * weight  + 370; //Katch Mcardle
			//result = 500 + (22 * weight); /?
			result = 19.7 * leanMass + 413;
		} else {
			//Mifflin St-Jeor
			if (oForm.sex[0].checked)
				result = 5 + (10 * weight) + (6.25 * height) - (5 * age);
			else
				result = -161 + (10*weight) + (6.25 * height) - (5 * age);
		}
	}

	var maintain = result * oForm.activity.options[oForm.activity.selectedIndex].value;
	var isBMR = false;
	if (oForm.activity.options[oForm.activity.selectedIndex].value == 1)
		isBMR = true;

	rockBottom = (weight*2.2)*8;
	var suffix = " ккал/день";

	//kJ conversion
	if (!oForm.optResults[0].checked) {
		maintain = maintain * 4.184;
		rockBottom = rockBottom * 4.184;
		suffix = " килоджоулей/день";
	}
	/*
	else {

		var linkNut = Get("linkNutrient").href;
		if (linkNut.indexOf("?") != -1)
			linkNut = linkNut.substring(0,linkNut.indexOf("?"));
		linkNut += "?cals=" + Math.round(maintain);
		Get("linkNutrient").href = linkNut;
		Get("linkNutrient2").href = linkNut;

	}
	*/

	s = Math.round(maintain) + suffix;
	Get("answer").innerHTML = s;

	loseFat = maintain - (maintain*0.20)
	if (loseFat < rockBottom)
		loseFat = rockBottom;
	s = Math.round(loseFat) + suffix;
	Get("lose").innerHTML = s;

	var extLoseFat = maintain - (maintain*0.40)
	if (extLoseFat < rockBottom)
		extLoseFat = rockBottom;
	s = Math.round(extLoseFat) + suffix;
	Get("loseExt").innerHTML = s;

	var gain = maintain + (maintain*0.20)
	s = Math.round(gain) + suffix;
	//Get("gain").innerHTML = s;

	if (isBMR) {
		Get("loseExt").innerHTML =  "-";
		Get("lose").innerHTML = "-";
	}


	//try walking the DOM
	var zigzag = new Array(1,0.8,1.2,1,0.9,1.1,1);
	var tbl = document.getElementById('calcResultsTable');
	var sZig;

	for (r = 1; r < tbl.rows.length; ++r) {
	  	thisRow = tbl.rows[r];
	  	for (c = 1; c < thisRow.cells.length; ++c) {

			if (c==1)
				sZig = extLoseFat * zigzag[r-1];
			if (c==2)
				sZig = loseFat * zigzag[r-1];
			if (c==3)
				sZig = maintain * zigzag[r-1];
			if (c==4)
				sZig = gain * zigzag[r-1];

			if (sZig < rockBottom)
				sZig = rockBottom

			thisRow.cells[c].innerHTML = Math.ceil(sZig);
			if (isBMR)
				thisRow.cells[c].innerHTML =  "-";
		}
	}

	return true;

}

setTimeout(animation, 200);

}
