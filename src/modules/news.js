export const INITIALIZE_EVENTS = 'news/INITIALIZE';
export const EVENTS_LOADING = 'news/EVENTS_LOADING';


const initialState = {
  events: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_EVENTS:
      return {
        ...state,
        isLoading: false,
        events: action.events,
        error: action.error
      };
    case EVENTS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}

export const eventsLoaded = ({events, error}) => {
  return dispatch => {
    dispatch({
      type: INITIALIZE_EVENTS,
      events,
      error
    });
  }
};



export const loadingEvents = () => {
  return dispatch => {
    dispatch({
      type: EVENTS_LOADING
    });
  }
};