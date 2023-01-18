import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  // Enabled Redux-Devtools https://stackoverflow.com/a/63390909/8440230
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return {
    ...createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run,
  }
}
