import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from './TextField';
import SelectField from './SelectField';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'todoTitle',
    'todoDueDay',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

const renderTextField = props => {
  return (
    <TextField {...props.input} />
  );
};

const renderSelectField = props => {
  return (
    <SelectField {...props.input} />
  );
};

const CreateTodoForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit} style={{display: "flex"}}>
      <div>
        <Field
          name="todoTitle"
          component={renderTextField}
          label="title"
        />
      </div>
      <div style={{marginTop: 5}}>
        <Field
          name="todoDueDay"
          component={renderSelectField}
          label="dueDay"
        />
      </div>
      <div style={{marginTop: 10}}>
        <button 
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
          disabled={pristine || submitting}
          type="submit"
          style={{minWidth: 40, height: 40, width: 40}}
        >
          <i className="material-icons">create</i>
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'CreateTodoForm', // a unique identifier for this form
  validate,
})(CreateTodoForm);



// const range = (i, j) => [...Array(j).keys()].slice(i, j);
// let SelectingFormValuesForm = props => {
//   const { addTodoMode, fullName, handleSubmit, pristine, reset, submitting } = props;
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <div>
//           <Field
//             name="addTodo"
//             id="addTodo"
//             component="input"
//             type="checkbox"
//             placeholder="addTodo"
//           />
//         </div>
//       </div>
//       {addTodoMode && (
//         <div>
//           <label>Title</label>
//           <div>
//             <Field
//               name="title"
//               component="input"
//               type="title"
//               placeholder="title"
//             />
//           </div>
//           <label>due time</label>
//           <div>
//             <Field name="dueDay" component="select">
//               <option />
//               {range(19, 24).map(t => (
//                 <option key={`dateFrom${t}`} value={`${t}:00`}>
//                   {t}:00
//                 </option>
//               ))}
//             </Field>
//           </div>
//           <div>
//             <button type="submit" disabled={pristine || submitting}>
//               Submit {fullName}
//             </button>
//             <button type="button" disabled={pristine || submitting} onClick={reset}>
//               Clear Values
//             </button>
//           </div>
//         </div>
//       )}
//     </form>
//   );
// };

// // The order of the decoration does not matter.

// // Decorate with redux-form
// SelectingFormValuesForm = reduxForm({
//   form: 'selectingFormValues' // a unique identifier for this form
// })(SelectingFormValuesForm);

// // Decorate with connect to read form values
// const selector = formValueSelector('selectingFormValues'); // <-- same as form name
// SelectingFormValuesForm = connect(state => {
//   const addTodoMode = selector(state, 'addTodo');
//   const titleValue = selector(state, 'titleValue');
//   const dueDayValue = selector(state, 'dueDayValue');
//   return {
//     addTodoMode,
//     titleValue,
//     dueDayValue
//   };
// })(SelectingFormValuesForm);

// export default SelectingFormValuesForm;

