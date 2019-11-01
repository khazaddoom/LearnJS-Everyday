let currentTimeSheet = [];
const projects = [
    { projectId: 101, name: 'SUGi', active: true },
    { projectId: 102, name: 'EPL world', active: true },
]

let tasks = [
    { taskId: 1001, name: 'SUGi Task 1', projectId: 101 },
    { taskId: 1002, name: 'SUGi Task 2', projectId: 101 },
    { taskId: 1003, name: 'SUGi Task 3', projectId: 101 },
    { taskId: 1004, name: 'SUGi Task 4', projectId: 101 },
    { taskId: 1005, name: 'EPL world Task 1', projectId: 102 },
    { taskId: 1006, name: 'EPL world Task 2', projectId: 102 },
    { taskId: 1007, name: 'EPL world Task 3', projectId: 102 },
    { taskId: 1008, name: 'EPL world Task 4', projectId: 102 },
]

let users = [
    {
        userId: 9001, name: 'ganesh.a', email: 'ganesh.a@juegostudio.com',
        assignedProjects: [101, 102]
    },
    {
        userId: 9002, name: 'ashwath.an', email: 'ashwath.an@juegostudio.com',
        assignedProjects: [101, 102]
    },
    {
        userId: 9003, name: 'nayana.shetty', email: 'nayana.shetty@juegostudio.com',
        assignedProjects: [101, 102]
    },
    {
        userId: 9004, name: 'saurav.kumar', email: 'saurav.kumar@juegostudio.com',
        assignedProjects: [101, 102]
    },
    {
        userId: 9005, name: 'anusha.karkera', email: 'anusha.karkera@juegostudio.com',
        assignedProjects: [101, 102]
    },
]

function createTimeSheet(date) {
    return {
        "date": date,
        "tasks": []
    }
}

// + button
function addTasks() {
    // show projects

    showPrjects(user);

    // select a project

    selectProject(projectId);

    // show tasks

    showTasks(projectId);

    // select tasks

    getSelectedTasks()

}

function showPrjects(user) {
    user.projects.forEach(element => {
        projects['projectId'] == element
    });
}