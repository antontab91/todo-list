import { from } from "core-js/fn/array";
import { fetchTasksList, createTask, updateTask, deleteTask } from './tasks.gateway';
const TASKS_LIST_RECEIVED = "TASKS/TASKS_LIST_RECEIVED";

const tasksListReceived = (tasksList) => {
  return {
    type: TASKS_LIST_RECEIVED,
    tasksList,
  }
}

export const getTasksList = () => {
  return function (dispatch) {
    return fetchTasksList()
      .then((tasksList) => {
        dispatch(tasksListReceived(tasksList))
      })
  }
}


