import React from 'react'
import { render } from 'react-snapshot'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'

// First render if React snapshot
declare global { interface Window { reactSnapshotRender: any; }}
const isReactSnapshot = navigator.userAgent.match(/Node\.js/i) && window && window.reactSnapshotRender
if (isReactSnapshot) render(<></>, document.getElementById('root'))

// Main, delayed render, seen by react-snapshot, data from remote json
axios.get('http://wp/wp-json/magikcraft/collection_by_slug?slug=mct1')
    .then(({data}) => {
        console.log('fetched data', data)
        render(
            <App data={data}/>,
            document.getElementById('root')
        );
    })
    .catch(err => {
        console.log('err', err)
        render(
            <><h1>Error:</h1><pre>{JSON.stringify(err, null, 4)}</pre></>,
            document.getElementById('root')
        );
    })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()