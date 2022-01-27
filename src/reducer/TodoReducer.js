const inialState = {
	list: [],
};
const TodoReducer = (state = inialState, { payload, type }) => {
	switch (type) {
		case "ADDTODO":
			const { id, data } = payload;
			if (data) {
				return {
					...state,
					list: [
						...state.list,
						{
							data: data,
							id: id,
						},
					],
				};
			}

		case "DELETETODO":
			return {
				...state,
				list: [...payload],
			};
		case "EDITTODO":
			return {
				...state,
				list: payload,
			};
		default:
			return state;
	}
};
export default TodoReducer;
