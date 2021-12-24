const cmd = prompt('What would you like to run?')
if(cmd == 'auto') {
    setInterval(() => { 
      Game.shimmers.forEach((_, i) => Game.shimmers[i].pop()) 
      }, 1)
  
    setInterval(() => {
       Game.ClickCookie(); 
       Game.lastClick=0 
       }, 1)

}
