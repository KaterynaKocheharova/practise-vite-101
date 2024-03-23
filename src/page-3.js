import {
  getAllContacts,
  getContactById,
  createContact,
  resetContact,
  removeContact,
} from './js/API';

getAllContacts().then(data => {
  renderContacts(data);
});

const contactsList = document.querySelector('.contacts-list');

// DELETE CONTACT
const findContactsForm = document.querySelector('.find-contacts-form');

findContactsForm.addEventListener('submit', onElementDelete);

function onElementDelete(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.id.value;

  try {
    removeContact(inputValue)
        const items = [...contactsList.children];
        const itemToRemove = items.find(item => {
          return item.id === inputValue;
        });
        itemToRemove.remove();
  } catch(error) {
    console.log(error)
  }
  
  e.currentTarget.reset();
}

// RENDER ALL CONTACTS

function renderContacts(data) {
  const contactsMarkup = data
    .map(
      ({ name, phone, id }) =>
        `<li id="${id}"><h2>${name}</h2><p>${phone}</p></li>`
    )
    .join('');
  contactsList.insertAdjacentHTML('beforeend', contactsMarkup);
}

// getContactById(6)
// .then(data => console.log(data));

// const newContact = {
//     "name": "qwert",
//     "phone": "089754",
// }
// createContact(newContact)
// .then(data => console.log(data))

// const changeContact = {
//     name: "K",
//     phone: "12345678",
// }

// resetContact(changeContact, 18)
// .then(data => console.log(data))
