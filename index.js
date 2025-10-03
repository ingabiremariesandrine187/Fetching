// async function fetchDataForAllUsers() {
//     try{
    
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user`);

    
//     if(!response.ok){
//      throw new Error(`HTTP error! status: ${response.status}`)
//     }
//     //parse the json response
//     const data = await response.json();
//     return data
// } catch(error){
//     console.log("Error fetching user data: ",error)
// }
// }

// async function displayAllUsers(){
//     const users = await fetchDataForAllUsers()
//     if(users && users.length>0){
//     users.forEach(user => {
//         console.log("user id:", user.id)
//          console.log("user name:",user.name)
//          console.log("articleIds",user.articleIds)
//              console.log("content",user.content)
//     });
// } else{
//     console.log("no user found")
// }
// }
// displayAllUsers();
    

//question number 1

async function fetchDataForAllAuthors() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching Authors data: ", error);
  }
}

async function displayAllAuthors() {
  const posts = await fetchDataForAllAuthors();

  if (posts && posts.length > 0) {
    posts.forEach((post) => {
      console.log("Post id:", post.id);                  
      console.log("Author id:", post.user.id);           
      console.log("Author name:", post.user.name);     
      console.log("Article (title):", post.title);       
      console.log("Comments:", post.comments.length);    
      console.log("----");
    });
  } else {
    console.log("No posts found");
  }
}

displayAllAuthors();


//question 2

//this is the API We are using https://dummyjson.com/products

async function fetchProducts() {
  try {
    const response = await fetch(
      `https://dummyjson.com/products`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching Product data: ", error);
  }
}

