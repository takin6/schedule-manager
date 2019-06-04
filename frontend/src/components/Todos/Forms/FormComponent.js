import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TitleField from './TitleField';
import NoteField from './NoteField';
// import { TextField } from 'react-mdl';


const renderTextField = props => {
  return (
    <TitleField {...props.input} />
  );
};

const renderNoteField = props => {
  return (
    <NoteField {...props.input} />
  );
};

const FormComponent = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div style={{display: "inline-block"}}>
        <div>
          <span style={{fontSize: 15, fontWeight: "bolder"}}>Title</span>
        </div>
        <div className="add-todo-text">
          <Field
            name="todoTitle"
            component={renderTextField}
          />
        </div>
      </div>
      <div>
        <div>
          <span style={{fontSize: 15, fontWeight: "bolder"}}>Note</span>
        </div>
        <div>
          <Field
            name="todoNote"
            component={renderNoteField}
          />
        </div>
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