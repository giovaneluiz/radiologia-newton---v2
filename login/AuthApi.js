const URL = 'https://api-projeto-odonto.onrender.com'

const login = async (email, password) => {
  const requestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  }

  const response = await fetch(`${URL}/signin`, requestInit)
  if(response.ok) {
    return response.json()
  } else {
    return null
  }
}

const loginGoogle = async () => {
  const requestInit = {
    method: 'GET'    
  }

  const response = await fetch(`${URL}/auth/google`, requestInit)
  
  if(response.ok) {
    return await response.json()
  } else {
    return null
  }
}

const signup = async (name, email, ra, password, passwordConfirmation) => {  
  if(password !== passwordConfirmation){
    alert('Senhas não conferem.')
    return null
  } 

  const requestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, ra, password})
  }
  
  const response = await fetch(`${URL}/signup`, requestInit)

  if(response.ok) {
    return await response.json()
  } else {
    return null
  }
}

export {
  login,
  signup,
  loginGoogle
}
