import React from 'react';
import { render } from 'react-router';
import { Link } from 'react-router'
import Photo from './photo'
import Comments from './comment'

const Single = React.createClass({
  render() {
  	const i = this.props.posts.findIndex((post)=>post.code === this.props.params.postId);
  	const post = this.props.posts[i]
  	console.log(post);
    return (
        <div className="single-photo">
        	<Photo i={i} post={post} {...this.props}/>
        	<Comments />
        </div>

    )
  }
});

export default Single;
