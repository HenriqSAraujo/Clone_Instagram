import React, { useState } from "react";
import Header from './components/header/Header.js'
import './App.css';
import Stories from './components/stories/Stories.js'
import Posts from './components/posts/Posts.js'
import PostsConfig from './components/posts/Posts.json'
import StoriesConfig from './components/stories/Stories.json'
import SuggestionsConfig from './components/suggestions/Suggestions.json'
import Suggestions from "./components/suggestions/Suggestions.js";

function App() {
  const [posts] = useState(
    PostsConfig.posts
  );
  
  const [stories] = useState(
    StoriesConfig.stories
  )

  const [suggestions] = useState(
    SuggestionsConfig.suggestions
  )
  return (
    
    <div className="container">
         <Header />
      <div className='centerbox'>
        
        <div className='maincontent'>
        {stories.map((storie) =>(
           <Stories
            profile_picture={storie.profile_picture}
            username={storie.username}
           />

       ))}
           <div className="timeline">
            {posts.map((post) => (
           <Posts
           profile_picture={post.profile_picture}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
            liked_by={post.liked_by}
            all_comments={post.all_comments}
            hours_posted={post.hours_posted}
          />
           ))}
          </div>   
          </div> 
          <div className="right_content">
           <div className="suggestions_box">
            {suggestions.map((suggestion) => (
                <Suggestions
                profile_picture={suggestion.profile_picture}
                username={suggestion.username}
                description={suggestion.description}

                />

                ))}                
           </div> 
         </div>
        </div>
       
    </div>
    
  );
}

export default App;
