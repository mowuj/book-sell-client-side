import React from 'react';
import './Banner.css'
import book2 from '../../../assets/images/book1.jpg'
import TypeWriter from 'typewriter-effect'
const Banner = () => {
    return (

            <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={book2} alt="" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <h1 class="text-5xl font-bold common">
            <TypeWriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    strings:["BUY BEST BOOKS FROM HERE.","SELL YOUR OLD BOOK HERE."]
            }}
            />
    </h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In <br/> deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary common">Get Started</button>
    </div>
  </div>
</div>

    );
};

export default Banner;