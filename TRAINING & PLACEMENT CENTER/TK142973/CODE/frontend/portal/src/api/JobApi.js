const axios = require("axios").default;

const BASE_URL = "http://localhost:5000/jobs/";

async function addJob(data) {
  const res = await axios.post(BASE_URL, JSON.stringify(data), {
    headers: {
      "Content-type": "application/json",
    },
  });
  return res;
}

async function getJob(id) {
  const res = await axios.get(`${BASE_URL + id}`);
  return res;
}

async function updateJob(id, data) {
  console.log(id);
  const res = await axios.patch(`${BASE_URL + id}`, JSON.stringify(data), {
    headers: {
      "Content-type": "application/json",
    },
  });
  return res;
}

async function deleteJob(id) {
  const res = await axios.delete(`${BASE_URL + id}`);
  return res;
}

async function getAllJobs() {
  const res = await axios.get(`${BASE_URL}`);
  return res;
}

module.exports = {
  addJob,
  getJob,
  updateJob,
  deleteJob,
  getAllJobs,
};
