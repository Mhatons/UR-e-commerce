import { useContext } from "react"
import { myContext } from "../../myContext"
import { IoChatbubbleEllipsesOutline, IoPersonOutline, IoReceiptOutline } from "react-icons/io5"

import slide1 from "../images/1647019464547.jpeg"
import slide2 from "../images/Chicken-Shawarma.jpg"
import slide3 from "../images/download.jfif"
import slide4 from "../images/chips22.jpg"
import { Link } from "react-router-dom"

function AccountInfo() {
    const { profilePics, login, setLogin, darkbg } = useContext(myContext)
    
    return (
        <div>
            <center className={login ? "accountInfo": "accountInfo_null"}>
                {
                    login && <section>
                        <section>
                            <div><img src={profilePics} alt="" className="profilepics" /></div>
                            <b className="profilename">Hi, Tony</b>
                        </section>
                        <section className="account_banner text-dark">
                            <div>
                                <span> <IoPersonOutline /> </span>
                                <p>Account</p>
                            </div>
                            <div>
                                <span> <IoReceiptOutline /> </span>
                                <p>Orders</p>
                            </div>
                            <div>
                                <span> <IoChatbubbleEllipsesOutline /> </span>
                                <p>Messages</p>
                            </div>
                        </section>
                    </section>
                }

                {
                    !login && <section style={{paddingBottom: "1em"}}>
                        <section>
                            <div className="null_profile_pics"> <IoPersonOutline /> </div>
                            <b className="text-dark">Welcome to UncleReuben</b>
                        </section>
                        <section className="account_banner">
                            <div>
                                <button className="btn btn-danger ps-4 pe-4  rounded-pill">Register</button>
                            </div>
                            <div>
                                <button onClick={() => setLogin(true)} className="btn fw-semibold btn-light ps-4 pe-4 rounded-pill">sign in</button>
                            </div>
                        </section>
                    </section>
                }
                <section className="account_banner_slider">
                    <div className="acct_texts">
                        <p>Exclusive deals</p>
                        <b> A taste of good life begins with good Food.</b>
                        <b> A taste of good life begins with good Food.</b>
                    </div>
                    <div>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner p-1">
                                <div className="carousel-item active">
                                    <div className="account_images">
                                        <Link className="account_image">
                                            <img src={slide1} alt="..." />
                                            <b className="account_banner_price">NGN 3,500</b>
                                        </Link>
                                        <Link className="account_image">
                                            <img src={slide2} alt="..." />
                                            <b className="account_banner_price">NGN 1,700</b>
                                        </Link>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="account_images">
                                        <Link className="account_image">
                                            <img src={slide1} alt="..." />
                                            <b className="account_banner_price">NGN 3,500</b>
                                        </Link>
                                        <Link className="account_image">
                                            <img src={slide2} alt="..." />
                                            <b className="account_banner_price">NGN 1,700</b>
                                        </Link>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="account_images">
                                        <Link className="account_image">
                                            <img src={slide3} alt="..." />
                                            <b className="account_banner_price">NGN 3,500</b>
                                        </Link>
                                        <Link className="account_image">
                                            <img src={slide4} alt="..." />
                                            <b className="account_banner_price">NGN 1,700</b>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="account_images">
                            <div className="account_image">
                                <img src={slide1} alt="..." />
                                <b className="account_banner_price">NGN 3,500</b>
                            </div>
                            <div className="account_image">
                                <img src={slide2} alt="..." />
                                <b className="account_banner_price">NGN 1,700</b>
                            </div>
                        </div> */}

                    </div>


                </section>
            </center>
        </div>
    )
}

export default AccountInfo