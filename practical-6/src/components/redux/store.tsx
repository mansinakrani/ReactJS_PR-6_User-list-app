import { createStore } from "redux";
import rootReducer from "./reducers";


/*const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

export default store;

/* 

The most streamlined way to make this work with TypeScript is to use the redux-devtools-extension and install as a dev dependency as follows:

npm install --save-dev redux-devtools-extension

The next step for those new to redux and these developer tools was confusing and unclear. The docs all have code like the following:

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

The problem is I don't have any middleware configured so this wasn't working. In it's most primitive usage, this is all you need:

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(myReducer, composeWithDevTools());

At this point if you click the extension in the browser and there is a valid redux store, you will be able to inspect the state.

This is an alternative approach to using (window as any) and also clears up just exaclty how to use the redux-devtools-extension in its minimal form.
*/