import { Link } from 'react-router-dom'

const Navbar = () => {
    // Link to home page
    return (
        <header>
            <div className="container">
                <Link to="/">   
                    <h1>Basto's Brownlow Buddy</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar