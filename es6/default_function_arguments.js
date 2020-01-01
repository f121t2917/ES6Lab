// Default Arguments
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

// 給定user預設值
function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const user = new User(generateId());
createAdminUser(user);

// exam
function addOffset(style = {}) {
  
  style.offset = '10px';
  
  return style;
}
