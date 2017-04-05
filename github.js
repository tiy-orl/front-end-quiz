
let usernames = ["ochanya", "conshus", "bgates", "jcr08", "chrisLebbano", "wjwjr", "tyjdavis", "filusmarvin", "ddsheard"];

function convertToJson (response) {
  return response.json();
}

function logJson (json) {
  console.log(json);
  let avatarUrl = json.map( object => object.avatar_url)
  let test = document.querySelectorAll('li img')
  for (i = 0; i <test.length; i++){
    test[i].src = avatarUrl[i];
  }
}

function firstPromise (username) {
  return fetch("https://api.github.com/users/" + username)
  .then(convertToJson)

}

let avatarPromises = usernames.map(firstPromise)
console.log(avatarPromises);


Promise.all(avatarPromises).then(logJson);
