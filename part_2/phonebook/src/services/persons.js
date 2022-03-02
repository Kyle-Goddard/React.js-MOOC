import axios from "axios";

const BASE_URL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(BASE_URL).then((response) => {
    return response.data;
  });
};

const createPerson = (personObject) => {
  return axios.post(BASE_URL, personObject).then((response) => {
    return response.data;
  });
};

const removePerson = (id) => {
  return axios.delete(`${BASE_URL}/${id}`).then((response) => {
    return response.data;
  });
};

const updatePerson = (id, personObject) => {
  return axios.put(`${BASE_URL}/${id}`, personObject).then((response) => {
    return response.data;
  });
};

export default { getAll, createPerson, removePerson, updatePerson };
