const cheerio = require('cheerio'),
      axios = require('axios'),
      url = 'https://www.instagram.com/fonz15/';

var data = [];

axios.get( url ).then( (res) => {
  const $ = cheerio.load(res.data);
  // we want the 5th script tag. This contians the shortcodes
  let scriptString = $("script").eq(4).html();
  let split = scriptString.split(",");
  let counter = 0;
  // loop through everythign in the script, we want to find the shortcodes
  for(let x = 0; x < split.length; x++){
    if( split[x].includes("shortcode") ){
      data.push(split[x]);
      counter += 1;
      if( counter === 4 ){
        break;
      }
    }
  }
  // lopp through the first 4 shortcodes and find the actual short code (just the value)
  for(let x = 0; x < 4; x++){
    data[x] =  url + 'p/' + data[x].split(":")[1].replace(/['"]+/g, '');
  }
  console.log( data );

});
