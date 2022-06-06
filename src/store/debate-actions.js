import { debateService } from "../services/debate-service.js"
import { debateActions } from "./debate-slice"

export const fetchDebateIds = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            return await debateService.fetchDebateIds()
        }
        try {
            const debateIds = await fetchData()
            dispatch(debateActions.replaceDebateIds({ debateIds }))
        } catch (err) {
            console.log(err);
        }
    }
}

export const fetchDebate = (debateId) => {
    return async (dispatch) => {
        const fetchData = async () => {
            return await debateService.fetchDebateById(debateId)
        }
        try {
            const debate = await fetchData()
            dispatch(debateActions.replaceDebate({ debate }))
        } catch (err) {
            console.log(err)
        }
    }
}

export const sendNewDebateForApproval = () => {
    return async (dispatch) => {
        // const sendRequest = () => {

        // }
    }
}