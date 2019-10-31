let currentTimeSheet = [];


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