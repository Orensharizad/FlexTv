import { Component } from "react";
import { MovieIndexHeader } from "./MovieIndexHeader";

export class UserProfile extends Component {

    state = {
        loggdinUser: null
    }

    componentDidMount = () => {
        this.setLoggdinUser()
    }

    setLoggdinUser = () => {
        const user = JSON.parse(sessionStorage.getItem("loggdinUser"))
        this.setState({ loggdinUser: user })

    }

    onLogout = () => {
        sessionStorage.removeItem('loggdinUser')
        this.props.history.push('/')

    }

    render() {
        const { loggdinUser } = this.state
        if (!loggdinUser) return <div>loadin...</div>

        return (
            <section className='user-profile' >
                <MovieIndexHeader />

                <div className="profile-container">
                    <h3 className="profile-title">Edit Profile</h3>
                    <div className="profile-card">
                        <img src="https://res.cloudinary.com/dsvs2bgn4/image/upload/v1675364027/AAAABfMnIhIdkM8LdU5BZaYVaxoVTrMGzIjafPBzCQUwebzxeK7JKvcI7-Jm-5AituzcdJYIT_45NSkbbTwfVva-E01G9J1YVVBveA_sydo43.png" alt="" />
                        <div className="profile-content">
                            <p className="user-email">{loggdinUser.email}</p>
                            <div className="plans-container">
                                <h3 className="plans-title">
                                    Plans(Current Plan: Premium)
                                </h3>
                            </div>
                            <div className="subscribe-container">
                                <div className="subscribe-title">Netflix standart</div>
                                <button className="btn-subscribe">Subscribe</button>
                            </div>
                            <div className="subscribe-container">
                                <div className="subscribe-title">Netflix basic</div>
                                <button className="btn-subscribe">Subscribe</button>
                            </div>
                            <div className="subscribe-container">
                                <div className="subscribe-title">Netflix premium</div>
                                <button className="btn-subscribe">Subscribe</button>
                            </div>
                            <button onClick={this.onLogout} className="btn-signout">Sign Out</button>
                        </div>

                    </div>
                </div>

            </section>
        )
    }
}

