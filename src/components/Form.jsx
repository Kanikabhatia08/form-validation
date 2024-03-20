import React, { useEffect, useState } from 'react'

function Form() {

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        gender:"",
        department:"",
        country:"",
        state:"",
        city:"",
    })

    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData, 
                [event.target.name] : event.target.value
            }
        ))
    }

    const validateValues = (inputValues) => {
        let errors = {};
        if(inputValues.name.length == 0){
            errors.name = "Name cannot be empty"
        }
        if(inputValues.email.length < 10){
            errors.email = "Email is too short";
        }
        if(inputValues.password.length < 5){
            errors.password = "Password is too short"
        }
        if(inputValues.phone.length < 10 || inputValues.phone.length > 11){
            errors.phone = "Incorrect Phone Number"
        }
        if(inputValues.department.length == 0){
            errors.department = "Choose your department"
        }
        if(inputValues.gender.length == 0){
            errors.gender = "Choose your gender"
        }
        if(inputValues.state.length == 0){
            errors.state = "state cannot be empty"
        }
        if(inputValues.city.length == 0){
            errors.city = "city cannot be empty"
        }
        console.log(errors,"errorrrr")
        return errors;
    }
    function submitHandler(event){
        event.preventDefault();
        setErrors(validateValues(formData));
        setSubmitting(true)
    
    }

    const finishSubmit = () => {
        console.log(formData);
    };
    useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
        finishSubmit();
    }
    }, [errors]);


    return (
    <div className='w-[70%] justify-center mx-auto'>
        {Object.keys(errors).length === 0 && submitting ? (
    <span className="text-green-500 text-sm">Successfully submitted ✓</span>
    ) : null}
        <form onSubmit={submitHandler} className='grid grid-cols-2'>
            <div>
            <label>Name</label><br/>
            <input type='text'
                name='name'
                value={formData.name}
                className='outline m-2'
                onChange={changeHandler}
            /><br/>
            {errors.name ? (
                <p className="text-red-600 text-sm">
                    Name cannot be empty
                </p>
                ) : null}

            <label>Phone</label><br/>
            <input type='number'
                name='phone'
                value={formData.phone}
                className='outline m-2'
                onChange={changeHandler}
            /><br/>
            {errors.phone ? (
                <p className="text-red-600 text-sm">
                    Incorrect Phone number
                </p>
                ) : null}

            <fieldset>
                <legend>Gender</legend>
                
                <input
                    type='radio'
                    id='male'
                    name='gender'
                    value='male'
                    onChange={changeHandler}
                />
                <label htmlFor='male'>Male</label><br/>

                <input
                    type='radio'
                    id='female'
                    name='gender'
                    value='female'
                    
                    onChange={changeHandler}
                />
                <label htmlFor='female'>Female</label><br/>


                <input
                    type='radio'
                    id='others'
                    name='gender'
                    value='others'
                    onChange={changeHandler}
                />
                <label htmlFor='others'>Others</label><br/>
                {errors.gender ? (
                <p className="text-red-600 text-sm">
                    Choose your gender
                </p>
                ) : null}

            </fieldset><br/>

            <label htmlFor='department'>Department  </label><br/>
            <select 
                id='department'
                name='department'
                value={formData.department}
                onChange={changeHandler}
                className='outline m-2'>
                <option>OS</option>
                <option>Automation</option>
                <option>Design</option>
                <option>Cloud</option>
            </select><br/>
            {errors.department ? (
                <p className="text-red-600 text-sm">
                    Choose your department
                </p>
                ) : null}

            </div>
            <div>
            <label>Email</label><br/>
            <input type='email'
                name='email'
                value={formData.email}
                className='outline m-2'
                onChange={changeHandler}
            /><br/>
            {errors.email ? (
                <p className="text-red-600 text-sm">
                    Email should be at least 15 characters long
                </p>
                ) : null}

            <label>Password</label><br/>
            <input type='password'
                name='password'
                value={formData.password}
                className='outline m-2'
                onChange={changeHandler}
            /><br/>
            {errors.password ? (
            <p className="text-red-600 text-sm">
                Password should be at least 5 characters long
            </p>
            ) : null}
            

            <label htmlFor='country'>Country  </label><br/>
            <select 
                id='country'
                name='country'
                value={formData.country}
                onChange={changeHandler}
                className='outline'>
                <option>India</option>
                <option>United States</option>
                <option>Paris</option>
                <option>Itly</option>
            </select><br/><br/>

            <label htmlFor='state'>State / Province </label><br/>
            <input type='text' placeholder='Punjab' 
                name='state' id='state'
                value={formData.state}
                onChange={changeHandler}
                className='outline m-2'
            />
            <br/>
            {errors.state ? (
                <p className="text-red-600 text-sm">
                    State cannot be empty
                </p>
                ) : null}

            <label htmlFor='city'>City  </label><br/>
            <input type='text' placeholder='Mohali' 
                name='city' id='city'
                value={formData.city}
                onChange={changeHandler}
                className='outline m-2'
            />
            <br/>
            {errors.city ? (
                <p className="text-red-600 text-sm">
                    CIty cannot be empty
                </p>
                ) : null}

            </div><br/>
        <button className='bg-blue-500 text-white mx-auto right-[60%] font-bold rounded-lg py-2 px-4'>Save</button>

        </form>
    </div>
    )
}

export default Form