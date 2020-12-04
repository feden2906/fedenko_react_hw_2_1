import React, {Component} from 'react';
import './RenderPosts.css'
import RenderPost from "./renderPost/RenderPost";

class RenderPosts extends Component {

  state = {posts: []}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
          this.setState({posts: value})
        })
  }

  render() {
    const {posts} = this.state
    return (
        <div>
          <h1 className='center'><b>СПИСОК ВСІХ ПОСТІВ</b></h1>
          <div>
            {posts.map(value => {
              const {id, ...allProps} = value
              return <RenderPost post={allProps} key={id}/>
            })}
          </div>
        </div>
    );
  }
}

export default RenderPosts;