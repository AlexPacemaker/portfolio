// Этот блок кода объявляет константы API_URL и API_URL2, которые предназначены для хранения URL-адресов нашего API. Они получают значение из процессной переменной REACT_APP_API_URL и REACT_APP_API_URL2. Затем они экспортируются для использования в других частях приложения
const API_URL = process.env.REACT_APP_API_URL;
const API_URL2 = process.env.REACT_APP_API_URL2;
export { API_URL, API_URL2 };
