const form = document.getElementById("form");
const contacts = document.getElementById("contacts")

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const dataUser = {
        "name": event.target.name.value,
        "email": event.target.email.value,
        "phone": event.target.phone.value
    }

    //send the new contact to the api, method POST to save it
    //also refresh the contacts
    fetch(`http://localhost:3000/setContact`,{
        method: 'POST', 
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)
    }).catch(function(){
        console.log("Something gone wrong while saving the contact in the server")
    })

    addContactToDocument(dataUser)
    form.reset();
    
})

window.addEventListener('DOMContentLoaded', async (e) => {      //add the initial contacts
    const contactsResponse = await fetch('http://localhost:3000/getContacts')
    const contactsJSON = await contactsResponse.json();

    contactsJSON.forEach(contact => {
        addContactToDocument(contact);
    });
});


function addContactToDocument(contact){
    const divContainer = document.createElement("div");

    const h3Name = createHTMLElement("h3", contact.name);
    const h4Email = createHTMLElement("h4", contact.email)
    const h4Phone = createHTMLElement("h4", contact.phone)

    divContainer.appendChild(h3Name)
    divContainer.appendChild(h4Email)
    divContainer.appendChild(h4Phone)
    
    contacts.appendChild(divContainer)
}

function createHTMLElement(header, textContent){
    const element = document.createElement(header)
    element.textContent = textContent

    return element
}