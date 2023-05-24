

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/SC2mark.jpg'){
        myImage.setAttribute('src', 'images/SC2loading.jpg');
    } else{
        myImage.setAttribute('src', 'images/SC2mark.jpg');
    }
}

let myTitle = document.querySelector('h1');
let clickCount = 0;

myTitle.onclick = function(){
    clickCount++;
    if(clickCount % 4 === 1){
        myTitle.textContent = '스타크래프트 II : 자유의 날개';
    } else if(clickCount % 4 === 2){
        myTitle.textContent = '스타크래프트 II : 군단의 심장';
    } else if(clickCount % 4 === 3){
        myTitle.textContent = '스타크래프트 II : 공허의 유산';
    } else {
        myTitle.textContent = '스타크래프트 II';
    }
}

document.querySelector('ul').onclick = function(){
    alert('프사기');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');
function setUserName() {
  let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        alert('이름을 올바르게 입력해주세요.');
        setUserName();
    } else{
  localStorage.setItem('name', myName);
  myHeading.textContent = '현재 로그인 된 유저명 : ' + myName;
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '현재 로그인 된 유저명 : ' + storedName;
}
myButton.onclick = function(){
    setUserName();
}