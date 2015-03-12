var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//POST requests going to 'https://camfind.p.mashape.com/image_requests'
  //Input: image_request[remote_image_url], image_request[locale]
  //Output: { 'token': [the token for the image] } JSON format

//GET request going to 'https://camfind.p.mashape.com/image_responses/{token}'
  //Input: Post's output
  //Output: two responses
    //1) Success path { 'status': 'completed', 'name': [the description of the image] }
    //2) Error path { 'status': 'skipped' , 'reason': 'blurry'}

// Need to do:
//   - write the head
//   - get
//   - post

app.post('/api/imgurl', function(req, res){
  res.set(header)
  res.send('image_request[locale]', req.body.locale)
  res.send('image_request[remote_image_url]', req.body.imgurl)

  //res something return the token
  res.end(get the data)

});