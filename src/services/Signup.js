const signup = (user) => {
  console.log(user, "Iside service...")
  return new Promise((resolve, reject) => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const p = fetch(url);
    p.then((response) => {
      const dataPromise = response.json();
      dataPromise.then((data) => {
        resolve(data)
      })
    }).catch((error) => {
      reject(error)
    })
  })
};

export default signup