import reducer from './reduvers/'
import {createStore } from 'redux'

export default function configureStore(){
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
         window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}