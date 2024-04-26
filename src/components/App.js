import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <ArticleList posts={blogData.posts}/>
      <About about={blogData.about} image={blogData.image}/>
      
    </div>
  );
}

export default App;
