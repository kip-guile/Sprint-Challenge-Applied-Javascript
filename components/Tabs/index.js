// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => { // response is what the promise resolved to (what it looks is up to axios)
        for (let topic in response.data){
            response.data[topic].forEach(element => {
                topics.appendChild(tabDivCreator(element));
            });
        } 
    })
    .catch(error => { // error is what the promise rejected to (what it looks like depends on axios)
      document.body.innerText = error.message;
    });

const topics = document.querySelector('.topics');

function tabDivCreator (subject) {
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = subject;
        
    return tabDiv;
}
