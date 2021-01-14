import React, {Component} from "react";
import axios from "../../../axios";
// import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost"
import "./Posts.css";

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount () {
        console.log(this.props);
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post, 
                        author: "Morten",
                    }
                })
                this.setState({posts: updatedPosts});
                // console.log(response);
            })
            // On error the state is updated
            .catch(error => {
                // this.setState({error: true})
                 console.log(error);
            });
    }
    
    postSelectedHandler = (id) => {
        // this.setState({selectedPostId: id})
        this.props.history.push("/posts/" + id)
        // this.props.history.push({pathname: "/posts/" + id}) // This would also work
    }

    render () {
        // Example of handling potential errors
        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>
        
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                    // You can use link for navigating to a new page
                    // But you can also use a function on click like here
                    return (
                        // <Link to={"/" + post.id} key={post.id}>
                            <Post
                                key={post.id}
                                title={post.title}
                                author={post.author}
                                clicked={() => this.postSelectedHandler(post.id)}
                                />
                        // </Link>
                    );
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/> 
            </div>
        );
    }
}

export default Posts;