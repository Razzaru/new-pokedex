import '../styles/styles.scss'
import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';

const Pokemon = props => {
    return (
        <Layout activePage="pokemon-list">
            <div style={{display: 'flex'}}>
                {Object.values(props.pokemon.sprites).filter(sprite => sprite).map(sprite => (
                        <figure className="image is-128x128" style={{border: '1px solid rgba(0,0,0,0.3)', margin: '5px'}}>
                            <img src={sprite}/>
                        </figure>
                ))}
            </div>
        </Layout>
    )
};

Pokemon.getInitialProps = async function (ctx) {
    const res = await fetch(ctx.query.url);
    const data = await res.json();

    console.log(data);

    return {
        pokemon: data
    };
};

export default Pokemon;
