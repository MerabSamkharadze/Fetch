const ul = document.getElementById("ul");

fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
  .then(function (responseinfo) {
    if (!responseinfo.ok) {
      throw responseinfo.status;
    }
    return responseinfo.json();
  })
  .then(function (responseData) {
    responseData.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.company.name;
      ul.appendChild(li);
    });
  })
  .catch(function (error) {
    if (error === 404) {
      const li = document.createElement("li");
      li.textContent = "Page not found";
      ul.appendChild(li);
    } else {
      const li = document.createElement("li");
      li.textContent = "Server Error";
      ul.appendChild(li);
    }
  });
