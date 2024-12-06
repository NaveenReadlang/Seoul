import {useState} from 'react';

const LoginUser = () => {

    // const [done, setDone] = useState(false);

    const handleSubmit = () => {
        console.log("hello Submit")    
    }
    // const handleClosing = () => {
    //     setDone(!done);
    // }

  return (
    <>
        <div>
            <fieldset>
                {/* {done && (
            <button onClick={handleClosing}> Close </button>
            )} */}
                <legend>Login Form</legend>
                <form onSubmit={handleSubmit}>
                    <div className='sign-in-form'>
                        <label htmlFor="text">Name</label>
                            <input type='text'
                                name='name'
                                placeholder='enter name'
                                value={undefined}
                                onChange={undefined}
                                autoComplete='off'
                            />
                            <br/>
                        <label htmlFor="email">E-mail</label>
                            <input type='email'
                                name='email'
                                placeholder='enter email'
                                value={undefined}
                                onChange={undefined}
                            />
                            <br/>
                        <label htmlFor="password">Password</label>
                            <input type='password'
                                name='password'
                                placeholder='enter password'
                                value={undefined}
                                onChange={undefined}
                            />
                            <br/>
                            <br/>
                        <button type='submit'>Sing in</button>
                    </div>
                </form>
            </fieldset>
        </div>
    </>
  )
}

export default LoginUser