export function formatDate(date) {
    return new Date(date).toLocaleDateString('bg-bg', { year:"numeric", month:"short", day:"numeric"})
}

export function getOpenWeatherUrl(lat, lon) {
    return `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=3b53a4c6df84676a4d70bd695f046c62`
}

export function formatTimeStampToDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const options = { day: 'numeric', month: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleString('bg-BG', options)
}