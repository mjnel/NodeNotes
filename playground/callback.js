var getUser = (id, callback) => {

var user = {
  id: id,
  name: "mark"
};
callback(user);


};

getUser(20, (userObject)=>{
  console.log(userObject); 
})
