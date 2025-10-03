async function fetchDataForAllUsers() {
    try{
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user`);

    
    if(!response.ok){
     throw new Error(`HTTP error! status: ${response.status}`)
    }
    //parse the json response
    const data = await response.json();
    return data
} catch(error){
    console.log("Error fetching user data: ",error)
}
}
// displaying all users along with their ids,names and emails
async function displayAllUsers(){
    const users = await fetchDataForAllUsers()
    if(users && users.length>0){
    users.forEach(user => {
        console.log("user id:", user.id)
         console.log("user name:",user.name)
         console.log("articleIds",user.articleIds)
    });
} else{
    console.log("no user found")
}
}
displayAllUsers();
    