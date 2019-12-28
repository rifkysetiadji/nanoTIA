import * as article from '../constanst/artikel'
const initialState={
    articles:[],
    articles_headline:null,
    loading:false
}
const articleReducer=(state=initialState,action)=>{
    switch (action.type) {
        case article.GET_ARTICLE:
            return{
                ...state,
                articles:[...state.articles,...action.payload]
            }
        case article.GET_ARTICLE_DETAIL:
            
            return{
                ...state,
                articles:action.payload
            }
        case article.LOADING:
            return{
                ...state,
                loading:action.payload
            }
        case article.GET_ARTICLE_HEADLINE:
                return{
                    ...state,
                    articles_headline:action.payload
                }
        default:
            return state
    }
}
export default articleReducer