import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        return (
            <div className='footer'>
                <p>BlazeClan copyright @2019</p>
            </div>
        )
    }
}