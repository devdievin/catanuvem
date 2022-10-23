const API_WEATHER = 'https://api-catanuvem.vercel.app';
const API_NEWS = "https://api-catanews.vercel.app";

export const globals = {
    URL_PORTFOLIO: 'https://dievanodantas.netlify.app',
    DOMAIN_API: API_WEATHER,
    PATH_TODAY_LOC: `${API_WEATHER}/weather/today/loc`,
    PATH_HOURS_LOC: `${API_WEATHER}/weather/hours/loc`,
    PATH_DAYS_LOC: `${API_WEATHER}/weather/days/loc`,
    PATH_TODAY_CITY: `${API_WEATHER}/weather/today/city`,
    PATH_HOURS_CITY: `${API_WEATHER}/weather/hours/city`,
    PATH_DAYS_CITY: `${API_WEATHER}/weather/days/city`,
    PATH_GET_CITY: `${API_WEATHER}/city`,
    PATH_NEWS: `${API_NEWS}/news`
}