import logo from "../images/Logo UncleReuben.png"
import profile_dp from "../images/boy.jpg"
import { IoLocation, IoCartOutline, IoInvertModeSharp, IoInvertMode } from "react-icons/io5"
import { useContext, useState } from "react"
import { myContext } from "../../myContext"
import { Link } from "react-router-dom"
import Nav2 from "./Nav2"
function Nav() {

    const { login, setLogin, profilePics, cart, darkbg, setDarkbg } = useContext(myContext)

    return (
        <div>
            <div className="mode_changer">
                {
                    !darkbg && <div className="darkmode" onClick={() => setDarkbg(true)}><IoInvertMode />
                        <p className="light_txt">Night mode</p>
                    </div>
                }
                {
                    darkbg && <div className="lightmode" onClick={() => setDarkbg(false)}><IoInvertMode />
                        <p className="night_txt">Light mode</p>
                    </div>

                }


            </div>

            <nav className={darkbg ? "nav_header_unbox" : "nav_header"}>
                <div className={darkbg ? "darkNav" : null}>
                    <nav className="navbar navbar-expand-lg nav">
                        <div className="container-fluid nav_flex">
                            <section className="logo">
                                <Link to="/" ><img src={logo} alt="logo" /></Link>
                            </section>
                            {
                                login && <section className="media_profile d_flex">
                                    <div className="nav-item dropdown">
                                        <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="profile_img">
                                                <img src={profilePics} alt="profile photo" />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><a className="dropdown-item" href="#"><div className="point" onClick={() => setLogin(false)}>Sign out</div></a></li>
                                        </ul>
                                    </div>
                                </section>
                            }
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <section className="nav_center">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className={darkbg ? "nav-link text-light" : "nav-link"} href="#">About Us</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className={darkbg ? "nav-link dropdown-toggle text-light" : "nav-link"} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Our Menu
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={darkbg ? "nav-link text-light" : "nav-link"}>About Our products</Link>
                                        </li>
                                    </ul>

                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to="/products" ><button className="btn btn-warning">Order Now</button></Link>
                                        </li>
                                        {
                                            !login && <li className="nav-item">
                                                <a className={darkbg ? "nav-link point text-light" : "point nav-link"}  data-bs-toggle="modal" data-bs-target="#exampleModal"><span className="signin">Sign in</span></a>


                                                {/* <!-- Button trigger modal --> */}
                                              
                                            </li>

                                        }
                                        {
                                            login && <section className="locate">
                                                <Link>Location <span className="text-danger"><IoLocation /></span></Link>
                                                <div className="cart_in_nav">
                                                    <Link className="cart"><IoCartOutline /></Link>
                                                    <div className="cart_no">{cart}</div>
                                                </div>
                                            </section>
                                        }
                                    </ul>
                                </section>
                                <div className={!darkbg ? "nav1_search" : "nav1_search input_darkmode"}>
                                    <input type="text" placeholder="Search" className="" />
                                </div>
                                {
                                    !login && <section className="locate">
                                        <div>Location <span className="text-danger"><IoLocation /></span></div>
                                    </section>
                                }
                                {
                                    login && <section className="unmedia_profile d_flex">
                                        <div className="nav-item dropdown">
                                            <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div className="profile_img">
                                                    <img src={profilePics} alt="profile photo" />
                                                </div>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                <li><a className="dropdown-item" href="#"><div className="point" onClick={() => setLogin(false)}>Sign out</div></a></li>
                                            </ul>
                                        </div>
                                    </section>
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default Nav