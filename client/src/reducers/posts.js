export default (posts = [], action) => {
    // switch that has fecth the state of the posts
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':

            return [...posts,action.payload];

        default:
            return posts;
    }

}