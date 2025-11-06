import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api/", // Ajusta si tu backend usa otra ruta
});

// Interceptor de requests (Opcional ahora, útil más adelante para JWT)
axiosClient.interceptors.request.use((config) => {
    // Aquí luego agregaremos el token (si hay)
    // const token = localStorage.getItem("access");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default axiosClient;
