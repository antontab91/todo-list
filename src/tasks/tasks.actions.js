import { from } from 'core-js/fn/array';
import *as tasksGateway from './tasks.gateway';
import { tasksListSelector } from './tasks.selectors';

export const TASKS_LIST_RECEIVED = "TASKS/TASKS_LIST_RECEIVED";

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
    const tasksList = tasksListSelector(state);
    const task = tasksList.find((task) => {
      return task.id === taskId;
    })

    const updatedTask = {
      ...task,
      done: !task.done,
    }
    return tasksGateway.updateTask(taskId, updatedTask)
      .then(() => {
        return dispatch(getTasksList())
      })
  }
}

export const deleteTask = (taskId) => {
  return function (dispatch) {
    return tasksGateway.deleteTask(taskId)
      .then(() => {
        return dispatch(getTasksList())
      })
  }
}

export const createTask = (text) => {
  return function (dispatch) {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };

    return tasksGateway.createTask(taskData)
      .then(() => {
        return dispatch(getTasksList())
      })
  }
}



