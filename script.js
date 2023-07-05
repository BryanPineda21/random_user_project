// The container that will contain the user cards
const  user_container = document.getElementById('user-container') 

// The Api and we will be only be fetching 10 users 
const user_api  = 'https://randomuser.me/api/?results=15'
// The Api will allow us to fetch random female users 
const female_user_api  ='https://randomuser.me/api/?gender=female'

//The Api will allow us to fetch random male users  
const male_user_api  ='https://randomuser.me/api/?gender=male'


//  This is a delete function that will allow us to remove users from the container.
function deleteChildElements(parent) {
   while (parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}


//Async Await function 
async function get_Users (){
removeUsers(get_Female_Users)
removeUsers(get_Male_Users)
// Fetching the api 
const response = await fetch(user_api);

//  awaiting the response of the Api 
const data = await response.json();

// A JSON object that we can use in order to get information about the users. 
const user = data.results

//  Iterating over each user
 for(let i = 0; i < user.length; i ++ ){

    // creating a 'div' element
    const divElement = document.createElement('div');

    // Using a tempelate literal to display the Users Info
    divElement.innerHTML = `
       <div class = "users-card">
       <h2>${user[i].name.first} ${user[i].name.last}</h2>
       <img class = "user-img" src = "${user[i].picture.large}"/>
       <h4>Gender: ${user[i].gender}</h4>
       <h4>Email: ${user[i].email}</h4>
       <h4>Age: ${user[i].dob.age}</h4>
       <h4>Cell: ${user[i].phone}</h4>
       </div>
       `;

    // Appending the template literal also known as 'divElement' into the user_container. 

    // This user_container is the main container in which holds the users cards. 
       user_container.appendChild(divElement);

       // add the class user-card to the list
       divElement.classList.add('user-card');
   }
 }


//Async Await function 
async function get_Female_Users (){

   // removes male users when getting female users 
   removeUsers(get_Male_Users);
   // Fetching the gender api 
   const response = await fetch(female_user_api);
   
   //  awaiting the response of the Api 
   const data = await response.json();
   
   // A JSON object that we can use in order to get information about the users. 
   const user = data.results

   //  Iterating over each user
    for(let i = 0; i < user.length; i ++ ){
   
       // creating a 'div' element
       const divElement = document.createElement('div');
   
       // Using a tempelate literal to display the Users Info
       divElement.innerHTML = `
          <div class = "users-card">
          <h2>${user[i].name.first} ${user[i].name.last}</h2>
          <img class = "user-img" src = "${user[i].picture.large}"/>
          <h4>Gender: ${user[i].gender}</h4>
          <h4>Email: ${user[i].email}</h4>
          <h4>Age: ${user[i].dob.age}</h4>
          <h4>Cell: ${user[i].phone}</h4>
          </div>
          `;
   
       // Appending the template literal also known as 'divElement' into the user_container. 
   
       // This user_container is the main container in which holds the users cards. 
          user_container.appendChild(divElement);
   
          // add the class user-card to the list
          divElement.classList.add('user-card');
      }
    }




    //Async Await function 
async function get_Male_Users (){

   removeUsers(get_Female_Users);

   // Fetching the gender api 
   const response = await fetch(male_user_api);
   
   //  awaiting the response of the Api 
   const data = await response.json();
   
   // A JSON object that we can use in order to get information about the users. 
   const user = data.results
   
   //  Iterating over each user
    for(let i = 0; i < user.length; i ++ ){
   
       // creating a 'div' element
       const divElement = document.createElement('div');
   
       // Using a tempelate literal to display the Users Info
       divElement.innerHTML = `
          <div class = "users-card">
          <h2>${user[i].name.first} ${user[i].name.last}</h2>
          <img class = "user-img" src = "${user[i].picture.large}"/>
          <h4>Gender: ${user[i].gender}</h4>
          <h4>Email: ${user[i].email}</h4>
          <h4>Age: ${user[i].dob.age}</h4>
          <h4>Cell: ${user[i].phone}</h4>
          </div>
          `;
   
       // Appending the template literal also known as 'divElement' into the user_container. 
   
       // This user_container is the main container in which holds the users cards. 
          user_container.appendChild(divElement);
   
          // add the class user-card to the list
          divElement.classList.add('user-card');

      }

    }




/*
Creating another function in order to delete all users
from the user_container using the delete function we created. 
*/
function removeUsers(){
 deleteChildElements(user_container);
}



// Our two buttons with Eventlisteners

// This button will allow us to get all users. 
const UsersBtn = document.getElementById('user-btn');
UsersBtn.addEventListener('click',get_Users,false);

// This button will allow us to delete all users. 
const deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click',removeUsers,false)

//This button will allow us to generate random female users
const femaleBtn = document.getElementById('female-btn');
femaleBtn.addEventListener('click',get_Female_Users,false)

//This button will allow us to generate random male users
const maleBtn = document.getElementById('male-btn');
maleBtn.addEventListener('click',get_Male_Users,false)




