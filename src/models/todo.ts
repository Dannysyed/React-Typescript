class TodoList {
    id: number
    text: string
    constructor(todoTxt: string) {
        this.text = todoTxt
        this.id = Math.floor(Math.random() * 1000);
    }
}
export default TodoList