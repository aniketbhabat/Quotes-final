function Navbar()
{
    return (
        <nav>
            <div className="flex">
                <img src="https://flowbite.com/docs/images/logo.svg" />
                <h2>GeekFoods</h2>
            </div>

            <div className="flex" id="flex1">
                <p>Home</p>
                <p>Quote</p>
                <p>Resturants</p>
                <p>Foods</p>
                <p>Contact</p>
            </div>

            <button>Get Started</button>
        </nav>
    )
}

export default Navbar;