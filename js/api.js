const URL_Address =
  'https://ytmzpfsdrd.execute-api.us-east-1.amazonaws.com/default/testFunction';

function scan() {
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

function putItem() {
  console.log('Putting data to AWS dynamoDB');
  var randomPrimaryKey = Date.now();
  fetch(URL_Address, {
    method: 'post',
      body: JSON.stringify({
            TableName: 'test',
            Item: {
              myPrimaryKey: randomPrimaryKey,
              mySortKey: 'any sort key',
              myData: 'added some new data',
            },
            ReturnConsumedCapacity: 'TOTAL',
    }),
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