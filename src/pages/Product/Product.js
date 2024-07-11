import React ,{useState , useEffect} from 'react'
import './Product.css'
import { Link ,json,useParams} from 'react-router-dom'
import Chart from '../../components/Chart/Chart'
import { productData } from '../../dataCharts'
export default function Product() {

    let productID=useParams()

    const[getproductData,setgetproductData]=useState({})


    const [titleinfo, setTitleinfo] = useState("");
    const [priceinfo, setPriceinfo] = useState("");
    const [statusProductInfo, setStatusSroductInfo] = useState("");
    const [statusInput,setstatusInput]=useState(false);
    const[getDataStatus , setgetDataStatus]=useState(false);


    useEffect(()=>{
        async function fetchgetproductData(){
            await fetch(`http://localhost:3000/product/${productID.productId}`)
            .then(respons=>respons.json())
            .then(data=>setgetproductData(data))
        }
        fetchgetproductData()

    },[getDataStatus])


    useEffect(()=>{
        setTitleinfo(getproductData.title)
        setPriceinfo(getproductData.price)
        setStatusSroductInfo(getproductData.status)
    },[getproductData])



    const EditProductHandler=()=>{
        if(titleinfo && priceinfo && statusProductInfo){
            setstatusInput(false)
            let newinfoProduct={
                id:getproductData.id,
                title:titleinfo,
                price:priceinfo,
                status: statusProductInfo,
                img:getproductData.img
            }

            async function updateproductData(){
                await fetch(`http://localhost:3000/product/${getproductData.id}`,{
                    method:"PUT",
                    body:JSON.stringify(newinfoProduct)
                })
                .then(respons=>{
                    if(respons.status==200){
                        setgetDataStatus(prev=>!prev)
                    }
                })
            }

            updateproductData()
        }else{
            setstatusInput(prev=>!prev)
        }
    }

  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to='/newproduct'>
                <button className='productAddbtn'>create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTop-left">
                <Chart title="فروش ماهانه" data={productData} dataKey="Sale"/>
            </div>
            <div className="productTop-right">
                <div className="productTopInfo">
                    <span className='productInfoTopTitle'>{getproductData.title}</span>
                    <img src={`/${getproductData.img}`} alt="picture" className='productInfoImg' />
                </div>
                <div className="productbottomInfo">
                    <div className="productInfoItem">
                        <div className="productInfoValue">{getproductData.id}</div>
                        <div className="productInfoKey"> : ID </div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoValue">{getproductData.title}</div>
                        <div className="productInfoKey">: نام محصول </div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoValue">{getproductData.price}</div>
                        <div className="productInfoKey">: قیمت </div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoValue">{getproductData.status}</div>
                        <div className="productInfoKey">: وضعیت </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
        <div className="productBottomList">
                <div className="productBottomItem">
                <input
                  className="productinput-style"
                  placeholder="نام محصول "
                  value={titleinfo}
                  onChange={(event) => setTitleinfo(event.target.value)}
                />
                <input className="productinput-style"
                  placeholder="قیمت"
                  value={priceinfo}
                  onChange={(event) => setPriceinfo(event.target.value)}
                />
                <select
                  name="status"
                  id="status"
                  className="productinput-style"
                  value={statusProductInfo}
                  onChange={(event) => setStatusSroductInfo(event.target.value)}
                >
                  <option value="active">active</option>
                  <option value="non-active">non-active</option>
                </select>
                </div>
                {statusInput && <h5 className='input-message'>لطفا اطلاعات را کامل وارد کنید</h5>}
                <div className="productBottomItembtn">
                    <button className="productBottom__btn" onClick={EditProductHandler}>ویرایش</button>
                </div>
            </div>
            <div className="productBottom__header">
                <span className='productBottom__title'>{getproductData.title}</span>
                <img src={`/${getproductData.img}`} alt="picture" className='productBottom__img' />
            </div>
        </div>
    </div>
  )
}
