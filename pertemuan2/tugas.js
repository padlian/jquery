$("#var1").keyup(function(){
	var var1 = $('#var1').val();
	var var2 = $('#var2').val();
	var hasil = var1*var2;
	$("#target").html(hasil);
});

$("#var2").keyup(function(){
	var var1 = $('#var1').val();
	var var2 = $('#var2').val();
	var hasil = var1*var2;
	$("#target").html(hasil);
});