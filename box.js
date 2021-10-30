const nothing = document.getElementsByClassName('styles__miniBlook___3eAjl-camelCase');
const nothing2 = document.getElementsByClassName('styles__blookContainer___GKC0D-camelCase')
const nothing3 = document.getElementsByClassName('styles__box___2pZ5d-camelCase')
var blookFunction = () => {
    const boxname = (prompt(`What do you want the box name do be?`))
    const color = (prompt(`What color do you want the box to be?`))
const tokencost = (prompt(`How much do you want the box to be?`))


    document.getElementsByClassName('styles__box___UoHkq-camelCase')[0].innerText = boxname;
    document.getElementsByClassName('styles__mysteryBoxContainer___18nWF-camelCase')[0].style = `color: #${color};`;
    document.getElementsByClassName('styles__boxTokenContainer___NdiWk-camelCase')[0].innerText = tokencost;        
    
    
}
try { 
    blookFunction();
    } catch (error) {
        alert(error)
    }