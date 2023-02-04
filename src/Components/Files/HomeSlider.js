// import slide1 from "../images/maxresdefault.jpg"
import slide1 from "../images/9-Nourishing-Post-Workout-Smoothies-to-Speed-Recovery-800x506.jpg"
import slide2 from "../images/smoothiebr.jpg"
import slide3 from "../images/Easiest-Pizza_22-2_11.jpg"
import img from "../images/rb.jpg"
import { Link } from "react-router-dom"
function HomeSilder() {
    return (
        <div>
            <div className="">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="menu_ul">
                        <div> <Link className="menu_list">Super deals</Link> </div>
                        <div> <Link className="menu_list">Soft refreshments</Link> </div>
                        <div> <Link className="menu_list">Yummy delicacies</Link> </div>
                        <div> <Link className="menu_list">Order Now</Link> </div>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active img_header">
                            <img src={slide1} alt="..."/>
                        </div>
                        <div className="carousel-item img_header">
                            <img src={slide2} alt="..."/>
                        </div>
                        <div className="carousel-item img_header">
                            <img src={slide3} alt="..."/>
                        </div>
                    </div>
                </div>

                <div className="banner_img">
                    <img src={img} alt="..."  />
                </div>
            </div>

        </div>
    )
}

export default HomeSilder