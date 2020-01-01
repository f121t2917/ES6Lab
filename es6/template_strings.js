// Template Strings

function getMessage() {
  const year = new Date().getFullYear();
  return `The year is ${year}`;
}

getMessage();

// PHP 
// $data = '{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'",'"}';

const device_id = 4;
const guid = 20;
const username = 'hello';

const data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}","}`;


