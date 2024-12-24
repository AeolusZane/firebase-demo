import React from 'react'
import Post from './Post';
import AddPost from './AddPost';
import { PostsContext } from '../providers/PostsProvider';

const Posts = ({ posts, onCreate }) => {
  return (
    <section className="Posts">
      <AddPost onCreate={onCreate} />
      {posts.map(post => <Post {...post} key={post.id} />)}
      {/* <PostsContext.Consumer>
        {posts => {
          return posts.map(post => <Post {...post} key={post.id} />)
        }}
      </PostsContext.Consumer> */}
    </section>
  )
}

export default Posts;






function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withPosts = Component => props => {
  const WrappedComponent = props => (
    <PostsContext.Consumer>
      {posts => <Component {...props} posts={posts} />}
    </PostsContext.Consumer>)
  WrappedComponent.displayName = `WithPosts(${getDisplayName(Component)})`
  return <WrappedComponent {...props} />
}
