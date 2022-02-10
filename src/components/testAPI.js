import React, { useState } from 'react'

export default class Danang extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        this.loadCategory()
    }

    loadCategory = () => {
        var requestOptions = {
            method: 'GET',
            headers: {
                "access-control-allow-origin" : "*",
                'Content-Type': 'application/json'
            }
        }
        fetch('https://bookhotel-backend.herokuapp.com/api/nologin/locations/57/hotels', requestOptions)
        .then(function(response) {
            return response.json()
        })
        .then((location) => {
            // this.setState({response: location.data.hotels})
            console.log(this.state.response);
        })
        .catch(function(err) {
            console.log(err)
        })
    }
}