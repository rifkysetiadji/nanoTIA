import * as article from '../constanst/artikel'
import axios from 'axios'
// import moment from 'momentjs'
export const setLoading=(payload)=>{
    return {
        type:article.LOADING,
        payload:payload
    }
}
export const getArticles=(slug='')=>{
    return async(dispatch)=>{
        dispatch(setLoading(true))
        await axios.get(`https://id.techinasia.com/wp-json/techinasia/3.0/posts${slug}`)
        .then((res)=>{
            let headline=[]
            let articles=[]
            res.data.posts.map((article,i)=>{
                if(i<6){
                    headline.push(article)
                }else{
                    articles.push(article)
                }
            })

            dispatch({
                type:article.GET_ARTICLE_HEADLINE,
                payload:headline
            })
            dispatch({
                type:article.GET_ARTICLE,
                payload:articles
            })
            
            dispatch(setLoading(false))
        })
        .catch((err)=>alert(err))
    }
    
}
export const getDetailArticle=(slug)=>{
    return async(dispatch)=>{
        dispatch(setLoading(true))
        await axios.get(`https://id.techinasia.com/wp-json/techinasia/3.0/posts/${slug}`)
        .then((res)=>{
            dispatch({
                type:article.GET_ARTICLE_DETAIL,
                payload:res.data.posts
            })
            
            dispatch(setLoading(false))
        })
        .catch((err)=>alert(err))
    }
}