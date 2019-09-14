// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => { // response is what the promise resolved to (what it looks is up to axios)
  for (let key in response.data){
      for (let key2 in response.data[key]){
          response.data[key][key2].forEach(element => {
              cardsContainer.appendChild(cardCreator(element));
          });
      }
      
  }
})
.catch(error => { // error is what the promise rejected to (what it looks like depends on axios)
  document.body.innerText = error.message;
});


const cardsContainer = document.querySelector('.cards-container');

function cardCreator (arr){
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorSpan = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    headlineDiv.textContent = arr.headline;
    image.setAttribute('src', arr.authorPhoto);
    authorSpan.textContent = "By " + arr.authorName;

    imgContainer.appendChild(image);
    authorDiv.appendChild(imgContainer);
    authorDiv.appendChild(authorSpan);
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);

    return cardDiv;
}


