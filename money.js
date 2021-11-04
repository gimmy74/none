
var Tokens = () => {
    const tokens = (prompt(`How many tokens do you want?`))
    document.getElementsByClassName('styles__tokenBalanceText___2eYY7-camelCase')[0].innerText = `${tokens}`;
} 
try { 
    Tokens();
    } catch (error) {
        alert(error)
    }
