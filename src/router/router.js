import React,{useState,useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from '../views/homepage/homepage'
import DetailPage from '../views/detail/detail'

const router=({mobile})=>{
    
    return(
        <Router>
        <Switch>
            <Route path='/' exact><HomePage/></Route>
            <Route path='/:slug' exact><DetailPage/></Route>
        </Switch>
        </Router>
    )
}
export default router