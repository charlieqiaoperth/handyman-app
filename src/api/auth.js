import axios from 'axios';

export function login(user) {
  return axios.post('/auth', user).then(auth => { 
 
    const data = auth.data;
  
    localStorage.setItem('jwt_token', data.token);
   
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwt_token}`;
    return data;
  });
}

export function creatNewUser(user) {
  return axios.post('/users', user).then(user => {
 
    const data = user.data;

    localStorage.setItem('jwt_token', data.token);
   
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwt_token}`;
    return data;
  })
  // .catch(err=>{
  //   console.log(err.response.data);
  //   return err.response.data});
}

export function logout() {
  localStorage.removeItem('jwt_token');
  return Promise.resolve(null);
}

export function getToken() {
  return localStorage.jwt_token;
}

export function loggedIn() {
  let token = getToken();
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } 
  return !!token;  
}


// export function logged() {
//   const loggedIn=false;

//   return loggedIn;
// }