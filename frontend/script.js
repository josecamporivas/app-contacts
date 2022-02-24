const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = event.target.name.value;
    const userPassword = event.target.password.value;

    if(userCorrect(userName, userPassword)){
        //go to contacts.html (with contacts of the user)
    }else{
        //show message error
    }
})


function userCorrect(userName, userPassword){
    if(!userName || !userPassword){
        return false;
    }
    
    //conect to the api to validate the user (connecting to the database)
}