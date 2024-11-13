const form = document.forms.login;

const submitButton = document.getElementById("submit");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  const body = {
    email: email,
    password: password,
  };
  console.log(body);
  const response = await fetch("http://localhost/auth/jwt/sign", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status === 200) {
    alert("Login successful");
    const data = await response.json();
    const token = data.token;
    localStorage.setItem("token", token);
    window.location = "./dashboard.html";
  } else {
    alert("Login failed check credentials and yourself");
    const res = await fetch(url, config);
    const token = await res.json();
    if (token !== null) {
      localStorage.setItem("token", token);
      window.location = "./index.html";
    }
  }
});

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
