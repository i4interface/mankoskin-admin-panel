import { DataTable } from "mantine-datatable"
import { useEffect, useState } from "react"
import sortBy from "lodash/sortBy"
import ReactApexChart from "react-apexcharts"
import { useDispatch } from "react-redux"
import { setPageTitle } from "../../../store/themeConfigSlice"
import IconBell from "../../../components/Icon/IconBell"
import IconStar from "../../../components/Icon/IconStar"
function ProductReviews() {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setPageTitle("Advanced Table"))
    })
  
    const rowData = [
      {
        id: 1,
        firstName: "Caroline",
        lastName: "Jensen",
        email: "carolinejensen@zidant.com",
        dob: "2004-05-28",
        address: {
          street: "529 Scholes Street",
          city: "Temperanceville",
          zipcode: 5235,
          geo: {
            lat: 23.806115,
            lng: 164.677197
          }
        },
        phone: "+1 (821) 447-3782",
        isActive: true,
        age: 39,
        company: "POLARAX"
      },
      {
        id: 2,
        firstName: "Celeste",
        lastName: "Grant",
        email: "celestegrant@polarax.com",
        dob: "1989-11-19",
        address: {
          street: "639 Kimball Street",
          city: "Bascom",
          zipcode: 8907,
          geo: {
            lat: 65.954483,
            lng: 98.906478
          }
        },
        phone: "+1 (838) 515-3408",
        isActive: false,
        age: 32,
        company: "MANGLO"
      },
      {
        id: 3,
        firstName: "Tillman",
        lastName: "Forbes",
        email: "tillmanforbes@manglo.com",
        dob: "2016-09-05",
        address: {
          street: "240 Vandalia Avenue",
          city: "Thynedale",
          zipcode: 8994,
          geo: {
            lat: -34.949388,
            lng: -82.958111
          }
        },
        phone: "+1 (969) 496-2892",
        isActive: false,
        age: 26,
        company: "APPLIDECK"
      },
      {
        id: 4,
        firstName: "Daisy",
        lastName: "Whitley",
        email: "daisywhitley@applideck.com",
        dob: "1987-03-23",
        address: {
          street: "350 Pleasant Place",
          city: "Idledale",
          zipcode: 9369,
          geo: {
            lat: -54.458809,
            lng: -127.476556
          }
        },
        phone: "+1 (861) 564-2877",
        isActive: true,
        age: 21,
        company: "VOLAX"
      },
      {
        id: 5,
        firstName: "Weber",
        lastName: "Bowman",
        email: "weberbowman@volax.com",
        dob: "1983-02-24",
        address: {
          street: "154 Conway Street",
          city: "Broadlands",
          zipcode: 8131,
          geo: {
            lat: 54.501351,
            lng: -167.47138
          }
        },
        phone: "+1 (962) 466-3483",
        isActive: false,
        age: 26,
        company: "ORBAXTER"
      },
    
    ]
  
  
    const [page, setPage] = useState(1)
    const PAGE_SIZES = [10, 20, 30, 50, 100]
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0])
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, "id"))
    const [recordsData, setRecordsData] = useState(initialRecords)
  
    const [sortStatus, setSortStatus] = useState({
      columnAccessor: "id",
      direction: "asc"
    })
  
    useEffect(() => {
      setPage(1)
    }, [pageSize])
  
    useEffect(() => {
      const from = (page - 1) * pageSize
      const to = from + pageSize
      setRecordsData([...initialRecords.slice(from, to)])
    }, [page, pageSize, initialRecords])
  
    useEffect(() => {
      const data = sortBy(initialRecords, sortStatus.columnAccessor)
      setInitialRecords(sortStatus.direction === "desc" ? data.reverse() : data)
      setPage(1)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus])
  
    const randomColor = () => {
      const color = [
        "#4361ee",
        "#805dca",
        "#00ab55",
        "#e7515a",
        "#e2a03f",
        "#2196f3"
      ]
      const random = Math.floor(Math.random() * color.length)
      return color[random]
    }
  
    const randomStatusColor = () => {
      const color = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info"
      ]
      const random = Math.floor(Math.random() * color.length)
      return color[random]
    }
  
    const randomStatus = () => {
      const status = [
        "PAID",
        "APPROVED",
        "FAILED",
        "CANCEL",
        "SUCCESS",
        "PENDING",
        "COMPLETE"
      ]
      const random = Math.floor(Math.random() * status.length)
      return status[random]
    }
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  

  

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
            {
              accessor: "id",
              title: "ID",
              sortable: true,
              render: ({ id }) => <strong className="text-info">#{id}</strong>
            },
            {
              accessor: "firstName",
              title: "User",
              sortable: true,
              render: ({ firstName, lastName }) => (
                <div className="flex items-center gap-2">
                  <div className="font-semibold">
                    {firstName + " " + lastName}
                  </div>
                </div>
              )
            },
            {
              accessor: "email",
              title: "Email",
              sortable: true,
              render: ({ email }) => (
                <a
                  href={`mailto:${email}`}
                  className="text-primary hover:underline"
                >
                  {email}
                </a>
              )
            },
        
            { accessor: "phone", title: "Review", sortable: true },
            {
              accessor: "rating",
              title: "Rate",
              titleClassName: "!text-center",
              render: ({ id }) => (
                <div className="flex items-center justify-center text-warning">
                  {Array.from(Array(getRandomNumber(1, 5)).keys()).map(i => {
                    return <IconStar key={i + id} className=" fill-warning" />
                  })}
                </div>
              )
            },
            {
              accessor: "status",
              title: "Status",
              render: () => (
                <span
                  className={`badge badge-outline-${randomStatusColor()} `}
                >
                  {randomStatus()}
                </span>
              )
            }
          ]}
          totalRecords={initialRecords.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={p => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
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