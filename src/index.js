import React from 'react'
import ReactDOM from 'react-dom'

import 'firebase/firestore'
import {
    FirebaseAppProvider,
    useFirestoreDocData,
    useFirestore,
} from 'reactfire'

/**
 * Add your own Firebase config to watch the burrito status
 * update in real time!
 *
 * Once you add your config, go to the Firestore tab of the
 * Firebase console and create a collection called
 * "tryreactfire", and create a document inside that
 * collection called "burrito" with key "yummy"
 * and value "good" or "bad"
 */

const firebaseConfig = {
    apiKey: 'AIzaSyAl2jPwzbZTZUdZUHrWaRES_WWOnT11VPs',
    authDomain: 'react-firebase-example-b3bb2.firebaseapp.com',
    projectId: 'react-firebase-example-b3bb2',
    storageBucket: 'react-firebase-example-b3bb2.appspot.com',
    messagingSenderId: '197941033696',
    appId: '1:197941033696:web:ce4563976e1bbf8dd46e85',
}

function Burrito() {
    // easily access the Firestore library
    // const burritoRef = useFirestore().collection('tryreactfire').doc('YbetK526MFxnHH2e6siC')
    const burritoRef = useFirestore().doc('tryreactfire/YbetK526MFxnHH2e6siC/')

    // subscribe to a document for realtime updates. just one line!
    const { status, data } = useFirestoreDocData(burritoRef)

    // easily check the loading status
    if (status === 'loading') {
        return <p>Fetching burrito flavour...</p>
    }

    console.log(data)
    return <p>The burrito is {data.burrito.yummy ? 'good' : 'bad'}!</p>
}

function App() {
    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <h1>🌯</h1>
            <Burrito />
        </FirebaseAppProvider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
