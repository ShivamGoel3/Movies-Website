import './Header.css';

const Header = () => {
    return (
      <div className="header">
      <span onClick={() => window.scroll(0, 0)} className="header">
         MOVIES AND TV SERIES 
      </span>
      </div>
     
    );
  };
  
export default Header;