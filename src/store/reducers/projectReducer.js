const initState = {
    projects: [
        { id: '1', title: 'Find Batman', content: 'He ran away AGAIN!' },
        { id: '2', title: 'Collect all the stars', content: 'blah blah blah' },
        { id: '3', title: 'Get black belt in Jiu Jitsu', content: 'blah blah blah' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.error);
            return state;
        default:
            return state;
    }
}
export default projectReducer;