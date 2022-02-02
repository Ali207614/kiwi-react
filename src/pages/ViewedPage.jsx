import  {useState , useEffect} from "react"
import Card from "../component/Card/Card"

import axios from "axios"

const ViewedPage = () => {
    const [Page1,setPage1] = useState({
        isFetched:false,
        data:[],
        error:null
    })
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=6`, {
          })
          .then(function (response) {
           setPage1({
               isFetched:true,
               data:response.data,
               error:false,
           })
          })
          .catch(function (error) {
            setPage1({
                isFetched:true,
                data:[],
                error:error,
            })
          })
      
    }, []);
    return (
        <div className="container">
            <div className="row1 product">
        {
                     Page1.data.map((item,index) =>(
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


export default ViewedPage;