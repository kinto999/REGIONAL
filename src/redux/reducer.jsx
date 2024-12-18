import articles from "../comp/articles";

const initState={ articles :[{id:10,designation :'article1', famille:'informatique'}, {id:11,designation :'article2',famille:'bureau'}]};

export const articlereducer = (state = initState, action) => {
    switch(action.type) {
        case 'add_article':
            return { ...state, articles: [...state.articles, action.payload] };
        case 'delete_article':
            return { ...articles, articles: state.articles.filter((article)=>article.id !== action.payload)};
        default:
            return state;
    } 
}