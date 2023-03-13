import { Component } from 'react'
import { LogoIcon } from '../assets/icon-libary'
import { connect } from 'react-redux';
import { LoginSignup } from '../cmps/LoginSignup';




class _HomePage extends Component {

    state = {
        isSignIn: false
    }

    componentDidMount = () => {
        const loggdinUser = JSON.parse(sessionStorage.getItem("loggdinUser"))
        if (loggdinUser) {
            this.props.history.push('/movie')
        }
    }


    setIsLogin = (diff) => {
        this.setState({ isSignIn: diff })
    }

    render() {
        const { isSignIn } = this.state

        return (
            <section className="home-page">
                <div className='home-page-header '>
                    <div onClick={() => this.setIsLogin(false)} className="logo"><LogoIcon /></div>
                    <button onClick={() => this.setIsLogin(true)} className='btn-sign-in'>Sign In</button>
                </div>

                {!isSignIn ?

                    <div className='home-page-content'>
                        <h1 className='content-title'>Unlimited movies, TV shows, and more.</h1>
                        <h3 className='content-subtitle'>Watch anywhere. Cancel anytime.</h3>
                        <h3>
                            Ready to watch? Enter your email to create or restart your membership.
                        </h3>
                        <button onClick={() => this.setIsLogin(true)} className='content-btn'>
                            Get Started
                        </button>
                    </div>

                    : <LoginSignup history={this.props.history} />
                }


            </section>
        )
    }
}

export const HomePage = connect()(_HomePage)