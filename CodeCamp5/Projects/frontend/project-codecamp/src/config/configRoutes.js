import RegisterPage from '../component/pages/Register'
import LoginPage from '../component/pages/Login'
import editprofilePage from '../component/pages/Editprofile'
import deleteprofilePage from '../component/pages/Deleteprofile'

const components = {
    register: {
        url: "/users/register",
        component: RegisterPage,
    },
    login: {
        url: "/users/login",
        component: LoginPage,
    },
    editprofile: {
        url: "/editprofile",
        component: editprofilePage,
    },
    deleteprofile: {
        url: "/deleteprofile",
        component: deleteprofilePage,
    }
}

// Role ไหนเข้าหน้าไหนได้บ้าง

export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register
        ],
        redirectRoutes: "/users/login"
    },
    admin: {
        allowedRoutes: [
            components.editprofile,
            components.deleteprofile
        ],
        redirectRoutes: "/editprofile"
    }
}