import { Component } from 'react'
import { connect } from 'react-redux';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";


class _LoginSignup extends Component {

    state = {
        user: { email: '', password: '' }
    }


    onSignUp = async (ev) => {
        ev.preventDefault()
        const { email, password } = this.state.user
        try {
            const userAuth = await createUserWithEmailAndPassword(auth, email, password)
            const loggdinUser = {
                _id: userAuth.user.uid,
                email: userAuth.user.email
            }
            sessionStorage.setItem('loggdinUser', JSON.stringify(loggdinUser))
            this.props.history.push('/movie')


        } catch (err) {
            alert(err.message)
        }

    }

    onSignIn = async (ev) => {
        ev.preventDefault()
        const { email, password } = this.state.user
        try {
            const userAuth = await signInWithEmailAndPassword(auth, email, password)
            const loggdinUser = {
                _id: userAuth.user.uid,
                email: userAuth.user.email
            }
            sessionStorage.setItem('loggdinUser', JSON.stringify(loggdinUser))
            this.props.history.push('/movie')
        } catch (err) {
            alert(err.message)
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        this.setState(prevState => ({ user: { ...prevState.user, [field]: value } }))
    }

    render() {

        const { user } = this.state

        return (
            <section className="login-signup">

                <form >
                    <h3 className='login-title'>Sign in</h3>
                    <input
                        type="email"
                        placeholder='Email'
                        name='email'
                        value={user.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        onChange={this.handleChange}
                        value={user.password}

                    />
                    <button onClick={this.onSignIn}>Sign in</button>
                    <p className='signup-title'>
                        <span className='gray-span'>New to Netflix?</span>
                        <span onClick={this.onSignUp} className='sign-span'>Sign up now.</span>
                    </p>
                </form>

            </section>
        )
    }
}


export const LoginSignup = connect()(_LoginSignup)
