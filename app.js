const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    //geocode(address, (error, data) => {
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }

        //forecast(data.latitude, data.longitude, (error, forecastData) => {
        forecast(latitude, longitude, (error, forecastData) => {    
            if (error) {
                return console.log(error)
            }

            //console.log(data.location)
            console.log(location)
            console.log(forecastData)
        })
    })
}




// console.log('Error', error)
        // console.log('Data', data)
        // forecast(data.latitude, data.longitude, (error, data) => {
        //     console.log('Error', error)
        //     console.log('Data', data)
        // })


// const request = require('request')
// const url='http://api.weatherstack.com/current?access_key=15c2323abb02a122bc61e63073772f31&query=40.730610,-73.935242'
// request({url: url, json : true},(error, response)=>{
//     if (error){
//         console.log('Unable to connect to the weather app')
//     } else if(response.body.error){
//         console.log('Unable to find location')
//     } else{
//         console.log(response.body.current.weather_descriptions + '. It is currently '+ response.body.current.temperature + ' degrees out. There is ' + response.body.current.precip + ' % possibility to train.')
//     }
    
    
    //console.log(response.body.current)
    // const data=JSON.parse(response.body)
    // console.log(data.current)
    //console.log(response)
//})

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFzYW50aHJhbSIsImEiOiJja3N0MDR1OHAxMXAxMnVtZHd2Z3N5Ym0zIn0.afESYMzUM8qw9zSvS5UFiw&limit=1'
// request({url:geocodeURL,json:true},(error,response)=>{
//     if (error) {
//         console.log('Unable to connect to location services')
//     } else if (!response.body.features){
//         console.log('Unable to find the location')
//     } else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude,longitude)
//     }
// })
// console.log('Starting')

// setTimeout(() => {
//     console.log('2 sec time')
// },2000)

// setTimeout(() => {
//     console.log('0 sec time')
// },0)

// console.log('Stopping')

