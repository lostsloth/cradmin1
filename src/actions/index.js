import { CALL_API } from 'redux-api-middleware'
import trim from 'lodash/trim'
import compact from 'lodash/compact'
import uniq from 'lodash/uniq'

const ACCEPT_JSON_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';
export const fetchEventsIfNeeded = () => ({
    [CALL_API]: {
        credentials: 'same-origin',
        headers: {
            ...ACCEPT_JSON_HEADERS,
        },
        endpoint: '/api/events',
        method: 'GET',
        bailout: state => getEvents(state).isFetching || getEvents(state).items.length,
        types: [GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE],
    },
});
