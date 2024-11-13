document.getElementById("getalltask").addEventListener("click", async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost/auth/jwt/tasks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    for (let task of data) {
      const container = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = task.title;
  
      container.appendChild(title);
      document.getElementsByClassName("task-title")[0].after(container);
    }
  });
  