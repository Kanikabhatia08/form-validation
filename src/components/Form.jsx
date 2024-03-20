import React, { useEffect, useState } from 'react'
import vector from '../images/vector2.png'

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
        if(inputValues.country.length == 0){
            errors.country = "Choose your country"
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
        <div className='w-full h-full py-10 '>
        <img src={vector} alt='vector' className='absolute w-[600px ] h-[600px] top-[60%] left-[55%] overflow-hidden'/>
        <div className='w-[35%] py-5 px-7  relative justify-center mx-auto backdrop-blur-2xl bg-transparent shadow-[rgba(0.2,0.2,0,0.2)_10px_10px_10px_10px] '>
                {Object.keys(errors).length === 0 && submitting ? (
            <span className="text-green-500 text-sm">Successfully submitted ✓</span>
            ) : null}
            
            <h1 className='text-4xl text-center font-semibold text-[#201658]'>Form Validation</h1>
                <form onSubmit={submitHandler} className='mx-auto my-4 gap-5 justify-center flex flex-col'>
                    
                    <div className='justify-between flex'>
                        {/* <label className='text-xl font-semibold text-[#1D24CA]'>Name</label> */}
                        <input type='text'
                            name='name'
                            value={formData.name}
                            placeholder='Enter your Name*'
                            className='border-[#98ABEE] px-3 py-2 w-full border-2'
                            onChange={changeHandler}
                        />
                    </div>
                    {errors.name ? (
                            <p className="text-red-600 -mt-4 text-right text-xs">
                                Name cannot be empty!
                            </p>
                    ) : null}
                    
                    <div className='justify-between flex'>
                        {/* <label className='text-xl font-semibold text-[#1D24CA]'>Phone</label> */}
                        <input type='tel'
                            name='phone'
                            value={formData.phone}
                            placeholder='Enter your Phone No.*'
                            className='border-[#98ABEE] px-3 py-2 w-full border-2'
                            onChange={changeHandler}
                        />
                    </div>
                    {errors.phone ? (
                            <p className="text-red-600 -mt-4 text-right text-xs">
                                Incorrect Phone number!
                            </p>
                    ) : null}
                    
                    <fieldset className='justify-between '>
                        {/* <legend className='text-xl font-semibold text-[#1D24CA]'>Gender</legend> */}
                        <div className='-ml-40 -my-2'>
                            <input
                                type='radio'
                                id='male'
                                name='gender'
                                value='male'
                                className='ml-40'
                                onChange={changeHandler}
                            />
                            <label className='text-lg text-[#201658] pr-6 pl-1' htmlFor='male'>Male</label>

                            <input
                                type='radio'
                                id='female'
                                name='gender'
                                value='female'
                                
                                onChange={changeHandler}
                            />
                            <label className='text-lg text-[#201658] pr-6 pl-1' htmlFor='female'>Female</label>


                            <input
                                type='radio'
                                id='others'
                                name='gender'
                                value='others'
                                onChange={changeHandler}
                            />
                            <label className='text-lg text-[#201658] pr-5 pl-1' htmlFor='others'>Others</label>
                        </div>
                    </fieldset>
                    {errors.gender ? (
                        <p className="text-red-600 -mt-4 text-right text-xs">
                            Choose your gender!
                        </p>
                    ) : null}

                    <div className='justify-between flex'>
                        {/* <label  className='text-xl font-semibold text-[#1D24CA]' htmlFor='department'>Department  </label> */}
                        <select 
                            id='department'
                            name='department'
                            value={formData.department}
                            onChange={changeHandler}
                            placeholder="select department"
                            className='border-[#98ABEE] px-3 py-2 w-full border-2'
                        >
                            <option value="">--select department--</option>
                            <option value="OS">OS</option>
                            <option value="Automation">Automation</option>
                            <option value="Design">Design</option>
                            <option value="Cloud">Cloud</option>
                        </select>
                    </div>
                    {errors.department ? (
                        <p className="text-red-600 -mt-4 text-right text-xs">
                            Choose your department!
                        </p>
                    ) : null}
                    
                    <div className='justify-between flex'>
                        {/* <label className='text-xl font-semibold text-[#1D24CA]'>Email</label> */}
                        <input type='email'
                            name='email'
                            value={formData.email}
                            placeholder='Enter your Email*'
                            className='border-[#98ABEE] px-3 py-2 w-full border-2'
                            onChange={changeHandler}
                        />
                    </div>
                    {errors.email ? (
                        <p className="text-red-600 -mt-4 text-right text-xs">
                            Email should be at least 15 characters!
                        </p>
                    ) : null}

                    <div className='justify-between flex'>
                        {/* <label className='text-xl font-semibold text-[#1D24CA]'>Password</label> */}
                        <input type='password'
                            name='password'
                            value={formData.password}
                            placeholder='Enter Password*'
                            className='border-[#98ABEE] px-3 py-2 w-full border-2'
                            onChange={changeHandler}
                        />
                    </div>
                    {errors.password ? (
                        <p className="text-red-600 -mt-4 text-right text-xs">
                            Password should be at least 5 characters!
                        </p>
                    ) : null}

                    <div className='justify-between flex'>
                        {/* <label className='text-xl font-semibold text-[#1D24CA]' htmlFor='country'>Country  </label> */}
                        <select 
                            id='country'
                            name='country'
                            value={formData.country}
                            onChange={changeHandler}
                            className='border-[#98ABEE] px-3 py-2 w-full border-2'
                        >
                            <option value="">--select country--</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="Paris">Paris</option>
                            <option value="Italy">Italy</option>
                        </select>
                    </div>
                    {errors.country ? (
                        <p className="text-red-600 -mt-4 text-right text-xs">
                            Choose your country!
                        </p>
                    ) : null}

                    <div className='justify-between flex'>
                        {/* <label className='text-xl font-semibold text-[#1D24CA]' htmlFor='state'>State / Province </label> */}
                        <input type='text' 
                            placeholder='Enter State*' 
                            name='state' id='state'
                            value={formData.state}
                            onChange={changeHandler}
                            className='border-[#98ABEE] px-3 py-2 w-full border-2'
                        />

                    </div>
                    {errors.state ? (
                        <p className="text-red-600 -mt-4 text-right text-xs">
                            State cannot be empty!
                        </p>
                    ) : null}

                    <div className='justify-between flex'>
                        {/* <label className='text-xl font-semibold text-[#1D24CA]' htmlFor='city'>City  </label> */}
                        <input type='text' placeholder='Enter City*' 
                            name='city' id='city'
                            value={formData.city}
                            onChange={changeHandler}
                            className='border-[#98ABEE] px-3 py-2 w-full border-2'
                        />
                    </div>
                    {errors.city ? (
                        <p className="text-red-600 -mt-4 text-right text-xs">
                            CIty cannot be empty!
                        </p>
                    ) : null}
                    
                    <button className='bg-blue-500 text-white font-bold rounded-lg my-3 w-[50%] mx-auto py-2 px-4'>Save</button>

                </form>
            </div>
    </div>
    
    )
}

export default Form