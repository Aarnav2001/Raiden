import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

export const fetchForms = () => API.get("/forms");
export const createForm = (newForm) => API.post("/forms", newForm);
export const likeForm = (id) => API.patch(`/forms/${id}/likePost`);
export const updateForm = (id, updatedForm) => API.patch(`/forms/${id}`, updatedForm);
export const deleteForm = (id) => API.delete(`/forms/${id}`);

export const signIn = (formData) => API.post("/admin/signin",formData);
export const signUp = (formData) => API.post("/admin/",formData);