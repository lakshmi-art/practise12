import React,{useEffect, useRef} from 'react';

const Component1 = () => {

 const data  = useRef(null);
 const submitHandler = e => {
    e.preventDefault();
    console.log(data.current.value);
    alert(data.current.value);
    e.target.reset();
}
/* //updating
data.current.value = 'hlo' */
useEffect(() => {
    data.current.focus();

},[])


  return (
    <div style={{'marginTop':"30px"}}>
        <form onSubmit={submitHandler}>
      <input ref={data} type='Text' placeholder='Enter your Name'/><br/><br/>
    
      <input type='submit'/>
      </form>
    </div>
  );
}

export default Component1;
