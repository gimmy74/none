const nothing = document.getElementsByClassName('styles__miniBlook___3eAjl-camelCase');
const nothing2 = document.getElementsByClassName('styles__blookContainer___GKC0D-camelCase')
const nothing3 = document.getElementsByClassName('styles__box___2pZ5d-camelCase')

const boxname = (prompt(`What do you want the box name do be?`));
const color = (prompt(`What color do you want the box to be?`));
const tokencost = Number(prompt(`How much do you want the box to be?`));

var blookFunction = () => {
 

    document.getElementsByClassName('styles__boxHeader___UoHkq-camelCase')[0].innerText = 'Red box';
    document.getElementsByClassName('styles__mysteryBoxIcon___18nWF-camelCase')[0].style = `color: #0000ff;`;
    document.getElementsByClassName('styles__boxTokenText___NdiWk-camelCase')[0].innerText = `25`;        
    
    
}
try { 
    blookFunction();
    } catch (error) {
        alert(error)
    }