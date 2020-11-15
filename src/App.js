import React, { useContext, useState } from "react";
import "./index.css";

import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

import { userContext } from "./userContext";

import { DropdownMenu } from "./components/dropdown-menu";

firebase.initializeApp({
    apiKey: "AIzaSyCV82xQgfs0vZXXt6XDKuuTXq-jdsbLzoQ",
    authDomain: "tyee-coding-club.firebaseapp.com",
    databaseURL: "https://tyee-coding-club.firebaseio.com",
    projectId: "tyee-coding-club",
    storageBucket: "tyee-coding-club.appspot.com",
    messagingSenderId: "707673708723",
    appId: "1:707673708723:web:8701716da03a5ebc1bf8c6",
    measurementId: "G-9C76EKGX19",
});

const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <h1>Loading</h1>;
    }

    return (
        <userContext.Provider value={user}>
            <div className="App">{user ? <Content /> : <SignIn />}</div>
        </userContext.Provider>
    );
}

function Content() {
    const user = useContext(userContext);
    return (
        <div>
            <Navbar>
                <NavItem icon={<PlusIcon />} />
                <NavItem icon={<BellIcon />} />
                <NavItem icon={<MessengerIcon />} />

                <Avatar icon={<img src={user.photoURL}></img>}>
                    <DropdownMenu>
                        <div primary name="main">
                            <div
                                leftIcon={
                                    <ProlefilePicture
                                        user={user}
                                        imageClassName="icon-button-profile"
                                    />
                                }
                            >
                                My Profile
                            </div>
                            <div
                                leftIcon={<CogIcon />}
                                rightIcon={<ChevronIcon />}
                                goToMenu="settings"
                            >
                                Settings
                            </div>
                            <div
                                leftIcon="🦧"
                                rightIcon={<ChevronIcon />}
                                goToMenu="animals"
                            >
                                Animals
                            </div>
                            <div click={SignOut}>Logout</div>
                        </div>

                        <div name="settings">
                            <div goToMenu="main" leftIcon={<ArrowIcon />}>
                                <h4>Settings</h4>
                            </div>
                            <div leftIcon={<BoltIcon />}>Appearance</div>
                        </div>

                        <div name="animals">
                            <div goToMenu="main" leftIcon={<ArrowIcon />}>
                                <h4>Animals</h4>
                            </div>
                            <div leftIcon={<BoltIcon />}>HTML</div>
                        </div>
                    </DropdownMenu>
                </Avatar>
            </Navbar>
            <div className="content">
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quas consequuntur voluptate nam assumenda ipsa ea laboriosam
                    consequatur reprehenderit sunt excepturi nulla iusto id
                    doloribus ut illum officia alias dignissimos amet, quibusdam
                    commodi ducimus minima harum. Adipisci voluptatem blanditiis
                    consequuntur laboriosam praesentium, vel unde repudiandae.
                    Unde optio earum possimus est laborum vero aspernatur, quas
                    rerum reiciendis ex officiis officia itaque labore autem
                    quia obcaecati repudiandae aperiam qui, et dolore dolorem
                    impedit iste atque sunt. Ipsum sequi culpa sapiente
                    suscipit? Atque, tempora excepturi! Consequatur accusantium
                    sed distinctio enim alias mollitia eius voluptates velit
                    rerum. Rem fugit magni deleniti quisquam quo dignissimos
                    eum? Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Quas consequuntur voluptate nam assumenda ipsa ea
                    laboriosam consequatur reprehenderit sunt excepturi nulla
                    iusto id doloribus ut illum officia alias dignissimos amet,
                    quibusdam commodi ducimus minima harum. Adipisci voluptatem
                    blanditiis consequuntur laboriosam praesentium, vel unde
                    repudiandae. Unde optio earum possimus est laborum vero
                    aspernatur, quas rerum reiciendis ex officiis officia itaque
                    labore autem quia obcaecati repudiandae aperiam qui, et
                    dolore dolorem impedit iste atque sunt. Ipsum sequi culpa
                    sapiente suscipit? Atque, tempora excepturi! Consequatur
                    accusantium sed distinctio enim alias mollitia eius
                    voluptates velit rerum. Rem fugit magni deleniti quisquam
                    quo dignissimos eum? Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Quas consequuntur voluptate nam assumenda
                    ipsa ea laboriosam consequatur reprehenderit sunt excepturi
                    nulla iusto id doloribus ut illum officia alias dignissimos
                    amet, quibusdam commodi ducimus minima harum. Adipisci
                    voluptatem blanditiis consequuntur laboriosam praesentium,
                    vel unde repudiandae. Unde optio earum possimus est laborum
                    vero aspernatur, quas rerum reiciendis ex officiis officia
                    itaque labore autem quia obcaecati repudiandae aperiam qui,
                    et dolore dolorem impedit iste atque sunt. Ipsum sequi culpa
                    sapiente suscipit? Atque, tempora excepturi! Consequatur
                    accusantium sed distinctio enim alias mollitia eius
                    voluptates velit rerum. Rem fugit magni deleniti quisquam
                    quo dignissimos eum? Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Quas consequuntur voluptate nam assumenda
                    ipsa ea laboriosam consequatur reprehenderit sunt excepturi
                    nulla iusto id doloribus ut illum officia alias dignissimos
                    amet, quibusdam commodi ducimus minima harum. Adipisci
                    voluptatem blanditiis consequuntur laboriosam praesentium,
                    vel unde repudiandae. Unde optio earum possimus est laborum
                    vero aspernatur, quas rerum reiciendis ex officiis officia
                    itaque labore autem quia obcaecati repudiandae aperiam qui,
                    et dolore dolorem impedit iste atque sunt. Ipsum sequi culpa
                    sapiente suscipit? Atque, tempora excepturi! Consequatur
                    accusantium sed distinctio enim alias mollitia eius
                    voluptates velit rerum. Rem fugit magni deleniti quisquam
                    quo dignissimos eum? Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Quas consequuntur voluptate nam assumenda
                    ipsa ea laboriosam consequatur reprehenderit sunt excepturi
                    nulla iusto id doloribus ut illum officia alias dignissimos
                    amet, quibusdam commodi ducimus minima harum. Adipisci
                    voluptatem blanditiis consequuntur laboriosam praesentium,
                    vel unde repudiandae. Unde optio earum possimus est laborum
                    vero aspernatur, quas rerum reiciendis ex officiis officia
                    itaque labore autem quia obcaecati repudiandae aperiam qui,
                    et dolore dolorem impedit iste atque sunt. Ipsum sequi culpa
                    sapiente suscipit? Atque, tempora excepturi! Consequatur
                    accusantium sed distinctio enim alias mollitia eius
                    voluptates velit rerum. Rem fugit magni deleniti quisquam
                    quo dignissimos eum? Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Quas consequuntur voluptate nam assumenda
                    ipsa ea laboriosam consequatur reprehenderit sunt excepturi
                    nulla iusto id doloribus ut illum officia alias dignissimos
                    amet, quibusdam commodi ducimus minima harum. Adipisci
                    voluptatem blanditiis consequuntur laboriosam praesentium,
                    vel unde repudiandae. Unde optio earum possimus est laborum
                    vero aspernatur, quas rerum reiciendis ex officiis officia
                    itaque labore autem quia obcaecati repudiandae aperiam qui,
                    et dolore dolorem impedit iste atque sunt. Ipsum sequi culpa
                    sapiente suscipit? Atque, tempora excepturi! Consequatur
                    accusantium sed distinctio enim alias mollitia eius
                    voluptates velit rerum. Rem fugit magni deleniti quisquam
                    quo dignissimos eum? Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Quas consequuntur voluptate nam assumenda
                    ipsa ea laboriosam consequatur reprehenderit sunt excepturi
                    nulla iusto id doloribus ut illum officia alias dignissimos
                    amet, quibusdam commodi ducimus minima harum. Adipisci
                    voluptatem blanditiis consequuntur laboriosam praesentium,
                    vel unde repudiandae. Unde optio earum possimus est laborum
                    vero aspernatur, quas rerum reiciendis ex officiis officia
                    itaque labore autem quia obcaecati repudiandae aperiam qui,
                    et dolore dolorem impedit iste atque sunt. Ipsum sequi culpa
                    sapiente suscipit? Atque, tempora excepturi! Consequatur
                    accusantium sed distinctio enim alias mollitia eius
                    voluptates velit rerum. Rem fugit magni deleniti quisquam
                    quo dignissimos eum? Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Quas consequuntur voluptate nam assumenda
                    ipsa ea laboriosam consequatur reprehenderit sunt excepturi
                    nulla iusto id doloribus ut illum officia alias dignissimos
                    amet, quibusdam commodi ducimus minima harum. Adipisci
                    voluptatem blanditiis consequuntur laboriosam praesentium,
                    vel unde repudiandae. Unde optio earum possimus est laborum
                    vero aspernatur, quas rerum reiciendis ex officiis officia
                    itaque labore autem quia obcaecati repudiandae aperiam qui,
                    et dolore dolorem impedit iste atque sunt. Ipsum sequi culpa
                    sapiente suscipit? Atque, tempora excepturi! Consequatur
                    accusantium sed distinctio enim alias mollitia eius
                    voluptates velit rerum. Rem fugit magni deleniti quisquam
                    quo dignissimos eum?
                </div>
            </div>
        </div>
    );
}

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <button className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </button>

            {open && props.children}
        </li>
    );
}

function Avatar(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-item">
            <button
                className="icon-button icon-button-profile"
                onClick={() => setOpen(!open)}
            >
                {props.icon}
            </button>

            {open && props.children}
        </li>
    );
}

function ProlefilePicture(props) {
    return <img src={props.user.photoURL}></img>;
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };

    return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function SignOut() {
    auth.signOut();
}

export default App;
