import * as Styles from './TodoCardStyles';
import * as React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TodoCardComponent from './TodoCardComponent';

export class TodoCardsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    // this.deleteTodo = this.deleteTodo.bind(this);
  }

  decideAvatarStyle() {
    const colorLists = ["red", "green", "blue", "lightblue", "lightgreen", "purple", "black", "gray", "brown", "orange"];

    let index = Math.floor(Math.random()*(9-0));
    return colorLists[index];
  }

  render() {
    return (
      <div className="todo-list clearfix" style={Styles.TodoCardsBlock}>
        { this.props.todos.map((todo, index) => {
          return (
            <TodoCardComponent
              key={index}
              index={index}
              todo={todo}
              editTodoTitle={this.props.editTodoTitle}
              cancelEditTodoTitle={this.props.cancelEditTodoTitle}
              doneEditTodoTitle={this.props.doneEditTodoTitle}
              deleteTodo={this.props.deleteTodo}
              completeTodo={this.props.completeTodo}
            />
          );
        })}
      </div>
    );
  }
}

