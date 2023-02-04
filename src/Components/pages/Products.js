import Footer from "../Files/Footer"
import Items from "../Files/Items"
import Nav from "../Files/Nav"
import Nav2 from "../Files/Nav2"

function Products() {
    return (
        <div className="products">
            <div>
                <Nav />
                <Nav2 />
                <section>
                    <Items />
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default Products