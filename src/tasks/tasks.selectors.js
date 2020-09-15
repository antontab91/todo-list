import { createSelector } from 'reselect';

export const tasksListSelector = (state) => {
  return state.tasks.tasksList;
}

export const sortedTasksListSelector = createSelector(
  [tasksListSelector],
  (tasksList) => {
    return tasksList.slice().sort((a, b) => {
      if (a.done - b.done !== 0) {
        return b.done - a.done;
      }
      return new Date(a.createdAt) - new Date(b.createdAt);
    })
  }
)