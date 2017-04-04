
let userNames = ["conshus", "wjwjr", "ddsheard", "chrislebbano", "tyjdavis", "jcr08", "filusmarvin", "ochanya"]


//
// fetch('https://api.github.com/users/${username}').then(promise => promise.json())
// .then( object => console.log(object.avatar_url));



// let images = userNames.map( username => {
//   fetch(`https://api.github.com/users/${username}`).then(promise => promise.json())
//   .then( object => object.avatar_url).then(url => {
//     let newImg = document.createElement('img');
//     let pics = document.querySelector('.pics')
//     newImg.src = url;
//     pics.appendChild(newImg)
//   });
//
// });







// promise => json(object) =>




userNames.map( username => {
  return  fetch(`https://api.github.com/users/${username}`)
  .then( promise => promise.json())
  .then(obj => console.log(obj.avatar_url));
    });
