const baseUrl = "https://5f56b6f132f56200168bd86d.mockapi.io/api/v1/tasks";

const headers = {
  "Content-Type": "application/json;charset=utf-8",
}

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(taskData),
  })
}

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(taskData),
  })
}

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  })
}

export const getTasksList = () => {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      return new Error('failed to load tasks list');
    })
}


