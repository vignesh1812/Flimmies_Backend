const express=require('express');
const axios=require("axios");
const app=express();
const cors=require("cors");
app.use(express.json())
app.use(cors());
const url= 'https://ott-details.p.rapidapi.com/advancedsearch';
const options = {
  method: 'GET',
  params: {
    start_year: '2000',
    end_year: '2020',
    min_imdb: '7',
    max_imdb: '10',
    language: 'english',
    type: 'movie',
    sort: 'latest',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': '8b6dfed96cmsh7535d3294cc23cfp1b3af9jsneb4fc004e9b0',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
};
const urlNewArrivals= 'https://ott-details.p.rapidapi.com/advancedsearch';
const optionsNewArrivals = {
  method: 'GET',
  url: 'https://ott-details.p.rapidapi.com/advancedsearch',
  params: {
    start_year: '2020',
    end_year: '2020',
    min_imdb: '8',
    max_imdb: '10',
    language: 'english',
    type: 'movie',
    sort: 'latest',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': '8b6dfed96cmsh7535d3294cc23cfp1b3af9jsneb4fc004e9b0',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
};
const urlTopRated='https://ott-details.p.rapidapi.com/advancedsearch';
const optionsTopRated = {
  method: 'GET',
  params: {
    start_year: '1970',
    end_year: '2020',
    min_imdb: '7.5',
    max_imdb: '10',
    genre: 'action,horror,adventure,comedy,documentary',
    language: 'english',
    type: 'movie',
    sort: 'highestrated',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': '8b6dfed96cmsh7535d3294cc23cfp1b3af9jsneb4fc004e9b0',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
};
const urlVintage='https://ott-details.p.rapidapi.com/advancedsearch';
const optionsVintage = {
  method: 'GET',
  params: {
    start_year: '1970',
    end_year: '1990',
    min_imdb: '6.5',
    max_imdb: '10',
    genre: 'action,horror,adventure,comedy,documentary',
    language: 'english',
    type: 'movie',
    sort: 'oldest',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': '8b6dfed96cmsh7535d3294cc23cfp1b3af9jsneb4fc004e9b0',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
};

app.get('/popularData',async(req,res)=>{  
try {
	const response = await axios.request(url,options);
	res.json(response.data);
} catch (error) {
	console.error(error);
}  
})

app.get('/newArrival',async(req,res)=>{  
try {
	const response = await axios.request(urlNewArrivals,optionsNewArrivals);
	res.json(response.data);
} catch (error) {
	console.error(error);
}  
})
app.get('/topRated',async(req,res)=>{  
try {
	const response = await axios.request(urlTopRated,optionsTopRated);
	res.json(response.data);
} catch (error) {
	console.error(error);
}  
})
app.get('/Vintage',async(req,res)=>{  
try {
	const response = await axios.request(urlVintage,optionsVintage);
	res.json(response.data);
} catch (error) {
	console.error(error);
}  
})
app.post('/MovieDetails',async(req,res)=>{
  const {id}=req.body;
  console.log(id);
  const urlMovieDetails='https://ott-details.p.rapidapi.com/gettitleDetails';
  const optionsMoviedetails = {
    method: 'GET',
    params: {
      imdbid: id,
    },
    headers: {
      'X-RapidAPI-Key': '8b6dfed96cmsh7535d3294cc23cfp1b3af9jsneb4fc004e9b0',
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(urlMovieDetails,optionsMoviedetails);
    console.log(response);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }  

})
app.listen(5000,()=>{
    console.log(`Server is Running on 5000`)
})
