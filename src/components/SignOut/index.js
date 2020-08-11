import React from 'react';
import { withFirebase } from '../Firebase';
import '../css/styles.css';

const SignOutButton = ({ firebase }) => (
    <button type='button' onClick={firebase.doSignOut} className="btn-ghost">
      SignOut
    </button>
)

export default withFirebase(SignOutButton);
