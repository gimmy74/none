
var blookFunction = () => {
    const tokens = (prompt(`How many tokens do you want?`))
    document.getElementsByClassName('styles__tokenBalanceContainer___2eYY7-camelCase')[0].innerText = `Token: ${tokens}`;
} 
try { 
    blookFunction();
    } catch (error) {
        alert(error)
    }
