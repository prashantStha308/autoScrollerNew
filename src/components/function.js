export const scroller = ( speed , intervalID)=>{
    const userInput = document.getElementById('uInput');
    const contentHeight = userInput.scrollHeight;

    console.log( " userInput Height:  ", contentHeight)
    console.log( "speed: ", speed);
    userInput.scrollTop += contentHeight - ( contentHeight - speed * 20 ); 
    console.log(' userInput Top Position:  ',userInput.scrollTop);

    if( userInput.scrollTop === (contentHeight - 390) ){
        clearInterval( intervalID )
    }

}




// const uInput = document.getElementById("uInput");
// const areaHeight = uInput.scrollHeight;

// let scrollVal = 0;

// intervalID.current = setInterval( ()=>{
//   scrollVal += scrollVal + count;
//   uInput.scrollTop = areaHeight - ( areaHeight - count * 50 )
//   if( scrollVal >= areaHeight ){
//     scrollVal = uInput.scrollTop;
//   }
//   console.log( "inLoop, srlVal: ",scrollVal )
//   console.log( "Count: ",count )
// },500 )
// uInput.scrollBy({
//   top: scrollVal,
//   left: 0,
//   behavior: "smooth"
// })