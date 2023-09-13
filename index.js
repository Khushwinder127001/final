const cheerio = require("cheerio");
const axios = require("axios");

axios.get("https://arstechnica.com/gadgets/").then(urlResponse =>{
    const $ = cheerio.load(urlResponse.data);
   
 $('li.article').each((i, element)=>{
    const link = $(element).find("a.overlay").attr("href");
console.log(link);
document.body.appendChild(link);

});
});





