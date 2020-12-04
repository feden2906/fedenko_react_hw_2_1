import React, {Component} from 'react';
import './App.css'
import RenderPosts from "./renderPosts/RenderPosts";

class App extends Component {

  state = {posts: []}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
          this.setState({posts: value})
        })
  }

  render() {
    return (
        <div className='appWrapper'>
          <RenderPosts posts={this.state.posts}/>
        </div>
    );
  }
}

export default App;