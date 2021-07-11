"use strict";

const result = document.getElementById('result');
const button = document.getElementById('button');
const kujibox = ['Excellent good','Moderately Good Future', 
'Limited Good Future', 'Good Fortune in the End', 'Misfortune'];

button.addEventListener('click', ()=>{
const resultValue = Math.floor(Math.random()*kujibox.length);
result.innerHTML = kujibox[resultValue];

})