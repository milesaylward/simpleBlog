import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsIndex from './components/post_index';
import PostNew from './components/new_posts';
import PostsShow from './components/posts_show';


export default (
<Route path='/blog/index.html' component={App}>
  <IndexRoute component={PostsIndex} />
  <Route path="/blog/posts/new" component={PostNew} />
  <Route path='/blog/posts/:id' component={PostsShow} />
</Route>
)
