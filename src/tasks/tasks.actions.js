import *as tasksGateway from './tasks.gateway';
const TASKS_LIST_RECEIVED = "TASKS/TASKS_LIST_RECEIVED";

const tasksListReceived = (tasksList) => {
  return {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasksList,
    },
  }
}

export const getTasksList = () => {
  return function (dispatch) {
    return tasksGateway.fetchTasksList()
      .then((tasksList) => {
        dispatch(tasksListReceived(tasksList))
      })
  }
}

export const updateTask = (taskId) => {
  return function (dispatch, getState) {
    const state = getState();
    tasksList = state.tasksList;
    const task = tasksList.find((task) => {
      return task.id === taskId;
    })
    const updatedTask = {
      ...task,
      done: !done,
    }
    return tasksGateway.updateTask(taskId, updatedTask)
      .then(() => {
        return dispatch(getTasksList())
      })
  }
}



