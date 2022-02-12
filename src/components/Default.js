import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className='container'>
               <div className='row'>
                   <div className='col-10 mx-auto pt-5 text-center text-uppercase '>
                       <h1 className='display-3'>404</h1>
                       <h2>page not found</h2>
                       <h3>
                           The request url<span className='text-danger'>{this.props.location.pathname}</span>
                           was not found
                       </h3>
                   </div>
               </div>
            </div>
        )
    }
}
