const axios = require("axios").default;


const BASE_URL = "http://localhost:5000/";

const URLS = { Student: BASE_URL + "students" };

const CONFIG = {
  post: {
    headers: {
      "Content-type": "application/json",
    },
  },
};

async function addUser(data) {
  const res = await axios.post(URLS.Student, JSON.stringify(data), CONFIG.post);
  return res;
}

async function getUser(email, password) {
  const res = await axios.get(URLS.Student + `/auth/${email}/${password}`);
  return res;
}

async function getUserById(id) {
  const res = await axios.get(URLS.Student + `/${id}`);
  return res;
}

async function deleteUser(id) {
  const res = await axios.delete(URLS.Student + id);
  return res;
}

async function updateUser(id, data) {
  const res = await axios.patch(URLS.Student + `/${id}`, JSON.stringify(data), {
    headers: {
      "Content-type": "application/json",
    },
  });
  return res;
}

const applyForJob = async (userId, jobId, data) => {
  const formData = new FormData(); // Create a new FormData object

  formData.append("resume",data.resume)

  try {
    // Send the FormData object with the image to the backend
    const res = await axios.post(
      `${URLS.Student}/${userId}/${jobId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
        },
      }
    );
    return res;
  } catch (error) {
    console.error('Error applying for job:', error);
    throw error; // Throw error for handling in the calling function
  }
};






async function applyIntern(userId,jobId, data) {
  const formData = new FormData(); // Create a new FormData object

  formData.append("resumes",data.resume)

  try {
    // Send the FormData object with the image to the backend
    const res = await axios.post(
      `${URLS.Student}/sss/${userId}/${jobId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
        },
      }
    );
    alert(res)
    return res;
  } catch (error) {
    console.error('Error applying for job:', error);
    throw error; // Throw error for handling in the calling function
  }
}




async function getAllUsers() {
  const res = await axios.get(`${BASE_URL}students`);
  return res;
}

module.exports = {
  addUser,
  getUser,
  getUserById,
  deleteUser,
  updateUser,
  getAllUsers,
  applyForJob,
  applyIntern
};
