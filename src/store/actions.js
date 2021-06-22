import axios from 'axios'
import router from "../router";

export const login = ({ commit, state }, form) => {
    axios.post(
        process.env.VUE_APP_API_URL+'/auth/login',
        {
            email: form.email,
            password: form.password,
            device_name: "vue"
        }
    ).then((response) => {
        commit('token', response.data.token)

        const user = {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            created_at: response.data.created_at,
            is_admin: response.data.is_admin,
        }

        commit('data', user)
        state.msg.success = 'you are connected'
        console.log(router.push('HomeAuth'))
        router.push('HomeAuth');
    }).catch(() => {
        state.msg.error = 'Mauvais identifiant'
    });
}

export const register = ({ commit, state }, form) => {
    axios.post(
        process.env.VUE_APP_API_URL+'/auth/register',
        {
            name: form.name,
            email: form.email,
            password: form.password,
            device_name: "vue"
        }
    ).then((response) => {
        commit('token', response.data.token)

        const user = {
            name: response.data.name,
            email: response.data.email,
            created_at: response.data.created_at
        }

        commit('data', user)
        state.msg.success = 'Compte enregsitré'
        window.location.href="/"
    }).catch(() => {
        state.msg.error = "L'email existe deja"
    });
}

export const modify = ({ commit, state }, form) => {
    console.log(form)
    axios.post(
        process.env.VUE_APP_API_URL+'/modify',
        {
            id: form.id,
            name: form.name,
            email: form.email,
            password: form.password,
            confirmPassword: form.confirmPassword
        }
    ).then((response) => {

        const user = {
            name: response.data.name,
            email: response.data.email,
            created_at: response.data.created_at
        }

        commit('data', user)
        state.msg.success = 'Compte Modifié'
        router.push('profile');
    }).catch(() => {
        state.msg.error = "L'email existe deja"
    });
}

export const logout = ({ commit, state }) => {
    const token = state.user.token;
    if (!token) {
        return;
    }

    axios.post(
        process.env.VUE_APP_API_URL+'/api/auth/logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
        state.msg.success = 'Vous etes déconnecté'
    }).catch(() => {
        state.msg.error = "Echec de la deconnexion"
    });
    commit('token', null);
    commit('data', {});
    window.location.href = "/"
}

export const getNews = ({ commit, state }) => {
    axios.get(
        process.env.VUE_APP_API_URL+'/news').then((response) => {
        const news = response.data.allNews

        console.log(news)

        commit('news', news)
    }).catch(() => {
        state.msg.error = "Echec du get"
    });
}

export const sendContact = ({ state }, form) => {
    axios.post(
        process.env.VUE_APP_API_URL+'/contact',{
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            object: form.object,
            message: form.message,

        },).then(() => {

    }).catch(() => {
        state.msg.error = "Echec du get"
    });
}

export const showProfile = () => {
    router.push('profile');
}

export const tasks_user = ({ commit, getters, state }) => {
    axios.post(
        'http://sanctumwilliam.herokuapp.com/api/tasksuser',{
            user_id: getters.user.data.id
        }, {
            headers: {
                'Authorization': `Bearer ${state.user.token}`
            }
        }).then((response) => {
        const tasks = response.data['posts']

        commit('tasks', tasks)
    }).catch(() => {
        state.msg.error = "Echec du get"
    });
}

export const updateTask = ({  state }, task) => {
    axios.put(
        `http://sanctumwilliam.herokuapp.com/api/tasks/${task.id}`, {
            body: task.body,
        },
        {
            headers: {
                'Authorization': `Bearer ${state.user.token}`
            }
        }
    ).then(() => {
        state.msg.success = 'task updates'
        router.push('/me');
    }).catch(() => {
        state.msg.error = 'Erreur mise a jour'
    });
}

export const deleteTask = ({ state }, taskId) => {
    axios.delete(
        `http://sanctumwilliam.herokuapp.com/api/tasks/${taskId}`, {
            headers: {
                'Authorization': `Bearer ${state.user.token}`
            }
        }).then(() => {
        state.msg.success = 'task destroyed'
        router.push('/me');
    }).catch(() => {
        state.msg.error = "Echec de la suppresion"
    });
}

export const createTask = ({ getters, state }, form) => {
    axios.post(
        'http://sanctumwilliam.herokuapp.com/api/tasks', {
            body: form.body,
            user_id: getters.user.data.id
        },
        {
            headers: {
                'Authorization': `Bearer ${state.user.token}`
            }
        }
    ).then(() => {
        state.msg.success = 'task created'
        router.push('/tasks');
    }).catch(() => {
        state.msg.error = "Echec d'ajout"
    });
}
