import { useEffect, useState } from "react";
import { LuPencilLine } from "react-icons/lu";
import Searchsvg from "../../assets/material-symbols_search.svg";
import { PiNotePencilBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { format } from "date-fns";
import Loding from "../Loding/Loding";
import pencil from "../../assets/pencil.png";
import deleteIcon from "../../assets/deleteIcon.png";
import arrow_forward_ios from "../../assets/arrow_forward_ios.png"
import "../Home.css";
import { Link } from "react-router-dom";

const Table = () => {
  const [valueinput, setvalueinput] = useState("");
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const deletedAt = async (id) => {
    await axios.delete(
      `https://prodictivity-management-tool2.vercel.app/api/customers/delete/${id}`
    );
    fetchData(); // Refresh data after deletion
  };

  const fetchData = async () => {
    const res = await axios.get(
      `https://prodictivity-management-tool2.vercel.app/api/customers/fetch-all`
    );
    setdata(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Data Time
  const DateupdatedAt = (DateupdatedAt) => {
    const formattedDate = format(new Date(DateupdatedAt), "dd MMM | hh:mm a");
    return formattedDate;
  };

  // // Pagination Logic
  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const currentRecords = data
  //   .filter(({ name }) => name.toLowerCase().includes(valueinput.toLowerCase()))
  //   .slice(indexOfFirstRecord, indexOfLastRecord);
  // const totalPages = Math.ceil(
  //   data.filter(({ name }) =>
  //     name.toLowerCase().includes(valueinput.toLowerCase())
  //   ).length / recordsPerPage
  // );

  // const nextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  return (
    <div className="arrowss" >
      {data.length === 0 ? (
        <Loding />
      ) : (
        <div style={{gap:'10px'}} className="Tab3 p-4 overflow-x-auto flex flex-col gap-9 bg-custom-bg h-screen;
 ">
  {/* bg: #F7F3E8 */}
  <div style={{gap:'20px', paddingLeft:'0px'}} className="p-4 overflow-x-auto flex flex-col gap-9 bg-custom-bg;
 ">
  <h1 className="font-bold flex items-center gap-1" style={{fontFamily: 'Poppins', fontSize:'24px', fontWeight:'500'
}}>
            Home<IoIosArrowForward style={{color:'#1C1B1F'}}/><span style={{fontFamily: 'Poppins', fontWeight:'400', fontSize:'24px'
}} className="font-medium">Direct Visitors</span>
          </h1>

          <div className="flex flex-row items-center justify-start" >
            <div className="flex justify-start items-center w-[50%] lg:block relative lg:w-[36rem] rounded-full  mr-96 ">
              <input
                className="w-full py-2 px-12 rounded-full "
                style={{ border: "1px solid #3D2314",boxShadow:' 0px 0px 4px 0px #00000040'
                }}
                type="text"
                value={valueinput}
                onChange={(e) => setvalueinput(e.target.value)}
                placeholder="Search"
              />
              <img
              style={{top:'0.6rem'}}
                src={Searchsvg}
                alt="Search"
                className="absolute  left-4"
              />
            </div>
          </div>
    </div>
        <div className="outer-wrapper">
          <div className="table-wrapper">
          <table className="min-w-full bg-white" style={{boxShadow:' 0px 0px 4px 0px #00000040'}}  >
            <thead >
              <tr className="text-[9px] lg:text-[15px] text-left  bg-[#E8E8E8]" >
                <th style={{
                  fontFamily: 'Manrope',
                  fontSize: '12px',
                  fontWeight:'500',
                  lineHeight: '16.39px',
                  textAlign: 'left',
                  paddingLeft:'7px',
                  width:'115px',
                  padding:'5px',
                 
                  
                }}>Date</th>
                <th className="text-center" style={{
                  fontFamily: 'Manrope',
                  fontSize: '12px',
                  fontWeight:'500',
                  lineHeight: '16.39px',
                 textAlign: 'center',
                 padding:'5px'

                  
                  
                }}>Response Time</th>
                <th className="border-b text-center" style={{
                  fontFamily: 'Manrope',
                  fontSize: '12px',
                  fontWeight:'500',
                  lineHeight: '16.39px',
                 textAlign: 'center',
                 padding:'5px'
                  
                  
                }}>Meeting Duration</th>
                <th className="border-b text-center"style={{
                  fontFamily: 'Manrope',
                  fontSize: '12px',
                  fontWeight:'500',
                  lineHeight: '16.39px',
                 textAlign: 'center',
                  
                  
                }}>Customer Name</th>
                <th className="border-b text-center"style={{
                  fontFamily: 'Manrope',
                  fontSize: '12px',
                  fontWeight:'500',
                  lineHeight: '16.39px',
                 textAlign: 'center',
                 padding:'5px'

                  
                  
                }}>Customer ID</th>
                <th className="border-b"style={{
                  fontFamily: 'Manrope',
                  fontSize: '12px',
                  fontWeight:'500',
                  lineHeight: '16.39px',
                 textAlign: 'center',
                 padding:'5px'

                  
                }}>Mobile No</th>
                <th className="border-b text-center"style={{
                  fontFamily: 'Manrope',
                  fontSize: '12px',
                  fontWeight:'500',
                  lineHeight: '16.39px',
                  textAlign: 'center',
                  padding:'5px'

                  
                  
                }}>Email ID</th>
                <th className="border-b"style={{
                  fontFamily: 'Manrope',
                  fontSize: '12px',
                  fontWeight:'500',
                  lineHeight: '16.39px',
                 textAlign: 'center',
                 padding:'5px'

                  
                  
                }}>Project</th>
                <th className="border-b text-center"style={{
                  fontFamily: 'Manrope',
                  fontSize: '12px',
                  fontWeight:'500',
                  lineHeight: '16.39px',
                 textAlign: 'center',
                 width:'100px',
                 padding:'5px'

                  
                  
                }}>Attendant</th>
                <th className="border-b"style={{
                  fontFamily: 'Manrope',
                  fontSize: '12px',
                  fontWeight:'500',
                  lineHeight: '16.39px',
                 textAlign: 'left',
                 padding:'5px'
                
                  
                  
                }}>Actions</th>
                {/* <th className="py-2 px-2 lg:px-6 border-b"> </th> */}
              </tr>
            </thead>
           
            <tbody>
              {data.map((visitor, index) => (
                <tr style={{paddingLeft:'5px'}}  className="py-1 border-b text-[9px] lg:text-[14px]" key={index}>
                  <td style={{paddingLeft:'5px'}}>
                    {DateupdatedAt(visitor.updatedAt)}
                  </td>
                  <td className="py-1 border-b text-center">
                    {/* {visitor.customerId} */}
                    00:00
                  </td>
                  <td className="py-1 border-b text-center">00:00 
                    {/* {visitor.name}   */}
                    
                     </td>
                  <td className="py-1 border-b text-center">
                  {visitor.name}
                    
                  </td>
                  <td className="py-1 border-b text-center">
                    <Link  style={{
                    fontFamily: 'Manrope',
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '19.12px',
                    textAlign: 'left',
                    color: '#000AFF',
                    textDecoration:'underline'

                    
                  }} >
                    {visitor.customerId}

                    </Link>
                  
                  </td>
                  <td className="py-1 border-b text-center">
                  {visitor.mobile}
                    
                  </td>
                  <td className="py-1 border-b text-center">{visitor.email}</td>
                  <td className="py-1 border-b text-center">{visitor.projectName}</td>

                  <td className="py-1 border-b text-center text-center">{visitor.attendantName}</td>
                  
                  <td className="py-1 border-b flex gap-2">
                    {/* <img
                      src={pencil}
                      alt="Edit"
                      className="cursor-pointer"
                      
                    /> */}

<PiNotePencilBold onClick={() => handleEdit(visitor._id)} style={{cursor:'pointer', fontSize:'18px',color:'#632E04' }}/>
                    <br/>
                    {/* <img
                      src={deleteIcon}
                      alt="Delete"
                      className="cursor-pointer"
                     
                    /> */}

<RiDeleteBin6Line  onClick={() => deletedAt(visitor._id)} style={{cursor:'pointer', fontSize:'18px', color:'#930000'}}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
                {/* <div className="flex justify-end items-center  gap-4">
                  <span>
                   Page {currentPage}-{totalPages} of {totalPages}
                  </span> */}
            <div>
              {/* <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="py-2 px-4 text-[#632E04] rounded">
                &lt;
              </button> */}
              {/* <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="py-2 px-4 text-[#632E04] rounded">
                &gt;
              </button> */}
            </div>
          </div>
        // </div>
      )}
    </div>
  );
};

export default Table;





























