import { utilService } from './util-service';
import { httpService } from './http-service';

const fetchDebateIds = async () => {
  try {
    const debateIds = await httpService.get('debate/ids');
    const shuffeldIds = utilService.shuffle(debateIds);
    return shuffeldIds;
  } catch (err) {
    console.error('Failed getting debate ids', err);
  }
};
const fetchDebateById = async (debateId) => {
  const debate = await httpService.get(`debate/${debateId}`);
  return debate;
};

const createComment = (text) => {
  return {
    _id: utilService.makeId(),
    text,
    user: 'ofir',
    createdAt: Date.now(),
  };
};

const addComment = async (debateId, comment) => {
  return await httpService.put(`debate/${debateId}`, comment);
};

export const debateService = {
  fetchDebateById,
  fetchDebateIds,
  createComment,
  addComment,
};
