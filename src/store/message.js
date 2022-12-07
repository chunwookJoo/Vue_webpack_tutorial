export default {
	namespaced:true,
	state() {
		return {
			message: "Merry Christmas"
		}
	},
	getters:{
		reversedMessage(state) {
			return state.message.split("").reverse().join("")
		}
	},
	mutations:{
		updateMessage(state, newMessage) {
			state.message = newMessage
		}
	},
	actions:{
		async fetchTodo({commit}) {
			const todo = await	fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then(res =>  res.json())
			console.log(todo)
			commit("updateMessage", todo.title)
		}
	}
}