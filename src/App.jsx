import { useState, useEffect } from 'react'
import { fetchDataFromApi } from "./utils/api"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfriguration, getGenres } from './store/homeSlice'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResults/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound'



function App() {


  const { url } = useSelector((state) => state.home);

 
  const dispatch = useDispatch()
  useEffect(() => {
    fetchApiConfig();
    generesCall()
  }, [])
  
  
  const fetchApiConfig = () => fetchDataFromApi("/configuration").
    then((res) => {
      const url = {
        
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",

      }
      dispatch(getApiConfriguration(url))
    })


    const generesCall = async () =>{
      let promises = [];
      let endPoints = ["tv", "movie"];
      let allGenres = {}
      endPoints.forEach((url)=>{
          promises.push(fetchDataFromApi(`/genre/${url}/list`))
      })

      
      const data = await Promise.all(promises);
      
      
      data.map(({genres})=>{
        genres.map((item)=>(allGenres[item.id] = item))
      })
       dispatch(getGenres(allGenres))
    }




  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
