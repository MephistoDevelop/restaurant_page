!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(){alert("Haz cambiado y clickeado  la tab")}document.body.appendChild(function(){const e=document.createElement("div");return e.className="main-container",e.style.display="flex",e.style.color="white",e.style.height="100vh",e.style.display="flex",e.style.margin="10px",e.style.padding="10px",e.style.backgroundColor="red",e.style.flexDirection="column",e}()),function(){const e=document.createElement("div");e.className="tabscontainer",e.style.display="flex",e.style.width="100%",e.style.backgroundColor="blue",document.querySelector(".main-container").appendChild(e),["Home","Menu","Contact"].forEach(t=>{const o=document.createElement("button");o.addEventListener("click",n),o.textContent=t,o.classList.add(t.toLowerCase()),o.style.width="33.5%",o.style.height="100%",o.style.border="none",o.style.fontSize="21px",o.style.padding="10px 0",e.appendChild(o)})}()}]);