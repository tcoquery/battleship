(()=>{"use strict";const e=document.getElementById("start");let t="";e.addEventListener("click",(()=>{const e=document.querySelector(".game-info");e.textContent="Player, place your ships";const n=document.createElement("button"),c=document.createElement("button");n.textContent="Vertical",c.textContent="Horizontal",e.appendChild(n),e.appendChild(c),n.addEventListener("click",(()=>{t="vert",console.log(t)})),c.addEventListener("click",(()=>{t="hori",console.log(t)}))}));const n=(()=>{const e=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],t=e=>"S"==e;return{grid:e,placeShip:function(t,n,c){if("hori"==c){e[t]="S";for(let c=1;c<n;c++)e[t+c]="S"}else if("vert"==c){e[t]="S";for(let c=10;c<10*n;c+=10)e[t+c]="S"}},receiveAttack:function(t,n){e[t]?n.hit():e[t]="O"},shipsSunk:function(){e.some(t)||console.log("game over")}}})();!function(){for(let e=0;e<100;e++){const t=document.getElementById("computer-grid"),n=document.createElement("div");n.classList.add("grid-cell"),n.id=e,t.appendChild(n)}}(),function(){for(let e=0;e<100;e++){const t=document.getElementById("player-grid"),n=document.createElement("div");n.classList.add("grid-cell"),n.id=e,t.appendChild(n)}}(),document.querySelectorAll(".grid-cell").forEach((e=>{e.addEventListener("click",(()=>{n.placeShip(parseInt(e.id),5,t),function(e){for(let t=0;t<e.length;t++)if("S"==e[t]){const e=document.getElementById(t);e.classList.remove(".grid-cell"),e.classList.add("grid-cell-with-ship")}}(n.grid)}))}))})();