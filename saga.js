import { all, takeLatest, select, put, call } from 'redux-saga/effects'
import {actionTypes, loadPokemonListSuccess, loadPokemonSuccess, loadGenerationsDataSuccess} from "./actions";
import fetch from 'isomorphic-unfetch';

function* fetchPokemonList() {
    try {
        const state = yield select();

        const res = yield fetch(`http://pokeapi.co/api/v2/pokemon/?limit=${state.pageCount}&offset=${(state.page ? state.page - 1 : 0) * state.pageCount}`);
        const pokemonListData = yield res.json();
        yield put(loadPokemonListSuccess(pokemonListData))
    } catch (err) {
        console.log(error)
    }
}

function* fetchPokemon() {
    try {
        const state = yield select();

        const res = yield fetch(`https://pokeapi.co/api/v2/pokemon/${state.currentName}/`);
        const pokemonData = yield res.json();
        yield put(loadPokemonSuccess(pokemonData))
    } catch (err) {
        console.log(error)
    }
}

function* fetchGenerations() {
    try {
        const res = yield fetch(`https://pokeapi.co/api/v2/generation/`);
        const generationsData = yield res.json();

        yield put(loadGenerationsDataSuccess(generationsData.results))
    } catch (err) {
        console.log(error)
    }
}

function* rootSaga() {
    yield all([
        call(fetchGenerations),
        takeLatest(actionTypes.FETCH_POKEMON_LIST, fetchPokemonList),
        takeLatest(actionTypes.FETCH_POKEMON, fetchPokemon),
    ]);
}

export default rootSaga
