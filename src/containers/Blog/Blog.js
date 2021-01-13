import React, { Component } from 'react';
import {Route, NavLink} from "react-router-dom";

import './Blog.css';
import Posts from "./Posts/Posts"
import NewPost from "./NewPost/NewPost"

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* You can change the class name of a NavLink with activeClassName 
                                You can also use activeStyle which is like using style in react */}
                            <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: "#fa923f",
                                    textDecoration: "underline",
                                }}>Home</NavLink></li>
                            {/* Example of advanced setup of Links with React Route  */}
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true",
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}/> 
                <Route path="/new-post" exact component={NewPost}/> 
            </div>
        );
    }
}

export default Blog;