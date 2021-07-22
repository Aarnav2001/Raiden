import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.token = JSON.parse(localStorage.getItem('profile')).token;
    }
    return req;
});

export const fetchProjects = () => API.get("/projects");
export const createProject = (newProject) => API.post("/projects", newProject);
export const likeProject = (id) => API.patch(`/projects/${id}/likePost`);
export const updateProject = (id, updatedProject) => API.patch(`/projects/${id}`, updatedProject);
export const deleteProject = (id) => API.delete(`/projects/${id}`);

export const confirm=(id1,id2)=>API.get(`/projects/confirmsite/${id1}/${id2}`);
export const done=(id)=>API.get(`/projects/done/${id}`);

export const fetchTIS = () => API.get("/TIS");
export const createTIS = (newProject) => API.post("/TIS", newProject);
export const getTIS = (id) => API.get(`/TIS/${id}`);
export const updateTIS = (id,newProject) => API.patch(`/TIS/${id}`, newProject);

export const getProject = (id) => API.get(`/projects/${id}`);
export const creatSite = (id,site) => API.post(`/site/${id}`,site);

export const getSite = (id) => API.get(`/siteinfo/${id}`);
export const updateSite = (id, updatedProject) => API.patch(`/siteinfo/${id}`, updatedProject);
export const fetchfieldmen = () => API.get("/fieldman");
export const createfieldman = (formData) => API.post("/fieldman/",formData);

export const addfieldman=(id1,id2)=>API.get(`/site/addfield/${id1}/${id2}`);
export const addTISfieldman=(id1,id2)=>API.get(`/TIS/addfield/${id1}/${id2}`);

export const getdata=() => API.get("/data");

export const getprojects = () => API.get("/admin/get");
export const signIn = (formData) => API.post("/admin/signin",formData);
export const signUp = (formData) => API.post("/admin/",formData);