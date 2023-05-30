import {useState} from 'react'
import classes from "./Nav.module.scss"
import logo from '../../assets/logo.png'
import call from '../../assets/Calling.png'
import { BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HashLink as Link} from 'react-router-hash-link'
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const menuToggleHandler = () => setMenuOpen(!menuOpen);
    

  return (
    <header className={classes.header}>
            <div className={classes.header__content}> 

                <div className={classes.header__content__logo}>
                <Link to='/' smooth><img src={logo} alt='logo' /></Link> 
                    
                </div>

                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen  ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>                          
                               <Link to='#home' smooth onClick={()=>setMenuOpen(false)}>Home</Link>                         
                        </li>
                        <li>   
                                <Link to='#about' smooth onClick={()=>setMenuOpen(false)}>About us</Link>                                                                                 
                        </li>
                        <li>
                                <Link to='#services' smooth onClick={()=>setMenuOpen(false)}>Our services</Link>                                 
                        </li>
                        <li>
                                <Link to='#contact' smooth onClick={()=>setMenuOpen(false)}>Contact us</Link>                               
                        </li>
                    </ul>
                </nav>

                <div className={classes.header__content__calling}>
                    <img src={call} alt='calling'/>
                    <div className={classes.header__content__calling__service}> 
                        Service disponible
                        <p> 0453 628 125 </p> 
                    </div>
                </div>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
  )
}

export default Nav