import {actionTypes} from "./actions";

export const exampleInitialState = {
    pageCount: 19,
    page: 1,
    pokemonList: [],
    pokemonCount: 0,
    currentPokemon: {},
    currentName: null,
    generations: []
};

function reducer (state = exampleInitialState, action) {
    switch (action.type) {
        case actionTypes.SET_INITIAL_INFO:
            return {
                ...state,
                pageCount: action.pageCount,
                page: action.page || 1
            };
        case actionTypes.LOAD_POKEMON_LIST_SUCCESS:
            return {
                ...state,
                pokemonCount: action.pokemonListData.count,
                pokemonList: action.pokemonListData.results
            };
        case actionTypes.SET_CURRENT_POKEMON_NAME:
            return {
                ...state,
                currentName: action.name
            };
        case actionTypes.LOAD_POKEMON_SUCCESS:
            return {
                ...state,
                currentPokemon: action.pokemon,
            };
        case actionTypes.LOAD_GENERATIONS_SUCCESS:
            return {
                ...state,
                generations: action.generations
            }
        default:
            return state
    }
}

export default reducer
