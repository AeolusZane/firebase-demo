import React, { Component } from 'react';
import Posts from './Posts';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utils';
class Application extends Component {
  state = {
    posts: [],
  };

  unsubscribe = null;

  handleCreate = async post => {
    const { posts } = this.state;

    const docRef = await firestore.collection('posts').add(post);
    const doc = await docRef.get();

    const newPost = collectIdsAndDocs(doc);

    this.setState({ posts: [newPost, ...posts] });
  };

  // componentWillUnmount = () => {
  //   this.unsubscribe?.();
  // }

  componentDidMount = async () => {
    // this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
    //   const posts = snapshot.docs.map(collectIdsAndDocs);
    //   this.setState({ posts });
    // });

    const snapshot = await firestore.collection('posts').get();

    const posts = snapshot.docs.map(collectIdsAndDocs);

    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} onCreate={this.handleCreate} />
      </main>
    );
  }
}

export default Application;
