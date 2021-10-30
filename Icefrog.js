const nothing = 'https://media.discordapp.net/attachments/903063371425906708/904087321002008616/unknown.png_1.png';


var blookFunction = () => {
    const name = (prompt(`What do you want the blook name to be?`))
    const url = (prompt(`What do you want your blook to look like(URL only)`))
    const quantity = Number(prompt(`What quanity(number) of the blook do you want?`));
    const sellprice = (prompt(`What Number do you want the sell price to be?`));
    const rarity = (prompt(`What quanity(number) of the blook do you want?`));
    const color = (prompt(`What color do you want the rarity to be(Dont include the hashtag)`));
    
    document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = blook;
    document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = `Sell Price: ${sellprice}`;
    document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = `Quantity: ${quantity}`;
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = rarity;
    document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = `color: #${color};`;
    document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = blookname;
}
blookFunction();