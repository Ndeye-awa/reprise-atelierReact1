class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todos: [],
    };
  }

  render() {
    return (
      <div className="container mt-4">
        <h1>To-Do List</h1>
        <p>{this.state.input}</p>
        <div className="input-group mb-3">
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
            className="form-control"
            placeholder="Ajoutez une tâche"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({ todos: [...this.state.todos, this.state.input] });
            }}
          >
            Ajouter
          </button>
        </div>
        <ul className="list-group">
          {this.state.todos.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<Todos/>, document.getElementById("root"))