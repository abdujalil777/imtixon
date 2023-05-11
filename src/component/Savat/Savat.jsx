
import React,{useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

// import { Link } from "react-router-dom"; 
  export default function Card(){
  const select = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const [yigindi, setYigindi] = useState(0)

  function Plus(son){
    dispatch({type: 'plus', one_joyi:son})
  }

  function Minus(son){
    dispatch({type: 'minus', one_joyi:son})
  }

  useEffect(() => {
    let yigindi = 0
    for(let i=0; i<select.length; i++){
      yigindi = yigindi + select[i].count * select[i].narxii
    }
    setYigindi(yigindi)
  },[select]);

  return(
    <div className="container">
      <h2>umumiy narxi: {yigindi} &</h2>
      {
        select.map((item, index) => {
          return(
            <div className="row align-items-center shadow my-3 p-2" key={index}>
              <div className="col-5">
                <img style={{height: '300px'}} src={item.img} alt="asas" />
              </div>
              <div className="col-7">
                <h3>{item.narxii} $</h3>
                <h3>{item.name}</h3>
                <div className="d-flex justify-content-center">
                  <p><button className="btn btn-danger me-2" onClick={()=> Minus(index)}>-</button></p>
                  <h3>{item.count}</h3>
                  <p><button className="btn btn-success me-2" onClick={()=> Plus(index)}>+</button></p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
 
  )

}

