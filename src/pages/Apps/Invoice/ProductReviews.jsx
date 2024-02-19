import { DataTable } from "mantine-datatable"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setPageTitle } from "../../../store/themeConfigSlice"
import IconStar from "../../../components/Icon/IconStar"
import axiosInstance from "../../../api/axios"
import { toast } from "react-toastify"
import { use } from "i18next"
function ProductReviews() {
    const [productReviews,setProductReviews] = useState([])
    const [reload,setRelosd] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setPageTitle("Product Reviews Table"))
    })

    useEffect(()=>{
        axiosInstance.get("/admin/listproductreviews").then((res)=>{
           if(res.data.productReviews){
            setProductReviews(res.data.productReviews)
           }
        })
    },[reload])

    const statusChange = (reviewId,status)=>{
      console.log("reviewId",reviewId)
      axiosInstance.put(`/admin/listreview/${reviewId}`,{status}).then((res)=>{
        if(res.data.message){
           toast.success(res.data.message)
           console.log(res.data.status)
          //  setRelosd(true)
           setProductReviews(prevReviews => {
            return prevReviews.map(review => {
              if (review._id === reviewId) {
                return { ...review, isListed: res.data.status }; 
              }
              return review;
            });
          });
        }else{
          toast.error(res.data.errmsg)
        }
      })
    }
  
    console.log("productReviews",productReviews)
  
    useEffect(() => {
      dispatch(setPageTitle("Product Review Table"))
    })
    const [page, setPage] = useState(1)
    const PAGE_SIZES = [10, 20, 30, 50, 100]
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0])
    const initialRecords = productReviews.slice(0, pageSize)
    const [recordsData, setRecordsData] = useState(initialRecords)
  
    useEffect(() => {
      setPage(1)
    }, [pageSize])
  
    useEffect(() => {
      const from = (page - 1) * pageSize
      const to = from + pageSize
      setRecordsData(productReviews.slice(from, to))
    }, [page, pageSize])
  

  return (
    <div>

    <div className="panel mt-6">
      <h5 className="font-semibold text-lg dark:text-white-light mb-5">
        Product Reviews
      </h5>
          
          <div className="datatables">
          <DataTable
            noRecordsText="No results match your search query"
            highlightOnHover
            className="whitespace-nowrap table-hover"
            records={recordsData}
            columns={[
              { accessor: "productId.productName", title: "Product Name" },
              { accessor: "userName", title: " Name" },
              { accessor: "userEmail", title: "Email" },
              { accessor: "review",title: "Review" },
              {
                accessor: "rating",
                title: "Rate",
                titleClassName: "!text-center",
                render: ({ rating }) => (
                  <div className="flex items-center justify-center text-warning">
                    {Array.from(Array(Math.floor(rating)).keys()).map(i => {
                      return <IconStar key={i} className=" fill-warning" />;
                    })}
                  </div>
                )
              },
              
              {
                accessor: "isListed",
                title: "Status",
                render: ({ isListed,_id }) => (
                  <button onClick={()=>statusChange(_id,isListed)}
                    className={`badge badge-outline-${isListed === true ? 'success' : 'danger'}`}
                  >
                    {isListed === true ? 'Listed' : 'Not Listed'}
                  </button>
                )
              },
             
  
            ]}
            totalRecords={productReviews.length}
            recordsPerPage={pageSize}
            page={page}
            onPageChange={p => setPage(p)}
            recordsPerPageOptions={PAGE_SIZES}
            onRecordsPerPageChange={setPageSize}
            minHeight={200}
            paginationText={({ from, to, totalRecords }) =>
              `Showing  ${from} to ${to} of ${totalRecords} entries`
            }
          />
          
        </div>
    
  
    </div>
  </div>
  )
}

export default ProductReviews