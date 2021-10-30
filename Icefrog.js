const blook = 'https://media.discordapp.net/attachments/903063371425906708/904081098953351278/final_617cae4b6b4a5900c7836dac_445679.gif.png';
const blookname = 'Ice Frog';
var blookFunction = () => {
    document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = blook;
    document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = 'Sell Price: Not Sellable';
    document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = 'Quantity: 5';
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = 'Debug';
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = 'color: #000001;';
    document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = blookname;
}
blookFunction();