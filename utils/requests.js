const API_KEY = process.env.API_KEY

export default {
    fetchTrending:{
        title:"Trending",
        // url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
        url:`/trending/all/week?api_key=4ab7430e5665a5f2cf8193138c69f74b&language=en-US`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated?api_key=4ab7430e5665a5f2cf8193138c69f74b&language=en-US`
    }
}