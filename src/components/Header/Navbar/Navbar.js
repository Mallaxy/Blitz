import React from "react";
import s from './Navbar.module.css'

class Navbar extends React.Component {
    render() {
        return (
            <nav className={s.navbar}>
                <a className={s.link} href="#">
                    <span className={s.subtitle}>Homepage</span>
                    <span className={s.title}>Home</span>
                </a>
                <a className={s.link} href="#">
                    <span className={s.subtitle}>Who we are?</span>
                    <span className={s.title}>About</span>
                </a>
                <a className={s.link} href="#">
                    <span className={s.subtitle}>My portfolio</span>
                    <span className={s.title}>Projects</span>
                </a>
                <a className={s.link} href="#">
                    <span className={s.subtitle}>Latest news</span>
                    <span className={s.title}>Blog</span>
                </a>
                <a className={s.link} href="#">
                    <span className={s.subtitle}>Get in touch</span>
                    <span className={s.title}>Contact</span>
                </a>
            </nav>
        )
    }
}

export default Navbar