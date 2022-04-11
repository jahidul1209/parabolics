const  IsLoggedIn = () =>{ 
   
    const getitem  = ['uhex' ,'shex']
    var storedata 
    for(const key of getitem){
      storedata =  localStorage.getItem(key)  
    }
    if(storedata){
        return true
    }else{
        return false 
    }       
}
export default IsLoggedIn
