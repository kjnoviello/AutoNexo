const Menu = () => {
  return (
    <>
        <div className="show-menu">
            <a href="#" className="shadow-top-down">+</a>
        </div>
        <nav className="main-menu shadow-top-down">
            <ul className="nav nav-pills nav-stacked">
                <li><a href="#templatemo_home" className="scroll_effect">Home</a></li>
                <li><a href="#templatemo_features" className="scroll_effect">Features</a></li>
                <li><a href="#templatemo_download" className="scroll_effect">Download</a></li>
                <li><a href="http://www.facebook.com/templatemo" rel="nofollow" target="_parent">Fan Page</a></li>
                <li><a href="elements.html">Elements</a></li>
                <li><a href="#templatemo_contact" className="scroll_effect">Contact</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Menu