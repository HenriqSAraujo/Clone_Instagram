import React, { useState } from "react";
import Header from './components/header/Header.js'
import './App.css';
import Stories from './components/stories/Stories.js'
import Posts from './components/posts/Posts.js'
import PostsConfig from './components/posts/Posts.json'
import Suggestions from "./components/suggestions/Suggestions.js";

function App() {
  const [posts] = useState(
    PostsConfig.posts
   
  );

  return (
    
    <div className="container">
         <Header />
      <div className='centerbox'>
        
        <div className='maincontent'>
     
           <Stories/>
           <div className="timeline">
            {posts.map((post) => (
           <Posts
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
           ))}
          </div>   
          </div> 
          <div className="right_content">
           <div className="suggestions_box">
                <Suggestions/>
           </div> 
         </div>
        </div>
       
    </div>
    
  );
}

export default App;
