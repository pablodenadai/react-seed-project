//
// import { Provider } from 'react-redux'
// import { Router, Route } from 'react-router'
// import { createHistory } from 'history'
// import { syncReduxAndRouter } from 'redux-simple-router'
// import ReactDOM from 'react-dom'
// import React from 'react'
//
// import App from './containers/App'
// import configure from './store'
//
// const store = configure()
// const history = createHistory()
//
// syncReduxAndRouter(history, store)
//
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path="/" component={App}>
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )

import ReactDOM from 'react-dom'
import React from 'react'

import CommentBox from './components/CommentBox'

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('root')
);
