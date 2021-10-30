const blook = 'https://media.discordapp.net/attachments/903063371425906708/903842271089279057/unknown.png';
const blookname = 'Troll';
var blookFunction = () => {
    document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = blook;
    document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = 'Sell Price: 1000000';
    document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = 'Quantitiy: 2346';
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = 'Troll';
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = 'color: #0000ff;';
    document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = blookname;
}
blookFunction();