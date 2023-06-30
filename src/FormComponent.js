// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import { TextField, FormControlLabel, Radio, RadioGroup, Checkbox, Button } from '@material-ui/core';


// const initialValues = {
//   name: '',
//   address: '',
//   country: '',
//   gender: '',
//   hobbies: [],
// };

// const countries = ['India', 'USA', 'Russia' ]; // Replace with actual country options
// const hobbies = ['Football', 'Cricket', 'Badminton']; // Replace with actual hobby options

// const FormComponent = () => {
//   const handleSubmit = (values) => {
//     alert(JSON.stringify(values, null, 2));
//     // Alternatively, you can console.log the form values
//     // console.log(values);
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form className='frm'>
//         <div className='nm'>
//           <Field as={TextField} name="name" label="Name" variant="outlined" fullWidth required />
//         </div>

//         <div className='adr'>
//           <Field as={TextField} name="address" label="Address" variant="outlined" fullWidth multiline required />
//         </div>

//         <div className='cntry'>
//           <Field as={TextField} select name="country" label="Country" variant="outlined" fullWidth required>
//             {countries.map((country) => (
//               <option key={country} value={country}>
//                 {country}
//               </option>
//             ))}
//           </Field>
//         </div>

//         <div>
//           <Field as={RadioGroup} name="gender" row>
//             <FormControlLabel value="male" control={<Radio />} label="Male" />
//             <FormControlLabel value="female" control={<Radio />} label="Female" />
//           </Field>
//         </div>

//         <div>
//           <Field as={Checkbox} name="hobbies" value="Hobby 1" label="Hobby 1" />
//           <Field as={Checkbox} name="hobbies" value="Hobby 2" label="Hobby 2" />
//           <Field as={Checkbox} name="hobbies" value="Hobby 3" label="Hobby 3" />
//         </div>

//         <Button type="submit" variant="contained" color="primary">Submit</Button>
//       </Form>
//     </Formik>
//   );
// };

// export default FormComponent;


import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, FormControlLabel, Radio, RadioGroup, Checkbox, Button, Grid } from '@material-ui/core';

const initialValues = {
  name: '',
  address: '',
  country: '',
  gender: '',
  hobbies: [],
};

const countries = ['India', 'USA', 'Russia']; 
const hobbies = ['Football', 'Cricket', 'Badminton']; 

const FormComponent = () => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    // Alternatively, you can console.log the form values
    // console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Grid container spacing={2}> {/* Add margin between fields using Grid container */}
          <Grid item xs={12}>
            <Field as={TextField} name="name" label="Name" variant="outlined" fullWidth required />
          </Grid>

          <Grid item xs={12}>
            <Field as={TextField} name="address" label="Address" variant="outlined" fullWidth multiline required  />
          </Grid>

          <Grid item xs={12}>
            <Field as={TextField} select name="country" label="Country" variant="outlined" fullWidth required 
            inputProps={{ style: { cursor: 'pointer' } }} 
            >
              {countries.map((country) => (
                <option key={country} value={country}  >
                  {country}
                </option>
              ))}
            </Field>
          </Grid>

          <Grid item xs={12}>
            <Field as={RadioGroup} name="gender" row>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </Field>
          </Grid>

          <Grid item xs={12}>
            <Field as={Checkbox} name="hobbies" value="Football" label="Football" />
            <Field as={Checkbox} name="hobbies" value="Cricket" label="Cricket" />
            <Field as={Checkbox} name="hobbies" value="Badminton" label="Badminton" />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default FormComponent;

