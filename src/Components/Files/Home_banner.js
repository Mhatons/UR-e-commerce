import { useState } from "react"
import AccountInfo from "./AccountInfo"
import CategoryList from "./CategoryList"
import HomeSilder from "./HomeSlider"

import img1 from "../images/Chicken-Shawarma.jpg"
import img2 from "../images/maxresdefault.jpg"
import img3 from "../images/smoothiebr.jpg"
import img4 from "../images/pizza.webp"
import img5 from "../images/FourSmoothie.webp"

import { Link } from "react-router-dom"
import { useContext } from "react"
import { myContext } from "../../myContext"

function Home_banner() {

    const { darkbg } = useContext(myContext)
    const [bridge, setBridge] = useState(false)

    return (
        <div className={darkbg ? "darkMode" : null}>
           
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <center className="homeBanner">
                <section className="row">
                    <div className="col-lg-3">
                        <CategoryList />
                    </div>
                    <div className="col-lg-6">
                        <HomeSilder />
                    </div>
                    <div className="col-lg-3">
                        <AccountInfo />
                    </div>
                </section>
                <section className="home_bridge">
                    <h3><span className="text-white">UncleReuben</span> <span className="text-warning">Restaurant & Grills</span></h3>
                    <div className="bridgeImages">
                    </div>
                </section>

                <section style={{ padding: "10em 0em" }}>
                    <div className="homeProduct_sect">
                        <section className="homeProduct_img">
                            <img src={img1} alt="" />
                            <div className="btn_shop">
                                <Link to="/products" style={{ textDecoration: "none" }}><button>Shop now</button></Link>
                            </div>
                        </section>
                        <section className="homeProduct_txt">
                            <h2>Tasty Chicken Shawarma with 2 & 1 Yummy! sausages to suit your appettite at affordable Price</h2>
                            <p>
                                First time order in our app special? <Link className="link_black">Order</Link> our most sort after Shawarma package today and get free delivery to any location of your choice.
                            </p>
                            <div>
                                *$15 minimum purchase required. Only valid on first McDelivery order in the app. Offer valid 1x from 1/30/23 thru 2/19/23 at participating McDonald's. May take up to 48 hours to
                                appear in your deals. Delivery prices may be higher than at restaurants. Must be opted into MyMcDonald's Rewards.
                            </div>
                            <div className="homeProduct_btn">
                                <div><Link to="/products" ><button>See More</button></Link></div>
                            </div>
                        </section>
                    </div>

                    <div className="homeProduct_sect">
                        <section className="homeProduct_img">
                            <img src={img2} alt="" />
                            <div className="btn_shop">
                                <Link to="/products" style={{ textDecoration: "none" }}><button>Shop now</button></Link>
                            </div>
                        </section>
                        <section className="homeProduct_txt">
                            <h2>Tasty Chicken Shawarma with 2 & 1 Yummy! sausages to suit your appettite at affordable Price</h2>
                            <p>
                                First time order in our app special? <Link className="link_black">Order</Link> our most sort after Shawarma package today and get free delivery to any location of your choice.
                            </p>
                            <div>
                                *$15 minimum purchase required. Only valid on first McDelivery order in the app. Offer valid 1x from 1/30/23 thru 2/19/23 at participating McDonald's. May take up to 48 hours to
                                appear in your deals. Delivery prices may be higher than at restaurants. Must be opted into MyMcDonald's Rewards.
                            </div>
                            <div className="homeProduct_btn">
                                <div><Link to="/products" ><button>See More</button></Link></div>
                            </div>
                        </section>
                    </div>

                    <div className="homeProduct_sect">
                        <section className="homeProduct_img">
                            <img src={img3} alt="" />
                            <div className="btn_shop">
                                <Link to="/products" style={{ textDecoration: "none" }}><button>Shop now</button></Link>
                            </div>
                        </section>
                        <section className="homeProduct_txt">
                            <h2>Tasty Chicken Shawarma with 2 & 1 Yummy! sausages to suit your appettite at affordable Price</h2>
                            <p>
                                First time order in our app special? <Link className="link_black">Order</Link> our most sort after Shawarma package today and get free delivery to any location of your choice.
                            </p>
                            <div>
                                *$15 minimum purchase required. Only valid on first McDelivery order in the app. Offer valid 1x from 1/30/23 thru 2/19/23 at participating McDonald's. May take up to 48 hours to
                                appear in your deals. Delivery prices may be higher than at restaurants. Must be opted into MyMcDonald's Rewards.
                            </div>
                            <div className="homeProduct_btn">
                                <div><Link to="/products" ><button>See More</button></Link></div>
                            </div>
                        </section>
                    </div>

                    <div className="homeProduct_sect">
                        <section className="homeProduct_img">
                            <img src={img4} alt="" />
                            <div className="btn_shop">
                                <Link to="/products" style={{ textDecoration: "none" }}><button>Shop now</button></Link>
                            </div>
                        </section>
                        <section className="homeProduct_txt">
                            <h2>Tasty Chicken Shawarma with 2 & 1 Yummy! sausages to suit your appettite at affordable Price</h2>
                            <p>
                                First time order in our app special? <Link className="link_black">Order</Link> our most sort after Shawarma package today and get free delivery to any location of your choice.
                            </p>
                            <div>
                                *$15 minimum purchase required. Only valid on first McDelivery order in the app. Offer valid 1x from 1/30/23 thru 2/19/23 at participating McDonald's. May take up to 48 hours to
                                appear in your deals. Delivery prices may be higher than at restaurants. Must be opted into MyMcDonald's Rewards.
                            </div>
                            <div className="homeProduct_btn">
                                <div><Link to="/products" ><button>See More</button></Link></div>
                            </div>
                        </section>
                    </div>

                    <div className="homeProduct_sect">
                        <section className="homeProduct_img">
                            <img src={img5} alt="" />
                            <div className="btn_shop">
                                <Link to="/products" style={{ textDecoration: "none" }}><button>Shop now</button></Link>
                            </div>
                        </section>
                        <section className="homeProduct_txt">
                            <h2>Tasty Chicken Shawarma with 2 & 1 Yummy! sausages to suit your appettite at affordable Price</h2>
                            <p>
                                First time order in our app special? <Link className="link_black">Order</Link> our most sort after Shawarma package today and get free delivery to any location of your choice.
                            </p>
                            <div>
                                *$15 minimum purchase required. Only valid on first McDelivery order in the app. Offer valid 1x from 1/30/23 thru 2/19/23 at participating McDonald's. May take up to 48 hours to
                                appear in your deals. Delivery prices may be higher than at restaurants. Must be opted into MyMcDonald's Rewards.
                            </div>
                            <div className="homeProduct_btn">
                                <div><Link to="/products" ><button>See More</button></Link></div>
                            </div>
                        </section>
                    </div>
                </section>
            </center>
        </div>
    )
}

export default Home_banner