import item1 from "../images/Strawberry_smoothie_blog_lg.jpg"
import item2 from "../images/strawberrysmoothie.jpg"
import item3 from "../images/Easy-Homemade-Chicken-Shawarma39.jpg"
import { useContext, useState } from "react"
import { IoGrid, IoInvertModeSharp, IoInvertMode } from "react-icons/io5"
import { BsFillGrid1X2Fill } from "react-icons/bs"
import { myContext } from "../../myContext"
function Items() {

    const { grid, setGrid, darkbg } = useContext(myContext)

    return (
        <div className={darkbg ? "darkMode" : null}>
            <div className="items_body">
                <div className="items_header">
                    <div>Amazing Deals on all Products</div>
                    <div className="items_grid_icons">
                        {
                            !grid && <div onClick={() => setGrid(true)} className="item_grid1"><IoGrid />
                                <p className="item_grid1_txt">Uniform view</p>
                            </div>

                        }
                        {
                            grid && <div onClick={() => setGrid(false)} className="item_grid2"><BsFillGrid1X2Fill />
                                <p className="item_grid2_txt">Un-uniform view</p>
                            </div>
                        }
                    </div>
                </div>
                <div className={!grid ? "items" : "items_grid"}>
                    <div className="item">
                        <div className="item_image">
                            <img src={item1} alt="item" />
                            <div className="buyItem_btn_bg">
                                <div className="buyItem_btn">
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className={!grid ? "item_details" : "items_grid_details"}>
                            <div className="item_title">Yummy Chicken Shawarma</div>
                            <b>N1,599</b>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item_image">
                            <img src={item2} alt="item" />
                            <div className="buyItem_btn_bg">
                                <div className="buyItem_btn">
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className={!grid ? "item_details" : "items_grid_details"}>
                            <div className="item_title">Yummy Chicken Shawarma</div>
                            <b>N1,599</b>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item_image">
                            <img src={item3} alt="item" />
                            <div className="buyItem_btn_bg">
                                <div className="buyItem_btn">
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className={!grid ? "item_details" : "items_grid_details"}>
                            <div className="item_title">Yummy Chicken Shawarma</div>
                            <b>N1,599</b>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item_image">
                            <img src={item1} alt="item" />
                            <div className="buyItem_btn_bg">
                                <div className="buyItem_btn">
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className={!grid ? "item_details" : "items_grid_details"}>
                            <div className="item_title">Yummy Chicken Shawarma</div>
                            <b>N1,599</b>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item_image">
                            <img src={item2} alt="item" />
                            <div className="buyItem_btn_bg">
                                <div className="buyItem_btn">
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className={!grid ? "item_details" : "items_grid_details"}>
                            <div className="item_title">Yummy Chicken Shawarma</div>
                            <b>N1,599</b>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item_image">
                            <img src={item3} alt="item" />
                            <div className="buyItem_btn_bg">
                                <div className="buyItem_btn">
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className={!grid ? "item_details" : "items_grid_details"}>
                            <div className="item_title">Yummy Chicken Shawarma</div>
                            <b>N1,599</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items