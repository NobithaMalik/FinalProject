const axios = require("axios").default;

const BASE_URL = "http://localhost:5000/trainings";

async function addTraining(data) {
  const res = await axios.post(BASE_URL, JSON.stringify(data), {
    headers: {
      "Content-type": "application/json",
    },
  });
  return res;
}

async function getTraining(id) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res;
}

async function updateTraining(id, data) {
  console.log(id);
  const res = await axios.patch(`${BASE_URL}/${id}`, JSON.stringify(data), {
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log(res.data);
  return res;
}

async function deleteTraining(id) {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res;
}

async function getAllTrainings() {
  const res = await axios.get(`${BASE_URL}`);
  return res;
}

module.exports = {
  addTraining,
  getTraining,
  updateTraining,
  deleteTraining,
  getAllTrainings,
};
