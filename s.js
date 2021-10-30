const blook = 'https://media.discordapp.net/attachments/847981735021903874/903813055916425316/ghost_1.png.png';
const blookname = 'Demonic Ghost';
var blookFunction = () => {
    document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = blook;
    document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = 'Sell Price: 50000';
    document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = 'Quantitiy: 5';
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = 'Debug';
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = 'color: #000001;';
    document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = blookname;
}
blookFunction();