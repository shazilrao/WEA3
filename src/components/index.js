import React from 'react'
import '../App.css';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"
import PicCards from './PicCards';
import Navbar from './navbar';
import Footer from './footer';

const Index=()=> {
  return (
    <>
     <div>
        <Navbar />

        {/* Navbar end here */}
        <div id="mydiv" className='mt-3'>
         <PicCards img={img1}/>
         <PicCards img={img2}/>
         <PicCards img={img3}/>
         <PicCards img={img4}/>
         <PicCards img={img5}/>
         <PicCards img={img6}/>
         <PicCards img={img7}/>
         <PicCards img={img8}/>
          
         
          
          
         
         
        </div>   
        <Footer />
      </div>
    </>
  );
}

export default Index;
