export const addArticle = (article) => ({
    type: "addarticle",
    payload: article
})
export const setid = (id) => ({
    type: "setid",
    payload: id
})
export const setdes = (des) => ({
    type: "setdes",
    payload: des
})
export const setprix = (prix) => ({
    type: "setprix",
    payload: prix
})
export const delarticle = (id) => ({
    type: "delarticle",
    payload: id
})
export const calculertotal = () => ({
    type: "calculertotal"
})



