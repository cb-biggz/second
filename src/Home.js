import React, { Component } from "react";


 
class Home extends Component {
  render() {
    return (
        <div class='container'>
          <div class='image-container'>
            
              <img class='picOne' src ="/jaybird1.jpg" alt="headphone"/>
              <img class='picTwo' src="/jaybird2.jpg" alt="headphone"/>
              <img class ='picThree'src="/jaybird3.jpg" alt="headphone"/>
          </div>
            
             <div class='info'>
        
                <p>Jaybird headphones are the leading heaphones for any, and all. Lifters, runners, walkers, 
                 or lovers of music. </p>
                 <p>Jaybird has the perfect set of headphones to keep you going. </p>
                  <p>With a long lasting battery, and sweatproof to handle the harshes of workouts. 
                Jaybird is here to fit your needs of whatever your next adventure brings.
                </p>
             </div>
        </div>
    );
  }
}
 
export default Home;