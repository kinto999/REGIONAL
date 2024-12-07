
const initstate = { articles: [], id: '', des: '', prix: '', total: 0 };

export const articlereducer = (state = initstate, action) => {
    switch(action.type) {
        case 'addarticle':
            return { ...state, articles: [ ...state.articles, action.payload] };
        case 'setid':
            return { ...state, id: action.payload };
        case 'setdes':
            return { ...state, des: action.payload };
        case 'setprix':
            return { ...state, prix: action.payload };
        case 'delarticle':
            return { ...state, articles: state.articles.filter((article) => article.id !== action.payload) };
        case 'calculertotal':
            return { ...state, total: state.articles.reduce((acc, article) => Number(article.prix) + acc, 0) }
        default:
            return state;
    }
}