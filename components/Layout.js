import Sidebar from "./Sidebar";

const Layout = props => (
    <div className="container" style={{marginTop: '50px'}}>
        <div className="columns">
            <div className="column">
                <Sidebar {...props}/>
            </div>
            <div className="column is-three-quarters">
                {props.children}
            </div>
        </div>
    </div>
);

export default Layout;