// FUNGSI UNTUK MENGGANTI NAVBAR PAGE
function openPage(jenisHalaman,element,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = ""; 
  }
  document.getElementById(jenisHalaman).style.display = "block";
  element.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// ALERT UNTUK BUTTON DUMMY
function tekanNih(){
    alert("munculkan form respon kerja yang berisi laporan permintaan, pilihan nama penerima, waktu tindak lanjutnya, estimasi, jawaban admin, dropdown status: selesai, diproses, antri, segera & ditunda");
  }

function tekanNih2(){
    alert("munculkan form permintaan berisi divisi yang dituju dan list permintaan");
  }

function tekanNih3(){
    alert("munculkan laporan penerima, waktu permintaan, waktu tindak lanjut, estimasi, deskripsi permintaan & jawaban admin");
  }


