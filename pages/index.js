import '../styles/styles.scss'
import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import Link from "next/link";
import {useRouter} from "next/router";
import Pagination from "../components/Pagination";
import {pageCount} from "../constants/lists";

const Index = props => {
    const router = useRouter();

    return (
        <Layout activePage="pokemon-list">
            <div className="list is-hoverable">
                {props.pokemonList.map(pokemon => (
                    <Link href={`/pokemon?url=${pokemon.url}`}>
                        <a className="list-item">
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </a>
                    </Link>
                ))}
            </div>
            <Pagination page={router.query.page || 1} count={props.pokemonCount}/>
        </Layout>
    );
}

Index.getInitialProps = async function (ctx) {
    const res = await fetch(`http://pokeapi.co/api/v2/pokemon/?limit=${pageCount}&offset=${(ctx.query.page ? ctx.query.page - 1 : 0) * pageCount}`);
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.results.length}`);

    return {
        pokemonList: data.results,
        pokemonCount: data.count
    };
};

export default Index;
