import '../styles/styles.scss'
import Layout from "../components/Layout";
import React from 'react'
import Link from "next/link";
import Pagination from "../components/Pagination";
import {pageCount} from "../constants/lists";
import {connect} from 'react-redux';
import {setInitialInfo, startPokemonListFetching} from '../actions';
import capitalizeFirstLetter from "../helpers";

class Index extends React.Component {
    static async getInitialProps (props) {
        const {store, query} = props.ctx;
        store.dispatch(setInitialInfo(pageCount, query.page));
        store.dispatch(startPokemonListFetching());

        return {
            query: query
        };
    }

    render() {
        return (
            <Layout activePage="pokemon-list" >
                <div className="list is-hoverable">
                    {this.props.pokemonList.map((pokemon) => (
                        <Link href="/pokemon/[name]" as={`/pokemon/${pokemon.name}`}>
                            <a className="list-item">
                                {capitalizeFirstLetter(pokemon.name)}
                            </a>
                        </Link>
                    ))}
                </div>
                {this.props.pokemonCount > 0 && <Pagination page={this.props.query.page || 1} count={this.props.pokemonCount}/>}
            </Layout>
        );
    }
}

const mapStateToProps = ({ pokemonList, pokemonCount }) => ({ pokemonList, pokemonCount });
export default connect(mapStateToProps)(Index)