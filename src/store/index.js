import { createStore } from 'vuex'
import apiClient from "./baseUrl"
import dean from './employee/dean'
import auth from './employee/auth'
import degreeHead from './employee/degree_head/index'
import registrar from './employee/registrar'
import cashier from './employee/cashier'
export default createStore({
    modules: {
        dean,
        registrar,
        cashier,
        auth,
        degreeHead,

    },
    state: {
        programs: [], // still im not using it
        isItemLoading: '',
        isLoading: null, //loading for entry page,
        academicYears: [],
        selectedAcademicYearId: '',
        acYearId: ''
    },
    mutations: {
        setPrograms(state, programs) {
            state.programs = programs
        },
        setIsItemLoading(state, isItemLoading) {
            state.isItemLoading = isItemLoading
        },
        setIsLoading(state, isLoading) {
            state.isLoading = isLoading
        },
        setAcademicYears(state, payload) {
            state.academicYears = payload
        },
        setSelectedAcademicYearId(state, payload) {
            state.selectedAcademicYearId = payload
        },
        setSelectedAcYearId(state, year) {
            state.acYearId = year
        }
    },
    getters: {
        programs(state) {
            return state.programs
        },
        isItemLoading(state) {
            return state.isItemLoading
        },
        isLoading(state) {
            return state.isLoading
        },
        academicYears(state) {
            return state.academicYears
        },
        selectedAcademicYearId(state) {
            return state.selectedAcademicYearId
        },
        acYearId(state) {
            return state.acYearId
        }
    },
    actions: {
        async fetchPrograms({ commit }) {
            try {
                commit('setIsLoading', true)
                var response = await apiClient.get('/api/programs')
                if (response.status === 200) {
                    commit('setPrograms', response.data)
                } else {
                    throw 'faild to load programs'
                }
            } catch (e) {
                console.log(e.response)
                throw e
            } finally {
                commit('setIsLoading', false)
            }
        },
        async fetchAcademicYears({ commit }) {
            try {
                commit('setIsLoading', true)
                var response = await apiClient.get('/api/academic_years')
                if (response.status === 200) {
                    commit('setAcademicYears', response.data)
                } else {
                    throw 'faild to load AcademicYears'
                }
            } catch (e) {
                console.log(e.response)
                throw e
            } finally {
                commit('setIsLoading', false)
            }
        }
    },
})