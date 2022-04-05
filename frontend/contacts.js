const form = document.getElementById("form");
const contacts = document.getElementById("contacts")

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const newUserName = event.target.name.value;
    const newUserEmail = event.target.email.value;
    const newUserNumber = event.target.number.value;

    //send the new contact to the api, method POST to save it
    //also have to refresh the contacts
})

window.addEventListener('DOMContentLoaded', async (e) => {      //add the initial contacts
    const contactsResponse = await fetch('http://localhost:3000/getContacts')
    const contactsJSON = await contactsResponse.json();
    
    const addContactToDocument = (contact) => {
        const divContainer = document.createElement("div");
    
        const h3Name = document.createElement("h3")
        h3Name.textContent = contact.name;
        const h5Email = document.createElement("h4")
        h5Email.textContent = contact.email;
        const h5Number = document.createElement("h4")
        h5Number.textContent = contact.phone;

        divContainer.appendChild(h3Name)
        divContainer.appendChild(h5Email)
        divContainer.appendChild(h5Number)
        
        contacts.appendChild(divContainer)
    }

    contactsJSON.forEach(contact => {
        addContactToDocument(contact);
    });
});