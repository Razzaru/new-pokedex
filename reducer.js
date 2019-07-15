import {actionTypes} from "./actions";

export const exampleInitialState = {
    pageCount: 19,
    page: 1,
    pokemonList: [],
    pokemonCount: 0,
    currentPokemon: {}
};

function reducer (state = exampleInitialState, action) {
    switch (action.type) {
        case actionTypes.SET_INITIAL_INFO:
            return {
                ...state,
                pageCount: action.pageCount,
                page: action.page
            };
        case actionTypes.LOAD_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                pokemonCount: action.pokemonListData.count,
                pokemonList: action.pokemonListData.results
            };
        case actionTypes.SET_CURRENT_POKEMON_URL:
            return {
                ...state,
                url: action.url
            };
        case actionTypes.LOAD_POKEMON_SUCCESS:
            return {
                ...state,
                currentPokemon: action.pokemon,
            };
        default:
            return state
    }
}

export default reducer
