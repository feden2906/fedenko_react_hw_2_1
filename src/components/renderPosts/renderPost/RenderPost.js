import React, {Component} from 'react';

class RenderPost extends Component {

  state = {
    showBody: null,
    btnText: 'Показати'
  }
  flag = false
  show = () => {
    if (this.flag) {
      this.setState({btnText: 'Показати'})
      this.setState({showBody: null})

    } else {
      this.setState({btnText: 'Згорнути'})
      this.setState({showBody: "show"})
    }
    this.flag = !this.flag
  }

  render() {
    const {post: {userId, title, body}} = this.props
    const {showBody, btnText} = this.state

    return (
        <div>
          <h2>Користувач №{userId}</h2>
          <div>
            <h3><b>{title}</b></h3>
            <button onClick={this.show}>{btnText}</button>
          </div>
          {showBody && <h4>{body}</h4>}
        </div>
    );
  }
}

export default RenderPost;