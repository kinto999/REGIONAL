import * as actionTypes from "./actionTypes" 
const initialState = { 
  articles: [ 
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" }, 
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" }, 
  ]
} 
export const reducer = (state = initialState, action) => { 
  switch (action.type) { 
    case actionTypes.ADD_ARTICLE: 
      const newArticle = { 
        id: Math.random(),
        title: action.article.title, 
        body: action.article.body, 
      } 
      return { 
        state, 
        articles: state.articles.concat(newArticle), 
      }
    default:
        return state;
  } 
} 
