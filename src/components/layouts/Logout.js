export const  Logout = () =>{
    let keysToRemove = ['uhex',  'shex'];
        for (const key of keysToRemove) {
            localStorage.removeItem(key);
        } 
        window.location.reload()
   }