'use strict';

document.addEventListener("DOMContentLoaded", e => {
  function $(selector) {
    return document.querySelector(selector);
  }
  
  const inputBYN = $("#byn"),
        inputUSD = $("#usd");
  
  inputBYN.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open(
      "GET", 
      "js/current.json"
    );
    request.setRequestHeader(
      "Content-type", 
      "application/json; charset=utf-8"
    );

    request.send();
   
    request.addEventListener("load", () => {
      if (request.status === 200){
        const data = JSON.parse(request.response);
        inputUSD.value = (+inputBYN.value / data.current.usd).toFixed(3);
      } else {
        inputUSD.value = "Error!";
      }
    });

  });




})

