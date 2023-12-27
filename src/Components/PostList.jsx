// api.js
const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=3035a2e62fc23afedb7da1c6546b79a9' 

export const fetchPosts = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchMovies = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

