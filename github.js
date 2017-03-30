let classGitHub = ['conshus', 'tyjdavis', 'chrislebbano', 'filusmarvin', 'wjwjr', 'ddsheard', 'ochanya', 'jcr08'];

// function specificNames(){
//   for (let i = 0; i < classGitHub; i++);
//   return classmate = [i];
// }
//
//
// function convertToJson(response){
//   return response.json();
// }
//
// let firstPromise =
// fetch(`https://api.github.com/users/${specificNames}/avatar_url`);
// console.log('first promise', firstPromise);
//
// let secondPromise =
// firstPromise.then(convertToJson);
// console.log('second promise', secondPromise);

function inputAvatars(object){
  let avatar = document.querySelector(".avatars");
  let newLi = document.createElement("li");
  avatar.appendChild(newLi);
  newLi.innerHTML = '<img src="' + object.avatar_url + '">';
}



for(let i = 0; i < classGitHub.length; i++){
  fetch (`https://api.github.com/users/${classGitHub[i]}`)
      .then(object => object.json())
      .then(inputAvatars);
}
