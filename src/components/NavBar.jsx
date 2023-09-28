import CartWidget from "./CartWidget"

const NavBar = () => {

    return (
        <section>
            <h1>MaPro</h1>
            <nav>
                <a href="#">Productos</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <CartWidget/>
            </nav>
        </section>
    )
}

export default NavBar