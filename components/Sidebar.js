import {menu} from "../constants/menu";
import Link from "next/link";

const Sidebar = props => (
    <aside className="menu">
        <ul className="menu-list">
            <div style={{textAlign: 'center'}}>
                <img style={{width: '35%'}} src="/static/pokedex.png" alt=""/>
            </div>
            <p className="menu-label">
                Pokedex Menu
            </p>
            {menu.map(menuItem => <li><Link href={menuItem.route}><a className={menuItem.id === props.activePage ? 'is-active' : ''}>{menuItem.name}</a></Link></li>)}
        </ul>
    </aside>
);

export default Sidebar