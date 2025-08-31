let container = document.getElementById("tampat");

let input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "masukan angka";
container.appendChild(input1);

let input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "masukan angka";
container.appendChild(input2);

function hitung() {
  let a = parseFloat(input1.value);
  let b = parseFloat(input2.value);
  let op = document.getElementById("operasi").value;
  let hasil;

  if (op === "+") {
    hasil = a + b;
  } else if (op === "-") {
    hasil = a - b;
  } else if (op === "*") {
    hasil = a * b;
  } else if (op === "/") {
    hasil = b !== 0 ? a / b : "Tidak bisa dibagi 0";
  }
  document.getElementById("hasil").textContent = hasil;
}
