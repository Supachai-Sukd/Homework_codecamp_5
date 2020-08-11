import RegisterPage from '../component/pages/Register'
import LoginPage from '../component/pages/Login'
import EditNotebooknaKub from '../component/pages/Editnotebook'
import createPage from '../component/pages/Createpage'
import AddItemUser from '../component/pages/Addallitemuser'
import ProfilePage from '../component/pages/Profile'
import ViewNotebook from '../component/pages/Viewnotebook'
import ChangeName from '../component/pages/Edituser'

const components = {
    register: {
        url: "/register",
        component: RegisterPage,
    },
    login: {
        url: "/login",
        component: LoginPage,
    },
    editNotebook: {
        url: "/editprofile",
        component: EditNotebooknaKub,
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
    },
    changenameuser: {
        url: "/change",
        component: ChangeName
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
    admin: {
        allowedRoutes: [
            components.editNotebook,
            components.adddevice,
            components.createprofile,
            components.viewnotebooks,
            components.changenameuser
        ],
        redirectRoutes: "/create"
    },
    user: {
        allowedRoutes: [
            components.profilepage
        ],
        redirectRoutes: "/profile"
    }
}
            