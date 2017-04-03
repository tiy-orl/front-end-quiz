/*

Create a github.js with an array that contains usernames for everyone in the
class. Use that array to make calls to the GitHub API to retrieve avatars
for everyone and display them on the page in a list.

*/

!function(){

  let classList = [
    "conshus",
    "wjwjr",
    "ddsheard",
    "chrislebbano",
    "tyjdavis",
    "jcr08",
    "filusmarvin",
    "ochanya"];

    let url = 'https://api.github.com';

    const getData = (url, path, user) => {
      return fetch(`${url}${path}${user}`);
    }

    let ul = document.createElement('ul');
    let picturesSection = document.querySelector('.github');
    picturesSection.appendChild(ul);

    let images = classList.map( username => {
        getData(url,'/users/', username)
          .then(res => res.json())
          .then(object => object.avatar_url)
          .then(url => {

            let li = document.createElement('li');
            let image = document.createElement('img');
            image.src = url;
            image.style.width = '250px';
            image.style.height = '250px';
            li.appendChild(image);
            ul.appendChild(li);
          });
    });
}();
