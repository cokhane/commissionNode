const jsonfile = require('jsonfile')
const fs = require('fs')

const jsonfiless = require('/Github/exam/commissiontest/input.json')

export function userActionIn(e) {
  return (e.operation.amount > 16666.66666666) ?
   '5.00' :
  (e.operation.amount * 0.0003).toString()
}

export function userActionOut(e) {
  // return (e.user_type == "natural") ?
  // (e.operation.amount <= 1000.00) ?
  // (e.operation.amount * 0.0).toString()
  //  : ((e.operation.amount - 1000) * 0.003).toString()
  //  : /* legal*/ (e.operation.amount * 0.003).toString()

  if(e.user_type == "natural"){
    if(checkIsRegistered(e)){
      return 'yes'
    }else{
      return 'no'
    }

  }else{
    return 'not natural'
  }
}

const checkIsRegistered = (e) => {
   return getJson(e)
}


const getJson = (e) => {
// /Github/exam/commissiontest/input.json

  const jsonMapData = jsonfiless.map((item) => {
      item.type = 'cascasdas'

      console.log('item type: ', item)
      console.log('item type change : ', item.type)
      return item
  });

  var jsonContent1 = JSON.stringify(jsonfiless);

      var jsonObj = JSON.parse(jsonContent1);
      console.log(jsonObj)

    // stringify JSON Object
    var jsonContent = JSON.stringify(jsonObj);
    console.log(jsonContent)


  fs.writeFile('asdasdasd.json', jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }

    console.log("JSON file has been saved.");
});


  return true


}




// const formatJsonData = (a,b,c) => {
//     let jsonObj = {
//       user_id: a,
//       weekcashout: b,
//       amount: c,
//     };
//     // json data
//
//
// }
