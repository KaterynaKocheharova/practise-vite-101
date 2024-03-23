import axios from 'axios';

const BASE_URL = 'https://64859281a795d24810b7146a.mockapi.io/work/';

export async function getAllContacts() {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  return data;
}

export async function getContactById(id) {
  const { data } = await axios.get(`${BASE_URL}/contacts/${id}`);
  return data;
}

export async function createContact(contactObj) {
  const { data } = await axios.post(`${BASE_URL}/contacts`, contactObj);
  return data;
}

export async function resetContact(contactObj, id) {
  const { data } = await axios.put(`${BASE_URL}/contacts/${id}`, contactObj);
  return data;
}

export async function removeContact(id) {

    try {
        const data = await axios.delete(`${BASE_URL}/contacts/${id}`);
        return data;
    } catch(error) {
        console.log(error)
    }
}



