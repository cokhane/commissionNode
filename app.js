import { coutfetch,cinfetch } from './fetch/fetchapi.js';
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Global = require('./global.js')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const fs = require("fs"); // Or `import fs from "fs";` with ESM
const jsonfile = require('jsonfile')

const cinFetchFunc = cinfetch().then(data => {
  return data
},(err) =>{
  console.error(err)
})


const coutFetchFunc = coutfetch().then(data => {
  return data
},(err) =>{
  console.error(err)
})



// /Github/exam/emapta/commission/input.json


const ask = (e) => {
  process.stdout.write(`\n\n ${e}`)
  process.stdout.write('>')
}


process.stdin.on('data', (data) => {

fs.readFile(`${data.toString().trim()}`,  'utf8', (err, data) => {
    if (err){
      console.error(err)
      // console.log('wrong path, goto README file for path instruction')
      console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
    }else{
       getJson(data)
    }

  });

})



// /Github/exam/emapta/commission/input.json

  // const file = e
  // const inputJson = jsonfile.readFileSync(file)

  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
  console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
console.log('darwin ulol chupain mo si ryan!!!! AHAHAHA PAKYU')
ask('\n\n\nEnter input file path for JSON: ')

const getJson = (item) => {

  const jsonString = JSON.parse(item)

  const jsonMapData = jsonString.map(async (e) => {

    if(checkType(e)){
      cinFetchFunc.then(data => {
        if(((data['percents'])*e.operation.amount) / 100 < 5){
          console.log("cash in: ",((data['percents'])*e.operation.amount) / 100)
        }else{
          console.log("cash in: ", 5)
        }
      })

    }else{
      //cashout
      // /Github/exam/emapta/commission/input.json

      if(e.user_type == "natural"){

        if(Global.result.length < 1 ){
          Global.result.push({
                user_id: e.user_id,
                transaction: [
                  {
                  _year: getFullYear(e.date),
                    date_month: [{
                      _month:getMonth(e.date),
                      date_week: [{
                        _week: getWeek(e.date),
                        amount: e.operation.amount
                      }],
                    }],
                  }
                ] ,
           })
        }else{

              const findId = Global.result.findIndex(item => {
                return item.user_id == e.user_id
              })

              // /Github/exam/emapta/commission/input.json

              if(findId > -1){
                const findYear = Global.result[findId]['transaction'].findIndex(item => {
                  return item['_year'] == getFullYear(e.date)
                })
                if(findYear > -1){
                  const findMonth =  Global.result[findId]['transaction'][findYear]['date_month'].findIndex(item => {
                    return item['_month'] == getMonth(e.date)
                  })

                  if(findMonth > -1){
                    const findWeek =  Global.result[findId]['transaction'][findYear]['date_month'][findMonth]['date_week'].findIndex(item => {
                      return item['_week'] == getWeek(e.date)
                    })

                  if(findWeek > -1){
                      //do something
                      let calcTotal = Global.result[findId]['transaction'][findYear]['date_month'][findMonth]['date_week'][findWeek]['amount']
                      calcTotal += e.operation.amount
                       Global.result[findId]['transaction'][findYear]['date_month'][findMonth]['date_week'][findWeek]['amount'] = calcTotal



                    //findweek
                  }else{
                    Global.result[findId]['transaction'][findYear]['date_month'][findMonth]['date_week'].push({
                      _week: getWeek(e.date),
                      amount: e.operation.amount
                    })
                  }
                   //find month
                 }else{
                   Global.result[findId]['transaction'][findYear]['date_month'].push({
                     _month:getMonth(e.date),
                     date_week: [{
                       _week: getWeek(e.date),
                       amount: e.operation.amount
                     }],
                   })
                 }
                //find year
              }else{
               Global.result[findId]['transaction'].push({
                  _year: getFullYear(e.date),
                    date_month: [{
                      _month:getMonth(e.date),
                      date_week: [{
                        _week: getWeek(e.date),
                        amount: e.operation.amount
                      }],
                    }],
                 })
              }
             //find id
           }else{
             coutPushObj(e)
           }


        }//if global array < 1

      }else{ //natural if
        //cout jurid
        return e.operation.amount == '1'
      }

    }
     // /Github/exam/emapta/commission/input.json
  })

  for(let i = 0; i < Global.result.length; i++){
    console.log("\nfirst loop: ",Global.result[i])
    for(let j = 0; j < Global.result[i]['transaction'].length; j++){
      // console.log("\nsecond loop: ",Global.result[i]['transaction'][j])
      for(let k = 0; k < Global.result[i]['transaction'][j]['date_month'].length; k++){
        // console.log("\nthird loop: ",Global.result[i]['transaction'][j]['date_month'][k])
      }
    }
  }
}


//-------------------------CASHOUT FUNC

const coutPushObj = (e) => {
  Global.result.push({
      user_id: e.user_id,
      transaction: [
        {
        _year: getFullYear(e.date),
          date_month: [{
            _month:getMonth(e.date),
            date_week: [{
              _week: getWeek(e.date),
              amount: e.operation.amount
            }],
          }],
        }
      ] ,
   })
}


 // /Github/exam/emapta/commission/input.json


const getWeek = (e) => {
    let date = new Date(e)
    let adjustedDate = date.getDate()+date.getDay();
    let prefixes = ['0', '1', '2', '3', '4', '5'];
    return (parseInt(prefixes[0 | adjustedDate / 7])+1);
}

const getMonth = (e) => {
  let date = new Date(e)
  let adjustedDate = date.getMonth();
  return adjustedDate
}

const getFullYear = (e) => {
    let date = new Date(e)
    let adjustedDate = date.getFullYear();
    return adjustedDate
}



// /Github/exam/emapta/commission/input.json

// -----------------------------------------------


const checkType = (e) => {
  return e.type == 'cash_out' ? false : true
}
