function Header() {
    return (
        <header>
            <div className='header'>
                <h2>SimCinema</h2>
                <nav className='nav'>
                    <select>
                        <option value="">Select Language</option>
                        <option value='Hinid'>Hindi</option>
                        <option value="English">English</option>
                    </select>
                    <input placeholder='Search' type='text' />
                </nav>
            </div>
        </header>
    )
}
export default Header;