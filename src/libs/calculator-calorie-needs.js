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

function recalc() {

	/* anim effects */
	let anim = document.querySelectorAll('tr > td:last-child');

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

	var age = $("select[name='age']").val();
	var weight = parseInt($("input[id='weight']").val());
	var w = parseInt($("select[name='w']").val());
	var act = $("select[name='act']").val();

	var k,b,z,zb,u;
	if ($("input[name='sex']:checked").val() == 1) {
		sex=1;
	} else {
		sex=0;
	}

	if(age==1)	{k=800;b=2.2;zb=2.2;z=6.5;u=13;}
	if(age==2)	{k=800;b=2.6;zb=2.5;z=6.0;u=13;}
	if(age==3)  {k=800;b=2.9;zb=2.3;z=5.5;u=13;}
	if(age==4)  {k=1540;b=53;zb=37;z=53;u=212;}
	if(age==5)	{k=1970;b=68;zb=44;z=68;u=272;}
	if(age==6)	{k=2000;b=69;zb=45;z=67;u=285;}
	if(age==7)	{k=2350;b=77;zb=46;z=79;u=335;}
	if(age==8 && sex==1) {k=2750;b=90;zb=54;z=92;u=390;}
	if(age==8 && sex==0) {k=2500;b=82;zb=49;z=84;u=355;}
	if(age==9 && sex==1) {k=3000;b=98;zb=59;z=100;u=425;}
	if(age==9 && sex==0) {k=2600;b=90;zb=54;z=90;u=360;}

	if(age==10 && sex==1 && act==1) {k=2450;b=72;zb=40;z=81;u=358;}
	if(age==11 && sex==1 && act==1) {k=2300;b=86;zb=37;z=77;u=335;}
	if(age==12 && sex==1 && act==1) {k=2100;b=65;zb=36;z=70;u=303;}
	if(age==10 && sex==1 && act==2) {k=2800;b=80;zb=44;z=93;u=411;}
	if(age==11 && sex==1 && act==2) {k=2650;b=77;zb=42;z=88;u=387;}
	if(age==12 && sex==1 && act==2) {k=2500;b=72;zb=40;z=83;u=366;}
	if(age==10 && sex==1 && act==3) {k=3300;b=92;zb=52;z=110;u=484;}
	if(age==11 && sex==1 && act==3) {k=3150;b=89;zb=49;z=105;u=462;}
	if(age==12 && sex==1 && act==3) {k=2950;b=84;zb=46;z=98;u=432;}
	if(age==10 && sex==1 && act==4) {k=3850;b=108;zb=59;z=128;u=566;}
	if(age==11 && sex==1 && act==4) {k=3600;b=102;zb=56;z=120;u=528;}
	if(age==12 && sex==1 && act==4) {k=3400;b=96;zb=53;z=113;u=499;}
	if(age==10 && sex==1 && act==5) {k=4200;b=117;zb=64;z=154;u=586;}
	if(age==11 && sex==1 && act==5) {k=3950;b=111;zb=61;z=144;u=550;}
	if(age==12 && sex==1 && act==5) {k=3750;b=104;zb=57;z=137;u=524;}

	if(age==10 && sex==0 && act==1) {k=2000;b=61;zb=34;z=67;u=289;}
	if(age==11 && sex==0 && act==1) {k=1900;b=59;zb=33;z=63;u=274;}
	if(age==12 && sex==0 && act==1) {k=1800;b=58;zb=32;z=60;u=257;}
	if(age==10 && sex==0 && act==2) {k=2200;b=66;zb=36;z=73;u=318;}
	if(age==11 && sex==0 && act==2) {k=2150;b=65;zb=36;z=72;u=311;}
	if(age==12 && sex==0 && act==2) {k=2100;b=63;zb=35;z=70;u=305;}
	if(age==10 && sex==0 && act==3) {k=2600;b=76;zb=42;z=87;u=378;}
	if(age==11 && sex==0 && act==3) {k=2550;b=74;zb=41;z=85;u=372;}
	if(age==12 && sex==0 && act==3) {k=2500;b=72;zb=40;z=83;u=366;}
	if(age==10 && sex==0 && act==4) {k=3050;b=87;zb=48;z=102;u=452;}
	if(age==11 && sex==0 && act==4) {k=2950;b=84;zb=46;z=98;u=432;}
	if(age==12 && sex==0 && act==4) {k=2850;b=82;zb=45;z=95;u=417;}

	if(age==13 && sex==1) {k=2300;b=68;zb=37;z=77;u=335;}
	if(age==14 && sex==1) {k=1950;b=61;zb=33;z=65;u=280;}
	if(age==13 && sex==0) {k=1975;b=61;zb=33;z=66;u=284;}
	if(age==14 && sex==0) {k=1700;b=55;zb=30;z=57;u=242;}


	if(w==1) {  k=2900; b=100; zb=60;z=70;u=305;}
	if(w==2 || w==3) {  k=3200; b=112; zb=62; z=70;u=305;}

	//$('#result').html('');

	if(!isNaN(k)) {

		//$("#result").html(age+'--'+weight+'--'+w+'--'+act+'--'+sex);

		// $("#result").html('<table id="ipoteka">	<thead>		<th>Рекомендуемое суточное количество</th>	<th>&nbsp;</th>	</thead>	<tbody >		<tr>	<td>Калории, ккал</td>			<td>'+Math.round(k*100)/100+'</td>	</tr>		<tr>			<td>Белки, г</td>			<td>'+Math.round(b*100)/100+'</td>		</tr>		<tr>		<td>в т.ч. животные белки, г</td>			<td>'+Math.round(zb*100)/100+'</td>		</tr>		<tr>			<td>Жиры, г</td>			<td>'+Math.round(z*100)/100+'</td>		</tr>		<tr>			<td>Углеводы, г</td>			<td>'+Math.round(u*100)/100+'</td>		</tr>	</tbody></table>');

		function animation() {

			calories = Math.round(k*100)/100;
			Get('calories').innerHTML = calories;

			protein = Math.round(b*100)/100;
			Get('protein').innerHTML = protein;

			animalProtein = Math.round(zb*100)/100;
			Get('animal-protein').innerHTML = animalProtein;

			fats = Math.round(z*100)/100;
			Get('fats').innerHTML = fats;

			carbohydrates = Math.round(u*100)/100;
			Get('carbohydrates').innerHTML = carbohydrates;

		}

		setTimeout(animation, 200);

	}

}

// function CalculatorCalorieNeeds() {
// 	$("select[name='age']").change(function(){recalc();});
// 	$("input[name='sex']").change(function(){recalc();});
// 	$("select[name='w']").change(function(){recalc();});
// 	$("input[id='weight']").keyup(function(){recalc();});
// 	$("select[name='act']").change(function(){recalc();});
// 	$("input[id='age']").select().focus();
// }
