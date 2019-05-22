import * as React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Checkbox } from 'react-mdl';
import { EditOverdueTodoComponent } from './EditOverdueTodoComponent';
// import classNames from 'classnames';

export class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {checked: false};
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

  checkboxHandler() { return this.state; }

  render() {
    const finalTodoIndex = this.props.overdueTodos.length-1;
    const itemDefaultStyle = {padding: "0 10px 0px 10px", zIndex: -1};
    return (
      <div className="completed-todos">
        <span style={{fontWeight: "bold", "fontSize": 25}}>Overdue</span>

        <ul className="demo-list-control mdl-list" style={{backgroundColor: "white", padding: "0 10px 0 10px"}}>
          { this.props.overdueTodos.map((todo, index) => {
            return (
              <li className="mdl-list__item" 
                key={index}
                style={ !(finalTodoIndex === index) ? {...itemDefaultStyle, ...{borderBottom: "2px inset rgba(0,0,0, 0.54)"}} : itemDefaultStyle }
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

                <EditOverdueTodoComponent
                  key={index}
                  todoId={todo.id}
                  rescheduleTodo={this.props.rescheduleTodo}
                />

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