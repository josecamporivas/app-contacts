const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userName = event.target.name.value;
    const userPassword = event.target.password.value;

    const isUserCorrect = await userCorrect(userName, userPassword)
    if(isUserCorrect){
        //go to contacts.html (with contacts of the user)
        console.log("Contraseña correcta")
    }else{
        //show message error (incomplete data)
        console.log("Contraseña incorrecta")
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