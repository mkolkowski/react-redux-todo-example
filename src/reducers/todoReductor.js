/* It' s handle action - change state to another immutable */
const todoReductor = (state = { items: [] }, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            if (action.maxTodos > state.items.length) {
                return {
                    items: [...state.items, {
                        text: action.text,
                        key: Date.now().toString()
                    }]
                };
            }
            return state;
        case 'TODO_REMOVE':
            let filteredItems = state.items.slice().filter(x => x.key !== action.key);
            return {
                items: filteredItems
            };
        default:
            return state
    }

}

export default todoReductor

