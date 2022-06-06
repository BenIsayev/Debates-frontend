import { utilService } from "./util-service"

const DUMMY_DEBATES = [
    {
        _id: 'd1',
        question: 'האם היית מעדיף לשבור יד או לשבור רגל?',
        comments: [],
        submitedBy: {
            userId: 'u1'
        }
    },
    {
        _id: 'd2',
        question: 'מה היית מעדיף להיות מאוד נמוך או מאוד גבוה?',
        comments: [],
        submitedBy: {
            userId: 'u1'
        }
    },
    {
        _id: 'd3',
        question: 'שאלת דוגמא 3',
        comments: [],
        submitedBy: {
            userId: 'u1'
        }
    },
    {
        _id: 'd4',
        question: 'שאלת דוגמא 4',
        comments: [],
        submitedBy: {
            userId: 'u1'
        }
    },
    {
        _id: 'd5',
        question: 'שאלת דוגמא 5',
        comments: [],
        submitedBy: {
            userId: 'u1'
        }
    },
    {
        _id: 'd6',
        question: 'שאלת דוגמא 6',
        comments: [],
        submitedBy: {
            userId: 'u1'
        }
    }]

const fetchDebateIds = () => {
    utilService.shuffle(DUMMY_DEBATES)
    return Promise.resolve(DUMMY_DEBATES.map(debate => debate._id))
}

const fetchDebateById = async (debateId) => {
    const debate = DUMMY_DEBATES.find(debate => debateId === debate._id)
    return Promise.resolve(debate)
}


export const debateService = {
    fetchDebateById,
    fetchDebateIds
}