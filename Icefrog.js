const blook = 'https://media.discordapp.net/attachments/903063371425906708/904087321002008616/unknown.png_1.png';
const blookname = 'Ice Frog';
var blookFunction = () => {
    document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = blook;
    document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = 'Sell Price: 300';
    document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = 'Quantity: 1';
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = 'Chroma';
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = 'color: #5AC9F9;';
    document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = blookname;
}
blookFunction();