var randomNumber, randomNumber_2;
var img_select, img_select_2;

main();


function main (){
  randomNumber = Math.random();
  randomNumber_2 = Math.random();

  //GeneRating Random Number for ImgSelect 1//
  img_select = (randomNumber * 6) + 1;
  img_select = Math.floor(img_select);

  //GeneRating Random Number for ImgSelect 2//
  img_select_2 = (randomNumber_2 * 6) + 1;
  img_select_2 = Math.floor(img_select_2);

  //CHecking if the Values are Random//
  console.log(img_select);
  console.log(img_select_2);

  //Function for Changing the Images//
  img_1_sel (img_select);
  img_2_sel (img_select_2);
  win_lose_draw (img_select, img_select_2);

}

//Img1 Random Generator//
function img_1_sel (select){
  if (select == 1){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.src = ("images/dice1.png");
  }
  else if (select == 2){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.src = ("images/dice2.png");
  }
  else if (select == 3){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.src = ("images/dice3.png");
  }
  else if (select == 4){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.src = ("images/dice4.png");
  }
  else if (select == 5){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.src = ("images/dice5.png");
  }
  else if (select == 6){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.src = ("images/dice6.png");
  }
  else{
    return "0";
  }

}

//Img2 Random Generator//
function img_2_sel (select){
  if (select == 1){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.src = ("images/dice1.png");
  }
  else if (select == 2){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.src = ("images/dice2.png");
  }
  else if (select == 3){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.src = ("images/dice3.png");
  }
  else if (select == 4){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.src = ("images/dice4.png");
  }
  else if (select == 5){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.src = ("images/dice5.png");
  }
  else if (select == 6){
    document.lastElementChild.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.src = ("images/dice6.png");
  }
  else{
    return "0";
  }

}

//Winner, Draw, Lose Determine//
function win_lose_draw(val_1, val_2){
  if (val_1 > val_2){
    document.querySelector("h1").classList. add ("a_color");
    document.querySelector("h1").innerText = ("Player 1 Wins");
  }
  else if (val_1 < val_2){
    document.querySelector("h1").classList. add ("a_color");
    document.querySelector("h1").innerText = ("Player 2 Wins");
  }
  else if (val_1 == val_2){
    document.querySelector("h1").style.color = ("yellow");
    document.querySelector("h1").innerText = ("Draw");
    //document.querySelector("p.one").style.color = ("blue");
  }
  else{
    return "0";
  }
}
