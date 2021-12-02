const cenaBTM = document.getElementsByClassName("product-card__prices");
const cenaMA = document.getElementsByClassName("prices text-right");
let niz = [];
let cena = "";
let cenaN = 0;
if (cenaBTM.length > 1) {
  for (let i = 0; i < cenaBTM.length; i += 3) {
    cena = cenaBTM[i].innerText
      .substring(0, cenaBTM[i].innerText.length - 22)
      .split(",")
      .join("");
    cenaN = Math.ceil((Number(cena) * 1.35) / 100) * 100;
    cenaBTM[i].innerHTML = cenaN;
    cenaBTM[i].style.fontWeight = "bold";
  }
} else {
  for (let i = 0; i < cenaMA.length; i++) {
    niz = cenaMA[i].innerText.split("€");
    cena = niz[niz.length - 1].split(",").join("");
    cenaN = (Number(cena) + 2000) / 100;
    cenaMA[i].innerHTML = cenaN;
    cenaMA[i].style.fontSize = "20px";
    cenaMA[i].style.fontWeight = "bolder";
  }
}
