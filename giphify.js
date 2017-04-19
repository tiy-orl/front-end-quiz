//Get a random Giphy for the results
function getGiphy(searchFor){
 fetch("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+searchFor)
   .then(response => response.json())
   .then(object => {
     document.getElementById("randomGiph").src=object.data.image_url;
   });
}

// getGiphy(englishMath('one plus one'));
