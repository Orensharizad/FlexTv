import { NavLink, withRouter } from 'react-router-dom'
import { LogoIcon } from '../assets/icon-libary'

function _AppHeader(props) {


    return (
        <header className="app-header ">
            <div className="logo"><LogoIcon /></div>
        </header>
    )
}


export const AppHeader = withRouter(_AppHeader)

