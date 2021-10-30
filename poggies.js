const blook = 'https://media.discordapp.net/attachments/903063371425906708/903842271089279057/unknown.png';
const blookname = 'Troll';
const kek = 'https://media.discordapp.net/attachments/903063371425906708/903845025027358720/kekw-emote-twitch.jpg.png'
var blookFunction = () => {
    document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = blook;
    document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = 'Sell Price: Not Sellable';
    document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = 'Quantitiy: 2346';
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = kek + 'Kek';
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = 'color: #0000ff;';
    document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = blookname;
}
blookFunction();