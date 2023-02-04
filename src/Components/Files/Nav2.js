import logo from "../images/Logo UncleReuben.png"
import profile_dp from "../images/boy.jpg"
import { IoLocation, IoCartOutline, IoList } from "react-icons/io5"
import { useContext, useState } from "react"
import { myContext } from "../../myContext"
import { Link } from "react-router-dom"
import { IoPersonOutline } from "react-icons/io5"
import CategoryList from "./CategoryList"
function Nav2() {

    const { login, setLogin, profilePics, cart, darkbg } = useContext(myContext)

    return (
        <div className="Nav2">
            <div className={darkbg ? "darkNav": null}>
                <nav className="navbar navbar-expand-lg nav">
                    <div className="container-fluid nav_flex">
                        <section className="nav2_logo">
                            <Link to="/" ><img src={logo} alt="logo" /></Link>
                        </section>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="nav-item dropdown collapse navbar-collapse" id="navbarSupportedContent">
                            <a className="nav-link text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className={darkbg ? "text-white": null} style={{ fontSize: "18px" }}><IoList /></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"><b>Categories</b></a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li> <Link className="categoty_li dropdown-item"><IoList /> <span className="ps-5 pe-5">Shawarma</span></Link> </li>
                                <li> <Link className="categoty_li dropdown-item"><IoList /> <span className="ps-5 pe-5">Bugger</span></Link> </li>
                                <li> <Link className="categoty_li dropdown-item"><IoList /> <span className="ps-5 pe-5">Pop Corn</span></Link> </li>
                                <li> <Link className="categoty_li dropdown-item"><IoList /> <span className="ps-5 pe-5">Pizza</span></Link> </li>
                                <li> <Link className="categoty_li dropdown-item"><IoList /> <span className="ps-5 pe-5">Smoothie</span></Link> </li>
                                <li> <Link className="categoty_li dropdown-item"><IoList /> <span className="ps-5 pe-5">Chicken & Fries</span></Link> </li>
                            </ul>
                        </div>
                        <div className="order_btn collapse navbar-collapse" id="navbarSupportedContent">
                            <Link to="/products" ><button className="btn btn-warning">Order Now</button></Link>
                        </div>
                        {
                            login && <div className="cart_in_nav">
                                <Link className="cart"><IoCartOutline /></Link>
                                <div className="cart_no">{cart}</div>
                            </div>
                        }

                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                        <section className="nav2_center">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <div className={!darkbg ? "nav_search": "nav_search input_darkmode2"}>
                                    <input type="text" placeholder="Search" />
                                </div>

                            </ul>
                        </section>

                        {
                            !login && <div>
                                <Link className={!darkbg ? "nav2_links": "nav2_links text-light"}>Sign in</Link>
                            </div>
                        }
                        {/* </div> */}

                        {
                            login && <section className="unmedia_profile d_flex">
                                <div className="nav-item dropdown">
                                    <a className={!darkbg ? "nav-link text-dark dropdown-toggle": "nav-link text-light dropdown-toggle"} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b>Mhatons</b>
                                        {/* <div className="nav2_profilImg">
                                            <img src={profilePics} alt="profile photo" />
                                        </div> */}
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
                        {/* </div> */}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav2