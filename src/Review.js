import React, { Component } from "react";

 
class Review extends Component {
  render() {
    return (
      <div class='story'>
        <div class='image-story'>
         <img class='jayActive' src="/head1.png" alt="Active"/>
        </div>
        <div class='story-container'>
          <p>JayBird Stories</p>
        </div>
        <div class='flexStory-container'>
        <div class='storyOne'>
          <img class='activeOne' src="/active1.jpg" alt="Active"/>
          <p><span id='textOne'>"Jaybird headphones have been the best purchase I made in while.
          It has been hard to find good running headphones. I found the one with cords would always get in the way,
          and the ones that wrapped around the neck were uncomfortable. Jaybird headphones have been the perfect solution for when I feel like running"
          </span></p>
          <p>-Jessica, 28</p>
        </div>
        <div class='storyTwo'>
          <img class='activeTwo' src="/hiking1.jpg" alt="Active"/>
          <p span id="textTwo">"I spend most of my day training, and when I am not training I am going on hikes. It was tough to
            find headphones that could keep up with my active life style. Other head phones would fall out, or they would stop
            working with a drop of water. The jaybirds are tough enough to withstand my intense workouts, so I do not 
            have to worry about buying another pair od headphones."
          </p>
          <p>Kevin, 33</p>


        </div>
        </div>
      </div>
    );
  }
}
 
export default Review;