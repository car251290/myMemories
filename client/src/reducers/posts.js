
import { FETCH_ALL, CREATE, UPDATE} from '../constants/actionTypes';

export default (posts = [], action) => {
    // switch that has fecth the state of the posts
    switch (action.type) {
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case 'FETCH_ALL':
           
            return action.payload;
        case 'CREATE':

            return [...posts,action.payload];

        default:
            return posts;
    }

}