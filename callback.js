const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


function getCookies() {

  // Progression 2: using setTimeout() - use 1000 units for time parameter

  setTimeout(()=>{
    let output = ""
    cookies.forEach(curr => {
      output += `<li>${curr.name}</li>`
      console.log(output);
    });
    document.body.innerHTML = output
  },1000)
  
}

  

//Progression 3: Create a function to creat cookies
  // use setTimeout() -- use 2000 units for time parameter

function createCookie(callback) {

  setTimeout(() => {

    cookies.push(newCookie)
    callback()
  }, 2000);
  
}

// Progression 4: calling functions

createCookie(getCookies)