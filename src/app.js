/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["el", "nuestro"];
  let adj = ["hermoso", "grande", "rápido"];
  let noun = ["leon", "ciervo", "avión"];

  for (let pron of pronoun) {
    for (let ad of adj) {
      for (let no of noun) {
        console.log(`${pron}${ad}${no}.com`);
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
