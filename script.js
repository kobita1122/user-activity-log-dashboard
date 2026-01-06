const data = [
  { user: "Admin", action: "LOGIN", time: "09:00" },
  { user: "Manager", action: "UPDATE", time: "09:15" },
  { user: "Admin", action: "LOGOUT", time: "09:30" },
  { user: "User", action: "LOGIN", time: "10:00" }
];

const tbody = document.getElementById("logs");

function render(list) {
  tbody.innerHTML = "";
  list.forEach(l => {
    tbody.innerHTML += `
      <tr>
        <td>${l.user}</td>
        <td>${l.action}</td>
        <td>${l.time}</td>
      </tr>
    `;
  });
}

function filter(type) {
  if (type === "ALL") render(data);
  else render(data.filter(l => l.action === type));
}

render(data);
