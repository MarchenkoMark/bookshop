
function check(users, username, password) {
  for (let i = 0; i < users.length; i++) {
    if(users[i].username === username && users[i].password === password) {
      users[i].status = true;
    }
  }
}
