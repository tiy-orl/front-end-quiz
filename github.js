let usernames = ["wjwjr", "conshus", "ddsheard", "chrislebbano", "tyjdavis", "jcr08", "filusmarvin", "ochanya"];
let githubList = document.querySelector("#githubAvatars");
function displayAvatars (object){
  //console.log(object.login)
  console.log(object.avatar_url)
  let avatar = document.createElement("li");
  avatar.innerHTML = "<img src='"+object.avatar_url+"' width='25vw'><br>"+object.login;
  //avatar.src = object.avatar_url;
  githubList.appendChild(avatar);

}
for (i=0; i<usernames.length;i++){
  fetch("https://api.github.com/users/"+usernames[i])
  .then(object => object.json())
  .then(displayAvatars)
}
