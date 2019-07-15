export const actionTypes = {
    FETCH_POKEMON_LIST: 'FETCH_POKEMON_LIST',
    SET_INITIAL_INFO: 'SET_INITIAL_INFO',
    LOAD_POKEMON_LIST_SUCCESS: 'LOAD_POKEMON_LIST_SUCCESS',
    FETCH_POKEMON: 'FETCH_POKEMON',
    LOAD_POKEMON_SUCCESS: 'LOAD_POKEMON_SUCCESS',
    SET_CURRENT_POKEMON_NAME: 'SET_CURRENT_POKEMON_NAME',
    LOAD_GENERATIONS_SUCCESS: 'LOAD_GENERATIONS_SUCCESS'
};

export const setInitialInfo = (pageCount, page) => ({type: actionTypes.SET_INITIAL_INFO, pageCount, page});
export const startPokemonListFetching = () => ({ type: actionTypes.FETCH_POKEMON_LIST });
export const loadPokemonListSuccess = (pokemonListData) => ({ type: actionTypes.LOAD_POKEMON_LIST_SUCCESS, pokemonListData });
export const loadPokemonSuccess = (pokemon) => ({ type: actionTypes.LOAD_POKEMON_SUCCESS, pokemon });
export const setCurrentPokemonName = (name) => ({ type: actionTypes.SET_CURRENT_POKEMON_NAME, name });
export const startCurrentPokemonFetching = () => ({ type: actionTypes.FETCH_POKEMON });
export const loadGenerationsDataSuccess = (generations) => ({type: actionTypes.LOAD_GENERATIONS_SUCCESS, generations});