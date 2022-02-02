
import  {useState , useEffect} from "react"
import CardTwo from "../../component/CardTwo/CardTwo"
import axios from "axios"
import "./main.css"

const Product = () => {
    const [SecondPage,setSecondPage] = useState({
        isFetched:false,
        data:[],
        error:null
    })
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`, {
          })
          .then(function (response) {
           setSecondPage({
               isFetched:true,
               data:response.data,
               error:false,
           })
          })
          .catch(function (error) {
            setSecondPage({
                isFetched:true,
                data:[],
                error:error,
            })
          })
      
    }, []);
    console.log(SecondPage)
    return (
        <div className="container">
            <div className="row1 product b-bottom">
        {
                     SecondPage.data.map((item,index) =>(
                         <CardTwo
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



export default Product;