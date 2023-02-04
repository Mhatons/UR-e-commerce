import { useContext } from "react"
import { IoList } from "react-icons/io5"
import { Link } from "react-router-dom"
import { myContext } from "../../myContext"
function CategoryList(){
    const {darkbg} = useContext(myContext)
    return(
        <div className={!darkbg ? "category_header": "category_header2"}>
            <ul className="categoty_ul">
                <> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <b>Categories</b></Link> </>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Shawarma</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Bugger</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Pop Corn</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Pizza</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Smoothie</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Chicken & Fries</span></Link> </li>
                
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Chicken & Fries</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Chicken & Fries</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Chicken & Fries</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Chicken & Fries</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Chicken & Fries</span></Link> </li>
                <li> <Link className={!darkbg ? "categoty_li": "categoty_li2"}><IoList /> <span>Chicken & Fries</span></Link> </li>
            </ul>
        </div>
    )
}

export default CategoryList