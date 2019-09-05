/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

function GithubCard(
  imgSrc,
  name,
  username,
  location,
  url,
  followerCount,
  followingCount,
  userBio
) {
  //Create Element
  newCard = document.createElement("div");
  newImg = document.createElement("img");
  newDiv = document.createElement("div");
  newH3 = document.createElement("h3");
  pUser = document.createElement("p");
  pLocation = document.createElement("p");
  pProfile = document.createElement("p");
  pFollowers = document.createElement("p");
  pFollowing = document.createElement("p");
  pBio = document.createElement("p");

  // Class
  newCard.classList.add("card");
  newDiv.classList.add("card-info");
  newH3.classList.add("name");
  pUser.classList.add("username");

  // Append
  newCard.appendChild(newImg);
  newCard.appendChild(newDiv);
  newDiv.appendChild(newH3);
  newDiv.appendChild(pUser);
  newDiv.appendChild(pLocation);
  newDiv.appendChild(pProfile);
  newDiv.appendChild(pFollowers);
  newDiv.appendChild(pFollowing);
  newDiv.appendChild(pBio);

  // Content
  newImg.src = imgSrc;
  newH3.textContent = `Name: ${name}`;
  pUser.textContent = username;
  pLocation.textContent = `Location: ${location}`;
  pProfile.textContent = `Profile: ${url}`;
  pFollowers.textContent = `Followers: ${followerCount}`;
  pFollowing.textContent = `Following: ${followingCount}`;
  pBio.textContent = `Bio: ${userBio}`;

  return newCard;
}

axios.get("https://api.github.com/users/darrenjcarrillo").then(response => {
  // console.log(response);
  const info = response.data;
  const newGithubCard = GithubCard(
    info.avatar_url,
    info.name,
    info.login,
    info.location,
    info.html_url,
    info.followers,
    info.following,
    info.bio
  );

  document.querySelector(".cards").appendChild(newGithubCard);
});

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [
//   "tetondan",
//   "dustinmyers",
//   "justsml",
//   "luishrd",
//   "bigknell"
// ];

axios
  .get("https://api.github.com/users/darrenjcarrillo/followers")
  .then(response => {
    console.log(response);
    response.data.forEach(item => {
      GithubCard(item);
      const followersGithub = GithubCard(
        item.avatar_url,
        item.name,
        item.login,
        item.location,
        item.html_url,
        item.followers_url,
        item.following,
        item.bio
      );
      document.querySelector(".cards").appendChild(followersGithub);
    });
  });

// .catch(error => {
//   console.log('The Data was not returned', error);
// })

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
