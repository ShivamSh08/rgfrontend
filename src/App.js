// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchFilter from './components/SearchFilter';
import House from './components/House';
import SignUp from './components/SignUp';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SearchedHouse from './components/SearchedHouse';
import axios from 'axios';
import Enquiry from './components/Enquiry';
import EnquiriesList from './components/EnquriesList';
// import Enquiry1 from './components/Enquiry1';
// import Query from './components/Query';


function App() {


 let [housesArray,setHousesArray] =  useState([]);


  // useEffect( () =>{
  //   let fetchData = async () => {
  //     let response  = await fetch("/houses.json");
  //     let housesData = await response.json();
  //     // console.log(housesData);
  //     setHousesArray(housesData)
  //   }
  //   fetchData();
  // },[]);

  // useEffect( () =>{
  //   let fetchData = async () => {
  //     let response  = await axios.get(process.env.REACT_APP_BACKEND_URL+"house");
  //     let housesData = await response.data;
  //     // console.log(housesData);
  //     setHousesArray(housesData)
  //   }
  //   fetchData();
  // },[]);

 
useEffect( () =>{
      let fetchData = async () => {
        let response  = await axios.get(process.env.REACT_APP_BACKEND_URL+"house");
        let housesData = await response.data  ;
        // console.log(housesData);
        setHousesArray(housesData)
      }
      fetchData();
    },[]);

  return (
    <div className='container-fluid'>
        <Header/>
        <SearchFilter housesData = {housesArray}/>
        <Routes>
          <Route path="/" element={<House houseInfo = {housesArray[Math.floor(Math.random() * 10)]} />} />
          <Route path="/searchresults/:county" element={<SearchResults housesData = {housesArray}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/searchedhouse" element={<SearchedHouse housesData = {housesArray}/>} />
          {/* <Route path="/enquiry" element={<Enquiry1/>} /> */}
          {/* <Route path="/query" element={<Query/>} /> */}
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/enquiries" element={<EnquiriesList/>} />
          
        </Routes>
       




     
        {/* <House houseInfo = {housesArray[2]} /> */}
        {/* <SignUp/> */}
   




        <Footer/>
    </div>
  );
}


export default App;
