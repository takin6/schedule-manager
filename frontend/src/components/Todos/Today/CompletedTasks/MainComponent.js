import * as React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Checkbox } from 'react-mdl';
// import classNames from 'classnames';

export class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {checked: true};
    // this.uncompleteTodo = React.createRef();
  }

  deleteTodo(todoId) {
    if (window.confirm("Are you sure you want to delete this card?")) {
      this.props.deleteTodo(todoId);
    }
  }

  onClickUncompleteTodo(todoId) {
    if (window.confirm("Do you want to mark this todo as uncompleted?")) {
      this.props.uncompleteTodo(todoId);
    }
  }

  checkboxHandler() {
    return this.state;
  }

  render() {
    const finalTodoIndex = this.props.completedTodos.length-1;
    return (
      <div className="completed-todos">
        <span style={{fontWeight: "bold", "fontSize": 25}}>Completed</span>

        <ul className="demo-list-control mdl-list" style={{backgroundColor: "white", maxWidth: "28em", padding: "0 10px 0 10px"}}>
          { this.props.completedTodos.map((todo, index) => {
            return (
              <li className="mdl-list__item" 
                key={index}
                style={ !(finalTodoIndex === index) ? {borderBottom: "2px solid lightBlue"} : {} }
              >
                <span className="mdl-list__item-secondary-action" style={{minWidth: 30}}>
                  <Checkbox 
                    ripple
                    checked={ this.state.checked }
                    onChange={ this.checkboxHandler.bind(this) } 
                    htmlFor={`list-checkbox-${index}`} 
                    onClick={this.onClickUncompleteTodo.bind(this, todo.id)}
                  />
                </span>
                <span className="mdl-list__item-primary-content">
                  {todo.title}
                </span>
                <button 
                  className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                  onClick={this.deleteTodo.bind(this, todo.id)}
                >
                  <i className="material-icons" style={{color: "gray"}}>delete_forever</i>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}