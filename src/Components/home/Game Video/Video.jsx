import { useState } from "react";
import Footer from "../../navigation/Footer";
import Navbar from "../../navigation/Navbar";
import { useLocation } from "react-router-dom";


const Video = () => {
   const { state: locationData } = useLocation(); 
       const [game, setGame] = useState(locationData || {});
   return (
      <div>
         <Navbar/>
         <div>
            {game.gameName}
            {game.titel}
            <iframe width="1905" height="803" src={game.video} 
            title="Microsoft Flight Simulator - Pre-Order Launch Trailer" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
            web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
         <Footer/>
      </div>
   );
};

export default Video;