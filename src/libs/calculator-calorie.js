function KcalCalc(kcalform) {

	if ( kcalform.times.value == '' ) {
		alert('Укажите продолжительность активности');
		return false;
	}

	if ( kcalform.ves.value == '' ) {
		alert('Укажите Ваш вес');
		return false;
	}

	var kcal = Math.round(kcalform.act.value*kcalform.times.value*kcalform.ves.value/60);
			kcalform.kcal.value = kcal;

	return false;
}
