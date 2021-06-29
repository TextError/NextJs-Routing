import Link from 'next/link';

import classes from './header.module.css';

const Header = () => (
  <header className={classes.header}>
    <div className={classes.logo}>
      <Link href='/'>Logo</Link>
    </div>
    <nav className={classes.navigation}>
      <ul>
        <li>
         <Link href='/list'>List</Link> 
        </li>
        <li>
         <Link href='/list/1'>ID-1</Link> 
        </li>
        <li>
         <Link href='/list/2/List 2'>Slug-2</Link> 
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;