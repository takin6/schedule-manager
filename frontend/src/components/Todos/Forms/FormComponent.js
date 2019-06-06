import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TitleField from './TitleField';
import NoteField from './NoteField';
// import "react-dates/initialize";
import { SingleDatePicker } from 'react-dates';
// import "react-dates/lib/css/_datepicker.css";
import moment from 'moment';
// import { TextField } from 'react-mdl';


const renderTextField = props => {
  return (
    <TitleField {...props.input} />
  );
};

const renderDateField = ({ input, meta }) => (
  <SingleDatePicker
    date={input.value}
    focused={meta.active}
    onDateChange={(value) => input.onChange({ value })}
    onFocusChange={({ focused }) => focused ? input.onFocus(true) : input.onBlur(true)}
  />
);

const renderNoteField = props => {
  return (
    <NoteField {...props.input} />
  );
};

const FormComponent = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div style={{display: "inline-block", verticalAlign: "top"}}>
        <span style={{fontSize: 15, fontWeight: "bolder"}}>Title</span>
        <Field
          name="todoTitle"
          component={renderTextField}
        />
      </div>
      <div style={{display: "inline-block", verticalAlign: "top"}}>
        <span style={{fontSize: 15, fontWeight: "bolder"}}>Due Date</span>
        <Field
          name="todoDueDate"
          component={renderDateField}
          format={(value) => value ? moment(value) : undefined}
          normalize={(data) => data && data.value && data.value.format()}
        />
      </div>
      <div>
        <div style={{display: "inline-block", verticalAlign: "top"}}>
          <span style={{fontSize: 15, fontWeight: "bolder"}}>Note</span>
        </div>
        <Field
          name="todoNote"
          component={renderNoteField}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(FormComponent);




// <div>
//   <span style={{fontSize: 15, fontWeight: "bolder"}}>Title</span>
// </div>
// <div className="add-todo-text">
//   <Field
//     name="todoTitle"
//     component={renderTextField}
//   />
// </div>
// <div>
//   <label>Title</label>
//   <div>
//     <Field
//       name="lastName"
//       component="input"
//       type="textarea"
//       placeholder="Last Name"
//     />
//   </div>
// </div>
// <div>
//   <label>Email</label>
//   <div>
//     <Field
//       name="email"
//       component="input"
//       type="email"
//       placeholder="Email"
//     />
//   </div>
// </div>
// <div>
//   <label>Sex</label>
//   <div>
//     <label>
//       <Field
//         name="sex"
//         component="input"
//         type="radio"
//         value="male"
//       />{' '}
//       Male
//     </label>
//     <label>
//       <Field
//         name="sex"
//         component="input"
//         type="radio"
//         value="female"
//       />{' '}
//       Female
//     </label>
//   </div>
// </div>
// <div>
//   <label>Favorite Color</label>
//   <div>
//     <Field name="favoriteColor" component="select">
//       <option />
//       <option value="ff0000">Red</option>
//       <option value="00ff00">Green</option>
//       <option value="0000ff">Blue</option>
//     </Field>
//   </div>
// </div>
// <div>
//   <label htmlFor="employed">Employed</label>
//   <div>
//     <Field
//       name="employed"
//       id="employed"
//       component="input"
//       type="checkbox"
//     />
//   </div>
// </div>