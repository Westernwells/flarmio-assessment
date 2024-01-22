import axios from "axios";

// Api structuring
const Api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_URL
      : "https://wizard-world-api.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

const formDataApi = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_URL
      : "http://localhost:8080/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default Api;

async function fetchRequest(url: string) {
  const { data } = await Api.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}
async function postRequest(url: string, params: any) {
  const { data } = await Api.post(url, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}

async function formDataPostRequest(url: string, params: any) {
  const { data } = await formDataApi.post(url, params);
  return data;
}
async function putRequest(url: string, params: any) {
  const { data } = await Api.put(url, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}
async function patchRequest(url: string, params: any) {
  const { data } = await Api.patch(url, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}
async function deleteRequest(url: string) {
  const { data } = await Api.delete(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}

// Api for Houses
export const HOUSES = {
  fetchAll: () =>
    fetchRequest(`/houses`),
};


