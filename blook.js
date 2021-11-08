var blookFunction = () => {
    const name = (prompt(`What do you want the blook name to be?`))
    const url = (prompt(`What do you want your blook to look like(URL only)`))
    
    
    
    const quantity = (prompt(`What quanity(number) of the blook do you want?`));
    const sellprice = (prompt(`What Number do you want the sell price to be?`));
    const rarity = (prompt(`What Rarity do you want the blook to be?`));
    const color = (prompt(`What color do you want the rarity to be(Dont include the hashtag)`));
    
    var o = document.getElementsByClassName("styles__blookArrayContainer___9Ae0L-camelCase")[0];
o.innerHTML = "";
    t = `<button onclick="${`() => \n        pass\n        document.getElementsByClassName('styles__blook___2Yq1S-camelCase')[0].src = '${name} + ';\n        document.getElementsByClassName('styles__priceContainer___1pnjg-camelCase')[0].children[0].innerText = 'Sell Price: ${sellprice}';\n        document.getElementsByClassName('styles__quantityText___JDfUO-camelCase')[0].innerText = 'Quantity: ${quantity}';\n        document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].innerText = '${rarity}';\n        document.getElementsByClassName('styles__rarityText___3sXH2-camelCase')[0].style = 'color: #${color};';\n        document.getElementsByClassName('styles__headerTextContainer___xVg-I-camelCase')[0].children[0].innerText = '${url}';\n    `}"\n role="button"tabindex="0"style="font-size: 0px; outline: none; user-select: none; margin: 5px 1vw; position: relative; border: none; backface-visibility: hidden; background-color: transparent;">\n<div class="styles__blookContainer___GKC0D-camelCase"\n style="z-index: 1; margin: 0px auto; width: 5vw; height: 5.75vw; cursor: pointer; position: relative; outline: none;">\n<img src="${name}"alt="${url} Blook"draggable="false"class="styles__blook___2Yq1S-camelCase"></div>\n</button>`;
    o.innerHTML += t
}

try { 
    blookFunction();
    } catch (error) {
        alert(error)
    }
