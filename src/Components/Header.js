
const Header = () => {
  return (
    <div className="navbar">
      <div className="nav-images">
        <img
          className="nav-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKo8o3HS6bE5Sy-XvlpIX5xY2kmprIeefIQ&usqp=CAU"
        />
      </div>
      <div className="items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;