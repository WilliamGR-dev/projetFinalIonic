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
            subscribeNow: response.data.is_subscribe,
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
        router.push('connexion');
    }).catch((error) => {
        state.msg.error = error.response.data.message;
        router.push('register');
    });
}

export const modify = ({ commit, state }, form) => {
    state.msg.success = ''
    state.msg.error = ''
    if (form.name == '' && form.email == ''){
        state.msg.error = "Erreur lors de la modification"
    }
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
        state.msg.error = "Erreur lors de la modification"
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

export const getNew = ({ commit, state }, id) => {
    axios.get(
        process.env.VUE_APP_API_URL+'/new/'+id).then((response) => {
        const news = response.data.new


        commit('onenew', news)

        router.push('new');
    }).catch(() => {
        state.msg.error = "Echec du get"
    });
}

export const getAllNews = ({ commit, state }) => {
    axios.get(
        process.env.VUE_APP_API_URL+'/allnews').then((response) => {
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

export const showCgu = ({ commit }, id) => {

    commit('planId', id)

    router.push('cgu');
}

export const sessionUpdate = ({ state }) => {

    state.user.data.subscribeNow = true;
    router.push('profile');
}

export const showProfile = () => {
    router.push('profile');
}

export const showSearch = () => {
    router.push('search');
}

export const showLiked = () => {
    router.push('liked');
}

export const showRecentlyPlayed = () => {
    router.push('recentlyplayed');
}

export const showPlaylists = () => {
    router.push('playlists');
}

export const showAlbums = () => {
    router.push('albums');
}

export const showArtistes = () => {
    router.push('artistes');
}

export const showUpgrade = () => {
    router.push('upgrade');
}

export const showHomeAuth = () => {
    router.push('homeauth');
}

export const showPlans = () => {
    router.push('plans');
}

export const showLogin = () => {
    router.push('connexion');
}
