export const addTodo = (data) => {
    return {
        type: 'ADDTODO',
        payload: {
            id: new Date().getTime().toString(),
            data
        }
    }
}
export const delTodo = (list) => {
    return {
        type: 'DELETETODO',
        payload:list
    }
}
export const updateTodo = (list) => {
    return {
        type: 'EDITTODO',
        payload: list
    }
}
