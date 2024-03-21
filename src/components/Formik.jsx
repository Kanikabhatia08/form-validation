import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../schema';
import desk from '../images/desk.jpg'

const initialValues ={
  name:"",
  email:"",
  password:"",
  confirm_password:"",
}

function Formik() {

  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) =>{
      console.log(values);
      action.resetForm(); //resets the form after submit
    }
  });
  // console.log(Formik);
  // console.log(errors)

  return (
    <div className='w-[55%] my-10 mx-auto flex justify-between items-center'>
      <div className='justify-between flex border-[1px] border-[#765827]  '>
      <form onSubmit={handleSubmit} className='w-[60%] px-5 flex flex-col gap-5'>
      <h1 className='text-3xl text-[#65451F] font-bold py-3 text-center uppercase'>Login Form</h1>

      <div className='border-[1px] flex flex-col p-2'>
          <label className='uppercase text-[#65451F] text-base font-semibold'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder='Enter Name'    
            className='text-sm outline-none'        
          />
          {
            errors.name && touched.name ? (
              <p className='text-[#765827] text-xs'>{errors.name}</p>
            ) : null
          }
        </div>

        <div className='border-[1px] flex  flex-col p-2'>
          <label className='uppercase text-[#65451F] text-base font-semibold'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder='Enter Email'
            className='text-sm outline-none'        

          />
          {
            errors.email && touched.email ? (
              <p className='text-[#765827] text-xs'>{errors.email}</p>
            ) : null
          }
        </div>

        <div className='border-[1px] flex  flex-col p-2'>
        <label className='uppercase text-[#65451F] text-base font-semibold'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            alue={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder='Enter Password'
            className='text-sm outline-none'        

          />
          {
            errors.password && touched.password ? (
              <p className='text-[#765827] text-xs'>{errors.password}</p>
            ) : null
          }
        </div>

        <div className='border-[1px] flex  flex-col p-2'>
        <label className='uppercase text-[#65451F] text-base font-semibold'>Confirm Password</label>
          <input
            type='password'
            name='confirm_password'
            id='confirm_password'
            alue={values.confirm_password}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder='Confirm Password'
            className='text-sm outline-none'        

          />
          {
            errors.confirm_password && touched.confirm_password ? (
              <p className='text-[#765827] text-xs'>{errors.confirm_password}</p>
            ) : null
          }
        </div>

          <button type='submit' className='text-white uppercase bg-[#765827] w-[70%] mx-auto py-2'>Login</button>

      </form>

      <div className=' w-[50%]'>
        <img src={desk} alt='desk' className='' />
      </div>
      </div>
      
    </div>
  )
}

export default Formik