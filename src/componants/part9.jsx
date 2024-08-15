import { useState } from "react"
import style from "./part1.module.css"

function Part9(){
    let [date1,date2]=useState([])
    let [price1,price2]=useState([])

    let [total1,total2]=useState(0)
    
    
    const today = new Date(); 
    const formattedDate = today.toLocaleDateString(); 



    let [get1,set1]=useState([])
    const onKeyDown2=(index1)=>{
        if (index1.key==="Enter"){
            if (index1.target.value!=""){
                let data=index1.target.value
                index1.target.value=""
                let newdata=[...date1,data]
                date2(newdata);}
        }
    }

    const onKeyDown3=(index2)=>{
        if (index2.key==="Enter"){
            if (index2.target.value!=""){

                let num=Number(index2.target.value)
                let all=[Number(total1)+num]
                total2(all)
                
                let data1=index2.target.value
                index2.target.value=""
                let newdata=[...price1,data1]
                price2(newdata);}

        }
    }
    const changing=(index)=>{
        set1(index)
    }


    return<>
    <div className={style["maindiv"]}>

        <h4 className={style["lunch"]}> <img src="book.jpeg" alt="" className={style["img"]}/>Books</h4>


        <input type="text" name="" id="" placeholder="Enter Item name Here" className={style["input"]}
            onKeyDown={onKeyDown2}/>

        <input type="text" name="" id="" placeholder="Enter Amount Here" className={style["input"]}
            onKeyDown={onKeyDown3}/>    



        <table className={style["table"]}>
            <tr>
                <th>
                <ul className="list-group"> 
                    <li className={`list-group-item`}>Date </li>
                    </ul> 
                </th>
                <th>
                <ul className="list-group"> 
                    <li className={`list-group-item`}>Item Name </li>
                    </ul> 
                </th>
                <th>
                <ul className="list-group"> 
                    <li className={`list-group-item`}>Price </li>
                    </ul> 
                </th>
            </tr>
            <tr className={style["tr"]}>

                {/* date */}
                <td> <ul className="list-group"> 
            {date1.map((index)=><li className={`list-group-item ${get1===index ? 'active': ""}`}
            onClick={()=>changing(index)}>{formattedDate}
            </li>)}
        </ul> </td>


        <td> <ul className="list-group"> 
            {date1.map((date,index1)=><li className={`list-group-item ${get1=== index1 ? 'active': ""}`}
            onClick={()=>changing(index1)}>{date}
            </li>)}
        </ul> </td>
        <td> <ul className="list-group"> 
            {price1.map((price,index2)=><li className={`list-group-item ${get1=== index2 ? 'active': ""}`}
            onClick={()=>changing(index2)}>{price}
            </li>)}
        </ul> </td>
            </tr>
        </table>  
    </div>
    <h4 className={style["total"]}>Your Total Amount is: {total1}</h4>    
    </>
}
export default Part9