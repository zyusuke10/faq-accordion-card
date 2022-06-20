//arrows

const teamArrow = document.querySelector(".team-arrow");
const fileArrow = document.querySelector(".file-arrow");
const passwordArrow = document.querySelector(".password-arrow");
const subscriptionArrow = document.querySelector(".subscription-arrow");
const additionalArrow = document.querySelector(".additional-arrow");

//answers

const teamAns = document.querySelector(".team-ans");
const fileAns = document.querySelector(".file-ans");
const passwordAns = document.querySelector(".password-ans");
const subscriptionAns = document.querySelector(".subscription-ans");
const additionalAns = document.querySelector(".additional-ans");

//titles

const teamTitle = document.querySelector(".title-p-team");
const fileTitle = document.querySelector(".title-p-file");
const passTitle = document.querySelector(".title-p-pass");
const subTitle = document.querySelector(".title-p-sub");
const addTitle = document.querySelector(".title-p-add");

arrowList = [
  teamArrow,
  fileArrow,
  passwordArrow,
  subscriptionArrow,
  additionalArrow,
];
answerList = [teamAns, fileAns, passwordAns, subscriptionAns, additionalAns];
titleList = [teamTitle, fileTitle, passTitle, subTitle, addTitle];

const titles = document.querySelectorAll(".title-p");

for (let i = 0; i < arrowList.length; i++) {
  arrowList[i].addEventListener("click", () => {
    answerList[i].classList.toggle("active");
    arrowList[i].classList.toggle("rotate");
    titleList[i].classList.toggle("bold");
  });
}
