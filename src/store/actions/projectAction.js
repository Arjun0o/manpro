export const createProject = (project) => {
    return (dispatch, getState) => {

        //make an async request to the database

        dispatch({ type: 'CREATE_PROJECT', project })
    }
}