import RegisterPage from '../component/pages/Register'
import LoginPage from '../component/pages/Login'
import editprofilePage from '../component/pages/Editprofile'
import deleteprofilePage from '../component/pages/Deleteprofile'

const components = {
    register: {
        url: "/register",
        component: RegisterPage,
    },
    login: {
        url: "/login",
        component: LoginPage,
    },
    editprofile: {
        url: "/profile",
        component: editprofilePage,
    },
    deleteprofile: {
        url: "/delete",
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
        redirectRoutes: "/login"
    },
    user: {
        allowedRoutes: [
            components.editprofile,
            components.deleteprofile
        ],
        redirectRoutes: "/delete"
    }
}