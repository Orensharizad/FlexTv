import { Component } from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../assets/icon-libary";

export class MovieIndexHeader extends Component {


    state = {
        show: false
    }

    transtionHeader = () => {
        if (window.scrollY > 100) {
            this.setState({ show: true })
        } else {
            this.setState({ show: false })
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.transtionHeader)
    }

    componentWillUnmount = () => {

        window.addEventListener('scroll', this.transtionHeader)

    }

    render() {

        const { show } = this.state
        return (
            <section className={`movie-index-header ${show && 'header-black'}`} >
                <div className="header-content">
                    <Link to={'/movie'}>
                        <LogoIcon />
                    </Link>
                    <Link to={'/member'}>
                        <img src="https://res.cloudinary.com/dsvs2bgn4/image/upload/v1675364027/AAAABfMnIhIdkM8LdU5BZaYVaxoVTrMGzIjafPBzCQUwebzxeK7JKvcI7-Jm-5AituzcdJYIT_45NSkbbTwfVva-E01G9J1YVVBveA_sydo43.png" alt="avatar" />

                    </Link>
                </div>

            </section>
        )
    }
}