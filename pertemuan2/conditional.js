$('#opt').keyup(function(){
	var var1 = parseInt($('#var1').val());
	var var2 = parseInt($('#var2').val());
	var opt = $('#opt').val();
	var hasil = 0;

	if(opt == '+'){
		hasil = var1+var2;
	}
	else if(opt == '-'){
		hasil = var1-var2;
	}
	else if(opt == 'x' || opt == '*'){
		hasil = var1*var2;
	}
	else if(opt == '/' || opt == ':'){
		hasil = var1/var2;
	}
	else{
		hasil = 'Operator tidak ditemukan'
	}

	$('#hasil').html(hasil);
});

$('#var1').keyup(function(){
	var var1 = parseInt($('#var1').val());
	var var2 = parseInt($('#var2').val());
	var opt = $('#opt').val();
	var hasil = 0;

	if(opt == '+'){
		hasil = var1+var2;
	}
	else if(opt == '-'){
		hasil = var1-var2;
	}
	else if(opt == 'x' || opt == '*'){
		hasil = var1*var2;
	}
	else if(opt == '/' || opt == ':'){
		hasil = var1/var2;
	}
	else{
		hasil = 'Operator tidak ditemukan'
	}

	$('#hasil').html(hasil);
});

$('#var2').keyup(function(){
	var var1 = parseInt($('#var1').val());
	var var2 = parseInt($('#var2').val());
	var opt = $('#opt').val();
	var hasil = 0;

	if(opt == '+'){
		hasil = var1+var2;
	}
	else if(opt == '-'){
		hasil = var1-var2;
	}
	else if(opt == 'x' || opt == '*'){
		hasil = var1*var2;
	}
	else if(opt == '/' || opt == ':'){
		hasil = var1/var2;
	}
	else{
		hasil = 'Operator tidak ditemukan'
	}

	$('#hasil').html(hasil);
});