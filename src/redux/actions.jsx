export const add_article = (article) => ({
    type: 'add_article',
    payload: article
})

export const delete_article = (id) => ({
    type: 'delete_article',
    payload: id
})