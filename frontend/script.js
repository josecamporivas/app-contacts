const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = event.target.name.value;
    const userPassword = event.target.password.value;

    if(userCorrect(userName, userPassword)){
        //go to contacts.html (with contacts of the user)
    }else{
        //show message error (incomplete data)
    }
})


function userCorrect(userName, userPassword){
    if(!userName || !userPassword){
        return false;
    }

    const req = await fetch(`http://localhost:3000/getPassword/${userName}`)
    const userData = await req.json()
    
    return validateUser(userData, userPassword)
}

function validateUser(userData, userPassword){
    if(!userData.password || userData.password !== userPassword){
        return false;
    }

    return true;
}