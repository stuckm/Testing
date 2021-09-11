import axios from 'axios'

const state = {
    info: {}
}

const getters = {
    allInfo: (state: { info: any; }) => state.info
};

const actions = {
    async fetchWeather({commit}) {
        const response = await axios.get(
            'https://api.openweathermap.org/data/2.5/weather?q=tempe&appid=eca311ff23cf5f22c22f3a925f51bd5f&units=imperial'
        );
        commit('setWeather', response.data);
    },
    async newWeather({commit }, query: string) {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=eca311ff23cf5f22c22f3a925f51bd5f&units=imperial`

        );
        commit('setWeather', response.data)

    }
}

const mutations = {
    setWeather: (state: { info: any; }, weather: any) => (state.info = weather)
}

export default  {
    state,
    getters,
    actions,
    mutations
}