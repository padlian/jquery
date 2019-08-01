$('#opt').keyup(function(){
	var opt = $('#opt').val();

	if(opt == '+'){
		alert('ini tambah');
	}
	else if(opt == '-'){
		alert('ini kurang');
	}
	else if(opt == '8'){
		alert('ini delapan');
	}
	else{
		alert('operator tidak dikenal')
	}
});