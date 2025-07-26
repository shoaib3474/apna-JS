// Callback , Pass function as Argument in function

function getData (callback){
    console.log("Getting Data .....")
    setTimeout(
       ()=>{
         callback("Data Received")
       }
    , 2000);
}

function showData (data ){
         console.log(
            "Data :" , data
         );

}

getData(showData)


// callback hell


function loginUser (userName, callback){
  console.log('logging in user' , userName)
  setTimeout(() => {
    console.log('login successfull')
    callback()
  }, 2000);
}


function getProfile (callback){
  console.log("fetching profile")
  setTimeout(() => {
    console.log('Fetch profile successfull')
    callback()
  }, 2000);
}


function getPosts (callback){
  console.log('Getting Posts ...')
  setTimeout(() => {
    console.log('Get Posts successfull')
    callback()
  }, 2000);
}



loginUser("Shoaib" , ()=>{
    getProfile(
        ()=>{
            getPosts(
                ()=>{
                    console.log('All Done')
                }
            )
        }
    )
})