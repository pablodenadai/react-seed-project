import React, { Component } from 'react'

import Comment from '../Comment'

export default class CommentList extends Component {
  commentNodes(data){
    return data.map(function(comment) {
      return (
        <Comment author={ comment.author } key={ comment.id }>
          { comment.text }
        </Comment>
      )
    })
  }

  render() {
    return (
      <div className="commentList">
        { this.commentNodes(this.props.data) }
      </div>
    )
  }
}
