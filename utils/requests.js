const API_KEY = process.env.API_KEY


export const requests = {
    fetchBusiness:{
    title: "Business",
    url: `/top-headlines?category=business` +`&apiKey=${API_KEY}`
    },
    fetchEntertainment:{
        title: "Entertainment",
        url: `/top-headlines?category=entertainment` +`&apiKey=${API_KEY}`
    },
    fetchGeneral:{
        title: "General",
        url: `/top-headlines?category=general` +`&apiKey=${API_KEY}`
    },
    fetchHealth:{
        title: "Health",
        url: `/top-headlines?category=health` +`&apiKey=${API_KEY}`
    },
    fetchScience:{
        title: "Science",
        url: `/top-headlines?category=science` +`&apiKey=${API_KEY}`
    },
    fetchTechnology:{
        title: "Technology",
        url: `/top-headlines?category=technology` +`&apiKey=${API_KEY}`
    },
    fetchSports:{
        title: "Sports",
        url: `/top-headlines?category=sports` +`&apiKey=${API_KEY}`
        },
 
}

