import React from "react" 
import { connect } from "react-redux" 
import Article from "../components/Article" 
import AddArticle from "../components/AddArticle" 

const Articles = ({ articles }) => { 
  const saveArticle = e => { 
    e.preventDefault() 
  } 
  return ( 
    <div> 
      <AddArticle saveArticle={saveArticle} /> 
      {articles.map(article => ( 
        <Article key={article.id} article={article} /> 
      ))} 
    </div> 
  ) 
} 
const mapStateToProps = state => { 
  return { 
    articles: state.articles, 
  } 
} 
export default connect(mapStateToProps)(Articles)