const initialState = {
  data: [
    {most_retweeted: []},{ht_most_used: []}, {most_replied: []},{most_mentioned: []},
  ],
  loading: true,
  error: null,  
}

export const apiRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_API_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_API_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}