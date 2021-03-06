import React, { Component } from 'react';

import './FullPost.css';
import axios from "axios"

class FullPost extends Component {
    state = {
        loadedPost: null, 
    }

    componentDidMount () {
        console.log(this.props)
        this.loadData();       
    }

    // The router will not unmount and mount the component again,
    // so we need to check for an update
    componentDidUpdate () {
        this.loadData();       
    }

    // Utility function to fetch data
    loadData () {
        if (this.props.match.params.id) {
            // this.props.match.params.id is a string,
            // so there need to be a "+" before it to turn it into a number,
            // so the type is the same as the loadedPosts
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios.get("/posts/" + this.props.match.params.id)
                    .then(response => {
                        this.setState({loadedPost: response.data});
                        console.log(response);
                    }
                )
            }
        }
    }

    deletePostHandler = () => {
        axios.delete("/posts/" + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{textAlign: "center"}}>Loading...!</p>;
        }
        
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        
        return post;
    }
}

export default FullPost;