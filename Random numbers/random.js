function shuffle (array){
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex){
    randomIndex = Math.floor (Math.random () * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
const genArray = amount => Array(amount).fill().map((v, i) => i + 1)
let arr = genArray(90);
arr = shuffle (arr);

  var output = (arr.slice(60));
  document.getElementById("extend").innerHTML = output[0];
  document.getElementById("extend1").innerHTML = output[1];
  document.getElementById("extend2").innerHTML = output[2];
  document.getElementById("extend3").innerHTML = output[3];
  document.getElementById("extend4").innerHTML = output[4];

  document.getElementById("extend5").innerHTML = output[5];
  document.getElementById("extend6").innerHTML = output[6];
  document.getElementById("extend7").innerHTML = output[7];
  document.getElementById("extend8").innerHTML = output[8];
  document.getElementById("extend9").innerHTML = output[9];

  document.getElementById("extend10").innerHTML = output[10];
  document.getElementById("extend11").innerHTML = output[11];
  document.getElementById("extend12").innerHTML = output[12];
  document.getElementById("extend13").innerHTML = output[13];
  document.getElementById("extend14").innerHTML = output[14];

  document.getElementById("extend15").innerHTML = output[15];
  document.getElementById("extend16").innerHTML = output[16];
  document.getElementById("extend17").innerHTML = output[17];
  document.getElementById("extend18").innerHTML = output[18];
  document.getElementById("extend19").innerHTML = output[19];

  document.getElementById("extend20").innerHTML = output[20];
  document.getElementById("extend21").innerHTML = output[21];
  document.getElementById("extend22").innerHTML = output[22];
  document.getElementById("extend23").innerHTML = output[23];
  document.getElementById("extend24").innerHTML = output[24];

  document.getElementById("extend25").innerHTML = output[25];
  document.getElementById("extend26").innerHTML = output[26];
  document.getElementById("extend27").innerHTML = output[27];
  document.getElementById("extend28").innerHTML = output[28];
  document.getElementById("extend29").innerHTML = output[29];
 


function refreshPage() {
  window.parent.location = window.parent.href;
}

 