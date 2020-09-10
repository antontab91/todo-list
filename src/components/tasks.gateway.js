const baseUrl = "https://5f56b6f132f56200168bd86d.mockapi.io/api/v1/tasks";
const headers = {
  "Content-type": "application/json;charset=utf-8",
}

// get post put delete 

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('failed to fetch tasks list');
    })
}

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(taskData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('failed to create task');
      }
    })
}

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(taskData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('failed to update task');
      }
    })
}

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error('failed to delete task')
    }
  })
}