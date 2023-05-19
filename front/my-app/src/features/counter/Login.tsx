import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loginAsync, selectLogged, aboutAsync, contactAsync, logout } from './loginSlice';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Login = () => {
  const dispatch = useAppDispatch();
  const logged = useAppSelector(selectLogged);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      setErrorMessage("Please enter both username and password.");
      return;
    }

    dispatch(loginAsync({ username, password }))
      .then((result) => {
        // ***THIS ERROR OPTION DOESN'T WORK!!!!!!***
        // if (!result.payload) {
        //   setErrorMessage("User details are not recognized. Please register first.");
        // } else {
        //   setErrorMessage("");
        //   setusername("");
        //   setpassword("");
        // }
      });
  };

  return (
    <div style={{ backgroundColor: "red" }}>
      {logged ? (
        <>
          <h1>You are Logged in</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please Login</h1>
          User name<input onChange={(e) => setusername(e.target.value)} value={username} /><br></br>
          Password<input onChange={(e) => setpassword(e.target.value)} value={password} /><br></br>
          <Button variant="primary" onClick={handleLogin}>Login</Button>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        </>
      )}
      <button onClick={() => dispatch(aboutAsync())}>About</button>
      <button onClick={() => dispatch(contactAsync())}>Contact</button>
    </div>
  );
};

export default Login;





// import React, { useState } from 'react';
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { loginAsync, selectLogged, aboutAsync, contactAsync, logout } from './loginSlice';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';

// const Login = () => {
//   const dispatch = useAppDispatch();
//   const logged = useAppSelector(selectLogged);
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");

//   const handleLogin = () => {
//     dispatch(loginAsync({ username, password }));
//     setusername("");
//     setpassword("");
//   };

//   return (
//     <div style={{ backgroundColor: "red" }}>
//       {logged ? (
//         <>
//           <h1>You are Logged in</h1>
//           <button onClick={() => dispatch(logout())}>Logout</button>
//         </>
//       ) : (
//         <>
//           <h1>Please Login</h1>
//           User name<input onChange={(e) => setusername(e.target.value)} value={username} /><br></br>
//           Password<input onChange={(e) => setpassword(e.target.value)} value={password} /><br></br>
//           <Button variant="primary" onClick={handleLogin}>Login</Button>
//         </>
//       )}
//       <button onClick={() => dispatch(aboutAsync())}>About</button>
//       <button onClick={() => dispatch(contactAsync())}>Contact</button>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { loginAsync, selectLogged, aboutAsync, contactAsync, logout } from './loginSlice';
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';

// const Login = () => {
//   const dispatch = useAppDispatch();
//   const logged = useAppSelector(selectLogged);
//   const [username, setusername] = useState("");
//   const [password, setpassword] = useState("");

//   const handleLogin = () => {
//     dispatch(loginAsync({ username, password }));
//     setusername("");
//     setpassword("");
//   };

//   return (
//     <div style={{ backgroundColor: "red" }}>
//       <h1>Login</h1>
//       User name<input onChange={(e) => setusername(e.target.value)} value={username} /><br></br>
//       Password<input onChange={(e) => setpassword(e.target.value)} value={password} /><br></br>
//       {logged ? <button onClick={() => dispatch(logout())}>Logout</button> :
//         <Button variant="primary" onClick={handleLogin}>Login</Button>}
//       <button onClick={() => dispatch(aboutAsync())}>About</button>
//       <button onClick={() => dispatch(contactAsync())}>Contact</button>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react'
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { loginAsync, selectLogged,aboutAsync,contactAsync,logout } from './loginSlice'
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';

// const Login = () => {
//     const dispatch = useAppDispatch();
//     const logged = useAppSelector(selectLogged);
//     const [username, setusername] = useState("")
//     const [password, setpassword] = useState("")
//     return (
//         <div style={{backgroundColor:"red"}}>
//             <h1>Login</h1>
//             User name<input onChange={(e)=>setusername(e.target.value)}/><br></br>
//             Password<input onChange={(e)=>setpassword(e.target.value)}/><br></br>
//             {logged ? <button onClick={() => dispatch(logout())}>Logout</button> :
              
//              <Button variant="primary" onClick={() => dispatch(loginAsync({ username, password}))}>Login</Button>}
        
//              <button onClick={() => dispatch(aboutAsync())}>About</button>
//              <button onClick={() => dispatch(contactAsync())}>Contact</button>
           
//         </div>
//     )
// }

// export default Login

// import React, { useState } from 'react'
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { loginAsync, selectLogged, aboutAsync, contactAsync, logout } from './loginSlice'

// const Login = () => {
//     const dispatch = useAppDispatch();
//     const logged = useAppSelector(selectLogged);
//     const [username, setusername] = useState("")
//     const [password, setpassword] = useState("")

//     // this method was added to help clear the fields after the login
//     const handleLogin = () => {
//         dispatch(loginAsync({ username, password }));
//         setusername("");
//         setpassword("");
//     };

//     return (
//         <div style={{ backgroundColor: "brown", padding: '1rem' }}>
//             <h1 style={{ color: "wheat" }}>Login</h1>
//             User name: <input value={username} onChange={(e) => setusername(e.target.value)} /><br/>
//             Password: <input value={password} onChange={(e) => setpassword(e.target.value)} /><br/>

//             {logged ? <button onClick={() => dispatch(logout())}>Logout</button> :
//             // <button onClick={() => dispatch(loginAsync({ username, password}))}>Login</button>} this line was changed accordingly with the added method
//                 <button onClick={handleLogin}>Login</button>}

//             <button onClick={() => dispatch(aboutAsync())}>About</button>
//             <button onClick={() => dispatch(contactAsync())}>Contact</button>
//         </div>
//     )
// }

// export default Login