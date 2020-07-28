import RegisterPage from '../component/pages/Register'
import LoginPage from '../component/pages/Login'
import editprofilePage from '../component/pages/Editprofile'
import deleteprofilePage from '../component/pages/Deleteprofile'
import createPage from '../component/pages/Createpage'
import AddItemUser from '../component/pages/Addallitemuser'
import ProfilePage from '../component/pages/Profile'
import ViewNotebook from '../component/pages/Viewnotebook'

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
        url: "/editprofile",
        component: editprofilePage,
    },
    deleteprofile: {
        url: "/delete",
        component: deleteprofilePage,
    },
    createprofile: {
        url: "/create",
        component: createPage
    },
    adddevice: {
        url: "/add",
        component: AddItemUser
    },
    profilepage: {
        url: "/profile",
        component: ProfilePage
    },
    viewnotebooks: {
        url: "/notebooks",
        component: ViewNotebook
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
            components.deleteprofile,
            components.adddevice,
            components.createprofile,
            components.profilepage,
            components.viewnotebooks
        ],
        redirectRoutes: "/profile"
    }
}