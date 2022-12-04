import { useState } from 'react';
import Link from 'next/link';
// Icons
import { BsCoin } from 'react-icons/bs';
import { CgMenuRightAlt } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
// Styles
import { HeaderStyles, LogoStyles, MenuIconStyles, MenuListMobileStyles, MenuListStyles, NavStyles } from './Header.styles';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  const closeMenu = () => {
    setMenu(false);
  }
 
  return (
    <HeaderStyles>
      <div className="container">
        <NavStyles>
            <LogoStyles>
                <BsCoin />
                <h3>Crypto World</h3>
            </LogoStyles>
            
            <MenuIconStyles onClick={handleMenu}>
                {menu ? <MdClose size={20}/> : <CgMenuRightAlt size={20}/>}
            </MenuIconStyles>

            {menu ? (
                <MenuListMobileStyles className='scale-in-ver-top'>
                    <Link href='/' className='active' onClick={closeMenu}>Home</Link>
                    <Link href='/' onClick={closeMenu}>Exchanges</Link>
                    <Link href='/' onClick={closeMenu}>News</Link>
                    <Link href='/' className='btn--primary' onClick={closeMenu}>Join Us</Link>
                </MenuListMobileStyles>
            ) : (
                <MenuListStyles>
                    <Link href='/' className='active'>Home</Link>
                    <Link href='/'>Exchanges</Link>
                    <Link href='/'>News</Link>
                    <Link href='/' className='btn--primary'>Join Us</Link>
                </MenuListStyles>
            )}
   


        </NavStyles>
      </div>
    </HeaderStyles>
  )
}

export default Header