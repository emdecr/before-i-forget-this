import axios from 'axios';

import * as types from '../constants/ActionTypes'

export function fetchPages() {
    const url = 'https://data.beforeiforgetthis.space/wp-json/wp/v2/pages?_embed';
    const request = axios.get(url)
    return {
        type: types.FETCH_PAGES,
        payload: request
    };
}

export function fetchTopics() {
    const url = 'https://data.beforeiforgetthis.space/wp-json/wp/v2/categories?_embed';
    const request = axios.get(url)
    return {
        type: types.FETCH_TOPICS,
        payload: request
    };
}