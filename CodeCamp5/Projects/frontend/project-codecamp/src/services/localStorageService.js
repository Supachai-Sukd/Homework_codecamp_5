import jwtDecode from 'jwt-decode'

function setToken(token) {
    localStorage.setItem("ACCESS_TOKEN", token)
}

function getToken() {
    return localStorage.getItem("ACCESS_TOKEN")
}

function removeToken() {
    localStorage.removeItem("ACCESS_TOKEN")
}



function getRole() {
    const token = getToken()

    if (token) {
        const user = jwtDecode(token)

        console.log(user)
        return user.user_level
    }

    return "guest"
}



export default {
    setToken,
    getToken,
    removeToken,
    getRole
    
}