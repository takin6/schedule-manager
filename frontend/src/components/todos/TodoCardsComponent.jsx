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
            />
            // <div className="demo-card-square mdl-card mdl-shadow--2dp" key={index} style={this.decideCardStyle(index)}>
            //   <label 
            //     className="mdl-card__title mdl-card--expand"
            //     htmlFor="todo"
            //     ref={this.textInput}
            //     onDoubleClick={() => this.props.editTodoTitle(todo.id)}>
            //     <h2 className="mdl-card__title-text">{todo.title}</h2>
            //   </label>
            //   <div className="mdl-card__supporting-text">
            //     {this.dueTime(todo.formatted_due_day)}
            //   </div>
            //   <TextInput 
            //     text={todo.text}
            //     itemId={todo.id}
            //     cancelEditing={this.props.cancelEditing}
            //     doneEditing={this.props.doneEditing} />
            //   <div className="mdl-card__actions mdl-card--border">
            //     <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            //       Complete
            //     </button>
            //     <button 
            //       className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
            //       onClick={this.deleteTodo.bind(this, todo.id)}
            //     >
            //       Delete
            //     </button>
            //   </div>
            // </div>
          );
        })}
      </div>
    );
  }
}

