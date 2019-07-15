import {menu} from "../constants/menu";
import Link from "next/link";
import {compose} from "recompose";
import {connect} from 'react-redux';
import capitalizeFirstLetter from "../helpers";

const Sidebar = props => (
    <aside className="menu">
        <ul className="menu-list">
            <div style={{textAlign: 'center'}}>
                <img style={{width: '35%'}} src="/static/pokedex.png" alt=""/>
            </div>
            <p className="menu-label">
                Pokedex Menu
            </p>
            {menu.map(menuItem => {
                if (menuItem.id === 'generations') {
                    return (
                        <li>
                            <a>{menuItem.name}</a>
                            <ul>
                                {props.generations.map(generation => <li><Link href="/generations/[name]" as={`/generations/${generation.name}`}><a
                                    className={menuItem.id === props.activePage ? 'is-active' : ''}>{capitalizeFirstLetter(generation.name)}</a></Link></li>)}
                            </ul>
                        </li>
                    );
                } else {
                    return <li><Link href={menuItem.route}><a
                        className={menuItem.id === props.activePage ? 'is-active' : ''}>{menuItem.name}</a></Link></li>;
                }
            })}
        </ul>
    </aside>
);

const mapStateToProps = ({generations}) => ({generations});
export default compose(connect(mapStateToProps))(Sidebar)