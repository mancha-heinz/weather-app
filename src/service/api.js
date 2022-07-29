const key = '586346eb6375444b98353532222907';

const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
    return data;
}

export default fetchData;