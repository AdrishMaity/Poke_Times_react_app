const initState = {
    posts: [
        {userId: 1, id: "1", title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
        {userId: 2, id: "11", title: "et ea vero quia laudantium autem", body: "delectus reiciendis molestiae occaecati non minima…luptates ut commodi qui incidunt↵ut animi commodi"},
        {userId: 10, id: "94", title: "qui qui voluptates illo iste minima", body: "aspernatur expedita soluta quo ab ut similique↵exp…mnis facilis nam ipsum natus sint similique omnis"}
    ]
}

const rootReducer = (state=initState, action) => {
    //console.log(action)
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;