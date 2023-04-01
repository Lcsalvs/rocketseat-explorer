import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  tree,
  cloud,
  coffee,
  fire
} from './elements.js'

export default function Events({controls, timer, sound}) {

  function changeSelectedCardStyle(selectedCard) {
    const cards = [tree, cloud, coffee, fire];
    cards.forEach((element) => {
      if (element === selectedCard) {
        element.classList.toggle("selected");
      } else {
        element.classList.remove("selected");
      }
    });
  }
  
  tree.addEventListener("click", function () {
    changeSelectedCardStyle(tree);
    sound.selectMusic("forestSound");
  });
  
  cloud.addEventListener("click", function () {
    changeSelectedCardStyle(cloud);
    sound.selectMusic("rainSound");
  });
  
  coffee.addEventListener("click", function () {
    changeSelectedCardStyle(coffee);
    sound.selectMusic("cafeteriaSound");
  });
  
  fire.addEventListener("click", function () {
    changeSelectedCardStyle(fire);
    sound.selectMusic("fireSound");
  });
  
  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });
  
  buttonStop.addEventListener("click", function () {
    timer.reset();
    controls.reset();
    sound.pressButton();
  });
  
  buttonPlus.addEventListener("click", function () {
    sound.pressButton();
    controls.addFiveMinutes()
  });
  
  buttonMinus.addEventListener("click", function () {
    sound.pressButton();
    controls.removeFiveMinutes();
  });
}