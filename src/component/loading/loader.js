import React, { Component } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import './loaderStyle.css'
export default class loader extends Component {
    render() {
        return (
            <div className="loading-wrapper">
                <div className="loading">
                <Loader
                    type="ThreeDots"
                    color="black"
                    height={100}
                    width={100}
                    // timeout={3000} //3 secs

                />
                </div>
                
            </div>
        )
    }
}
