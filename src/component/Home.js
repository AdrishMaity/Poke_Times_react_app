import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res)
        })
    }
    render () {
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ab soluta vero qui, voluptate modi tenetur, error expedita est pariatur repudiandae? Deserunt ut amet reiciendis recusandae eius rem autem fuga?</p>
            </div>
        )
    }
}

export default Home