const Navbar = ({name}) => {
    return (
        <ul>
            <li>Home</li>
            <li>Blogs</li>
            <li>About</li>
            <li>{name}</li>
        </ul>
    )
}

export default Navbar;