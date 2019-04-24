import React from 'react';
import { Formik } from 'formik';
import SearchCondition from "../forms/SearchCondition";
import InnerForm from "./InnerSearchForm";

export class AddTodoFormComponent extends React.Component {
  render() {
    return(
      <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={SearchCondition}
          onSubmit={values => {
            this.actions.addTodo(values);
          }}
          render={
            <InnerForm
              values={values}
              candidates={SearchCondition.getCandidates(new Date())}
              handleSubmit={this.actions.addTodo}
              handleChange={handleChange}
            />
          }
        />
      </div>
    );
  }
}