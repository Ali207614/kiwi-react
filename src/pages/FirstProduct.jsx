import  {useState , useEffect} from "react"
import Card from "../component/Card/Card"

import axios from "axios"

const FirstProduct = () => {
    const [Page,setPage] = useState({
        isFetched:false,
        data:[],
        error:null
    })
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`, {
          })
          .then(function (response) {
           setPage({
               isFetched:true,
               data:response.data,
               error:false,
           })
          })
          .catch(function (error) {
            setPage({
                isFetched:true,
                data:[],
                error:error,
            })
          })
      
    }, []);
    console.log(Page)
    return (
        <div className="container">
            <div className="row1 product b-bottom">
        {
                     Page.data.map((item,index) =>(
                         <Card
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                              key={index}

                         />
                     ))
         }
        </div>
        </div>
    );
};



export default FirstProduct;