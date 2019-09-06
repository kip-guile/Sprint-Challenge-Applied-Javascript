// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(response => { // response is what the promise resolved to (what it looks is up to axios)
//         // debugger
//         console.log(response.data);
//         console.log(tabDivCreator(response.data));
//     })
//     .catch(error => { // error is what the promise rejected to (what it looks like depends on axios)
//       document.body.innerText = error.message;
//     });

//     const topics = document.querySelector('.topics');

//     function tabDivCreator (titleObject) {
//         const topicObject = titleObject;
//         console.log(topicObject);
//         const topicArray = topicObject.topics;
//         console.log(topicArray);

//         topicArray.forEach(topic => {
//             const tabDiv = document.createElement('div');
//             tabDiv.classList.add('tab');
//             tabDiv.textContent = topic;
//             return tabDiv;
//         });   
//         return tabDiv;
//     }
