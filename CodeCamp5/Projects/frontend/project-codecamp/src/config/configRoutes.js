import RegisterPage from '../component/pages/Register'
import LoginPage from '../component/pages/Login'
import LogoutPage from '../component/pages/Logout'
import EditNotebooknaKub from '../component/pages/Editnotebook'
import createPage from '../component/pages/Createpage'
import AddItemUser from '../component/pages/Addallitemuser'
import ProfilePage from '../component/pages/Profile'
import ViewNotebook from '../component/pages/Viewnotebook'
import ChangeName from '../component/pages/Edituser'
import ViewPhone from '../component/pages/ViewPhone'
import AddPhone from '../component/pages/Addphone'
import EditPhone from '../component/pages/EditPhone'
import DeletePhone from '../component/pages/DeletePhone'




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
    },
    logoutpageuser: {
        url: "/logout",
        component: LogoutPage
    },
    showphones: {
        url: "/phone",
        component: ViewPhone
    },
    addphone: {
        url: "/addphone",
        component: AddPhone
    },
    edit_phone: {
        url: "/editphone",
        component: EditPhone
    },
    delete_phone: {
        url: "/deletephone",
        component: DeletePhone
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
            components.changenameuser,
            components.logoutpageuser,
            components.showphones,
            components.addphone,
            components.edit_phone,
            components.delete_phone
        ],
        redirectRoutes: "/create"
    },
    user: {
        allowedRoutes: [
            components.profilepage,
            components.logoutpageuser
        ],
        redirectRoutes: "/profile"
    }
}
