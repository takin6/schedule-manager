import * as React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
// import classNames from 'classnames';

export class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  deleteTodo(todoId) {
    if (window.confirm("Are you sure you want to delete this card?")) {
      this.props.deleteTodo(todoId);
    }
  }

  render() {
    return (
      <div className="completed-todos">
        <span style={{fontWeight: "bold", "font-size": 25}}>Completed</span>

        <ul className="demo-list-control mdl-list" style={{backgroundColor: "white", maxWidth: "28em", padding: "0 10px 0 10px"}}>
          { this.props.completedTodos.map((todo, index) => {
            return (
              <li className="mdl-list__item" key={index} style={{borderBottom: "2px solid lightBlue"}}>
                <span className="mdl-list__item-secondary-action">
                  <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="list-checkbox-1">
                    <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
                  </label>
                </span>
                <span className="mdl-list__item-primary-content">
                  {todo.title}
                </span>
                <button 
                  className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                  onClick={this.deleteTodo.bind(this, todo.id)}
                >
                  <img src="https://img.icons8.com/material/24/000000/trash.png"></img>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}