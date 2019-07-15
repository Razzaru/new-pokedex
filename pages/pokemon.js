import React from 'react'
import '../styles/styles.scss'
import Layout from "../components/Layout";
import {connect} from 'react-redux';
import {setCurrentPokemonUrl, startCurrentPokemonFetching} from "../actions";

class Pokemon extends React.Component {
    static async getInitialProps (props) {
        const {store, query} = props.ctx;

        store.dispatch(setCurrentPokemonUrl(query.url));
        store.dispatch(startCurrentPokemonFetching());
    }

    render() {
        return (
            <Layout activePage="pokemon-list">
                <div style={{display: 'flex'}}>
                    {this.props.currentPokemon && Object.values(this.props.currentPokemon.sprites || []).filter(sprite => sprite).map(sprite => (
                        <figure className="image is-128x128" style={{border: '1px solid rgba(0,0,0,0.3)', margin: '5px'}}>
                            <img src={sprite}/>
                        </figure>
                    ))}
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = ({ currentPokemon }) => ({ currentPokemon });
export default connect(mapStateToProps)(Pokemon)

