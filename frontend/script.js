const form = document.getElementById("form");
const errorMsg = document.getElementById("error");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userName = event.target.name.value;
    const userPassword = event.target.password.value;

    const isUserCorrect = await userCorrect(userName, userPassword)
    if(isUserCorrect){
        //go to contacts.html (with contacts of the user)
        errorMsg.style.display = "none";
        window.location.href = "contacts.html"
        
    }else{
        //show message error (incomplete data)
        errorMsg.style.display = "block";
    }
})


async function userCorrect(userName, userPassword){
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