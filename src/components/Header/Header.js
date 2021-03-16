import React from 'react'
import Navbar from "./Navbar/Navbar";
import s from "./Header.module.css"

class Header extends React.Component {
    render() {
        return (
            <div className={s.header}>
                <div className={s.logo}>
                    Blitz
                </div>
                <div className={s.navbar}>
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default Header