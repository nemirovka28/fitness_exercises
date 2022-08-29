export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7496a0ccbdmsh83cbf68fd234305p154768jsn31d35ea18d13',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const youTubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
      'X-RapidAPI-Key': '7496a0ccbdmsh83cbf68fd234305p154768jsn31d35ea18d13',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}