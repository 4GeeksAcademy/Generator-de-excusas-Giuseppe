/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generateExcuse = () => {
  let pronoun = ["A", "The"]; // Position: [0, 1] Largo: 2
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"]; // Lentgh: 6
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"]; // Lentgh: 5
  let possetion = ["homework", "toe", "car", "shoe"]; // Lentgh: 4
  let where = ["on the street", "in my house", "in my driveway"]; // Lentgh: 3

  let pronounIndex = Math.floor(Math.random() * pronoun.length); //0 1 < 2
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};

//write your code here
window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
