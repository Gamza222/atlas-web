import React from 'react'
import * as classes from './SignIn.module.scss'

export default function SignIn() {
  return (
    <section id="signIn" className={classes.signin}>
        <div className={classes.signin__container}>
            <h1>Sign In</h1>
            <p>For Existing Customers</p>
            <form>
              <div>
                <label htmlFor="emailSignIn">Email</label>
                <input type="text" id="emailSignIn" name="emailSignIn" required/>
              </div>
              <div>
                <label htmlFor="pwdSignIn">Password</label>
                <input type="text" id="pwdSignIn" name="pwdSignIn" required/>
              </div>
              <button>Sign In<input type="submit" id="submitSignIn" hidden/></button>
            </form>
        </div>
    </section>
  )
}
