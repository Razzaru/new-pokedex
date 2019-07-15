import React from 'react'
import '../../styles/styles.scss'
import Layout from "../../components/Layout";
import {connect} from 'react-redux';
import {setCurrentPokemonName, startCurrentPokemonFetching} from "../../actions";
import capitalizeFirstLetter from "../../helpers";

class Pokemon extends React.Component {
    static async getInitialProps(props) {
        const {store, query} = props.ctx;

        store.dispatch(setCurrentPokemonName(query.name));
        store.dispatch(startCurrentPokemonFetching());
    }

    render() {
        const {currentPokemon} = this.props;

        if (currentPokemon.id) {
            return (
                <Layout activePage="pokemon-list">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                #{currentPokemon.id} {capitalizeFirstLetter(currentPokemon.name)} • {currentPokemon.types.map(type =>
                                <span>{capitalizeFirstLetter(type.type.name)}    </span>)}
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <figure className="image is-128x128"
                                        style={{border: '1px solid rgba(0,0,0,0.3)', margin: '5px'}}>
                                    <img src={currentPokemon.sprites.front_default}/>
                                </figure>
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href="#" className="card-footer-item">Save</a>
                            <a href="#" className="card-footer-item">Edit</a>
                            <a href="#" className="card-footer-item">Delete</a>
                        </footer>
                    </div>
                    <div style={{display: 'flex'}}>
                        {Object.values(currentPokemon.sprites || []).filter(sprite => sprite).map(sprite => (
                            <figure className="image is-128x128"
                                    style={{border: '1px solid rgba(0,0,0,0.3)', margin: '5px'}}>
                                <img src={sprite}/>
                            </figure>
                        ))}
                    </div>
                </Layout>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = ({currentPokemon, pageCount, page}) => ({currentPokemon, pageCount, page});
export default connect(mapStateToProps)(Pokemon)

