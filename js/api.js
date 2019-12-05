const URL_Address =
  'https://ig4y9n2273.execute-api.us-east-1.amazonaws.com/default/testFunction';

function getTable() {
  console.log('Getting data from AWS dynamoDB');
  fetch(URL_Address + '/?TableName=test', {
    method: 'get',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  })
    .then(res =>
      res.json().then(data => ({
        status: res.status,
        body: data,
      }))
    )
    .then(obj => {
      if (obj.status === 200) {
        console.log(obj.body);
      } else {
        console.log('Error', obj.body.error);
      }
    });
}
