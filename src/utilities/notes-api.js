import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export const createNote = async noteData => {
  return sendRequest(BASE_URL + '/new', 'POST', { text: noteData });
};

export const getNotes = async () => {
  return sendRequest(BASE_URL);
};

export const deleteNotes = async (id) => {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}