

/* Action - external services etc. belong into action - noun_verb  */

export const todoAdd = (text, maxTodos) => ({
    type: 'TODO_ADD',
    text: text,
    maxTodos: maxTodos
});

export const todoRemove = (key) => ({
    type: 'TODO_REMOVE',
    key: key
});



