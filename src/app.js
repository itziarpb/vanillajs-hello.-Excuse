/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let whatDid = ["eat", "pissed", "crushed", "broked"];
  let what = ["my homeworks", "the TV", "my stuff"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch"
  ];
  let num1 = Math.floor(who.length * Math.random());
  let num2 = Math.floor(whatDid.length * Math.random());
  let num3 = Math.floor(what.length * Math.random());
  let num4 = Math.floor(when.length * Math.random());
  return who[num1] + " " + whatDid[num2] + " " + what[num3] + " " + when[num4];
};
