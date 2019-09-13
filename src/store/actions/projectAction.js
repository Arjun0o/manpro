export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        //make an async request to the database

        dispatch({ type: 'CREATE_PROJECT', project })
    }
}