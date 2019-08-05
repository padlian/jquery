$(document).ready(function() {
    // for (var i = 1; i <= 3; i++) {
    // 	$('#target').append(i);
    // }
});

 // if (i % 2 === 0) { /* we are even */ }
 //   else { /* we are odd */ }

$(".loop").keyup(function(){
	var awal = parseInt($('#awal').val());
	var akhir = parseInt($('#akhir').val());

	$('#target').html('');

	for (var i = awal; i <= akhir; i++) {
		var isi = i+"<br/>";
    	$('#target').append(isi);
    }
});

$("#tbl_genap").click(function(){
	var awal = parseInt($('#awal').val());
	var akhir = parseInt($('#akhir').val());

	$('#target').html('');

	for (var i = awal; i <= akhir; i++) {
		if (i % 2 === 0){
			var isi = i+"<br/>";
	    	$('#target').append(isi);
		}
    }
});

$("#tbl_ganjil").click(function(){
	var awal = parseInt($('#awal').val());
	var akhir = parseInt($('#akhir').val());

	$('#target').html('');

	for (var i = awal; i <= akhir; i++) {
		if (i % 2 === 1){
			var isi = i+"<br/>";
	    	$('#target').append(isi);
		}
    }
});