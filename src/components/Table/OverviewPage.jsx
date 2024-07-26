import React from 'react';

import iconone from '../../assets/mdi_leads-outline.png';
import icontwo from '../../assets/uil_calender.png'
import iconthree from '../../assets/material-symbols_lock-outline.png';
import Searchsvg from "../../assets/material-symbols_search.svg";

import material from '../../assets/material-symbols_meeting-room-outline.png'
import carbon from '../../assets/carbon_customer.png'
import alarm from '../../assets/material-symbols_alarm-outline.png'


const OverviewPage = () => {
  return (
    
    
  <div className=" p-8 font-sans ">
      
      <div className='flex flex-wrap gap-[50px]'>
        <div>
        <h4 className='text-[18px] font-[Manrope] font-bold'> Hi Arun, <br /><span className='text-[32px] font[Manrope] font-bold'>Welcome to ROF</span></h4>
        </div>

      
        
        <div className="flex justify-start items-center w-[50%] lg:block relative lg:w-[36rem] rounded-full">
          <input
            className="w-full py-2 px-12 rounded-full "
            style={{
              width:'619px',
height: '48px',
fontFamily:'Manrope',
padding: '12px 24px 12px 48px',
gap: '24px',
borderRadius: '27px',
opacity: '0px',

              boxShadow: " 0px 0px 4px 0px #00000040",
            }}
            type="text"
            value=""
            placeholder="Search"
          />
          <img
            style={{ top: "0.8rem" }}
            src={Searchsvg}
            alt="Search"
            className="absolute left-4"
          />
        </div>
        </div>

       

      <div className="grid grid-cols-3 gap-6 mt-6 w-[1300px] h-[409px]">
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 style={{
              fontFamily: 'Manrope',
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '24.59px',
              color:'black'
              
            }} className="text-lg font-semibold mb-4 font-[Manrope]">Your Performance at a Glance</h2>
            <div className="flex justify-between rounded-[12px]">


<div className='p-2 w-[241px] h-[140px] text-[18px] font-medium text-[#5C5C5C] shadow-lg rounded-xl flex flex-wrap gap-[90px]'>
  
  <div style={{
              fontFamily: 'Manrope',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '24.59px',
              color:'#5C5C5C'
              
            }}>Leads  <br />Generated <div>
    
    <img  className='mt-[20px] ' src={iconone} alt="" /></div>  </div>
<div className='text-[#3D2314] font-bold text-[34px] font-[Manrope]'>25</div>
</div>

<div  className=' p-2 w-[241px] h-[140px] text-[18px] font-medium text-[#5C5C5C] shadow-lg rounded-xl flex flex-wrap gap-[60px]'>
  
  <div  style={{
              fontFamily: 'Manrope',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '24.59px',
              color:'#5C5C5C'
              
            }}> Appointments <br />Booked 
  
 <div> <img className='mt-[20px]' src={icontwo} alt="" /> </div></div>

 <div className='text-[#3D2314] font-bold text-[34px] font-[Manrope]'>25</div>
 </div>

<div  className=' p-2 w-[241px] h-[140px] text-[18px] font-medium text-[#5C5C5C] shadow-lg rounded-xl flex flex-wrap gap-[70px]'>
  
  <div  style={{
              fontFamily: 'Manrope',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '24.59px',
              color:'#5C5C5C'
              
            }}> Deals Closed  
  
  <div> <img className='mt-[43px]' src={iconthree} alt="" /> </div> </div>

  <div className='text-[#3D2314] font-bold text-[34px] font-[Manrope] '>25</div>
  </div>

            
            </div>
          </div>

{/* 
          table code */}
          
          <div className="bg-white w-[739px] h-[213px] rounded-lg shadow"  style={{padding:'18px 24px', borderRadius:'12px'}}>
          <table className=" bg-white shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-gray"style={{fontSize:"12px",fontWeight:"400",color:"#4B4B4B",fontFamily:"Manrope",height:"36px"}}>
            <tr>
              <th className="py-2 px-4 text-left"style={{width:"161px"}}>Date</th>
              <th className="py-2 px-4 text-left"style={{width:"180px"}}>Name</th>             
              <th className="py-2 px-4 text-left"style={{width:"140px"}}>Project Name</th>
              <th className="py-2 px-4 text-left"style={{width:"89px"}}>Actions</th>
              <th className="py-2 px-4 text-center"style={{width:"121px"}}>Timer/Min</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
           
                     
            </tr>
            {/* Add more rows as needed */}
            <tr style={{border:'1px solid #C9C9C9'}}>
              <td className="py-2 px-2" style={{color:"#5C5C5C",fontSize:"18px"}}>26 June | 5:33 PM</td>
              <td className="py-2 px-2 flex justify-between items-center">
                <span className="py-1 px-2 rounded" style={{color:"#2B9F21",background:"#B4EBA0", fontSize:"8px",fontWeight:"600",width:"58px", height:"19px"}}>
                New Client
                </span> <span style={{color:"#5C5C5C",fontSize:"18px"}}>Kapil Verma</span>
              </td>
              
              <td style={{color:"#5C5C5C",fontSize:"18px",textAlign:'center'}}>Project Alayas</td>
             
             
              <td className="py-2 px-4 flex justify-around">
                <button className="text-green-500 mr-2">✓</button>
                <button className="text-red-500">✕</button>
              </td>
              <td style={{color:"#000000",fontSize:"18px",textAlign:"center",fontFamily:"Manrope",fontWeight:"600"}}>05 : 00</td>
            </tr>
            <tr  style={{border:'1px solid #C9C9C9'}}>
              <td className="py-2 px-2"style={{color:"#5C5C5C",fontSize:"18px"}}>26 June | 5:33 PM</td>
              <td className="py-2 px-2 flex justify-between items-center">
                <span className=" py-1 px-2 rounded text-center" style={{color:"#9E932A",background:"#EBEE5D", fontSize:"8px",fontWeight:"600",width:"58px", height:"19px"}}>
                Existing
                </span> <span style={{color:"#5C5C5C",fontSize:"18px"}}>Suraj Tiwari</span>
              </td>
              <td style={{color:"#5C5C5C",fontSize:"18px", textAlign:'center'}}>Project Alayas</td>
            
              
              <td className="py-2 px-4 flex justify-around">
                <button className="text-green-500 mr-2">✓</button>
                <button className="text-red-500">✕</button>
              </td>
              <td style={{color:"#000000",fontSize:"18px",textAlign:"center",fontFamily:"Manrope",fontWeight:"600"}}>05 : 00</td>
            </tr>
          </tbody>
        </table>
        </div>
          
          
        </div>
        
        <div className="space-y-6 "> 

{/* card1 */}

        <div className=" bg-white rounded-lg shadow-md p-4  w-[309px] h-[194px] ">
     
        <div className='flex flex-wrap '>
        <img src={material} alt="" />
        
        <div>
          <h2 style={{fontWeight:'500' }} className="text-[18px] font-[Manrope] text-[#5C5C5C] ml-[40px] mt-2 ">Meeting Notes</h2>
          </div>


          <h3 style={{fontWeight:'500'}} className='  text-[16px] font-[Manrope] text-[#383838] text-left mt-2'> 24 June | 12:50 pm</h3>
          <p4 style={{fontWeight:'500'}} className='text-[10px] font-[Manrope] text-[black] text-left'>Discussed property options in Lakeside neighborh..</p4>
          
          <h3 style={{fontWeight:'500'}} className='  text-[16px] font-[Manrope] text-[#383838] text-left mt-2'> 24 June | 04:50 pm</h3>
          <p4 style={{fontWeight:'500'}} className='text-[10px] font-[Manrope] text-[black] text-left'>Confirmation on available closing for shortli...</p4>
          
        </div>
      
     
     
    </div>
{/* 
card 2 */}

<div className=" bg-white rounded-lg shadow-md p-4  w-[309px] h-[194px] ">
     
     <div className='flex flex-wrap '>
        <div className='flex flex-wrap '>
        <img src={carbon} alt="" />
     
     <div>
       <h2 style={{fontWeight:'500' }} className="text-[18px] font-[Manrope] text-[#5C5C5C] ml-2 mt-2 ">Client Communication</h2>
       </div>
        </div>
     


       <h3 style={{fontWeight:'500'}} className='  text-[16px] font-[Manrope] text-[#383838] text-left mt-2'> 22 June | 05:50 pm</h3>
       <p4 style={{fontWeight:'500'}} className='text-[10px] font-[Manrope] text-[black] text-left'>Client expressed interest in a specific pr..</p4>
       
       <h3 style={{fontWeight:'500'}} className='  text-[16px] font-[Manrope] text-[#383838] text-left mt-2'> 22 June | 05:50 pm</h3>
       <p4 style={{fontWeight:'500'}} className='text-[10px] font-[Manrope] text-[black] text-left'>Client confirmed availability for next meeting...</p4>
       
     </div>
     </div>

{/* card3 */}
<div className=" bg-white rounded-lg shadow-md p-4  w-[309px] h-[194px] ">
     
     <div className='flex flex-wrap '>
     <img src={alarm} alt="" />
     
     <div>
       <h2 style={{fontWeight:'500' }} className="text-[18px] font-[Manrope] text-[#5C5C5C] ml-[40px] mt-2 ">Task Reminders</h2>
       </div>


       <h3 style={{fontWeight:'500'}} className='  text-[16px] font-[Manrope] text-[#383838] text-left mt-2'> 22 June | 05:50 pm</h3>
       <p4 style={{fontWeight:'500'}} className='text-[10px] font-[Manrope] text-[black] text-left'>Schedule follow-up meeting with John Smith(due July..</p4>
       
       <h3 style={{fontWeight:'500'}} className='  text-[16px] font-[Manrope] text-[#383838] text-left mt-2'> 22 June | 05:50 pm</h3>
       <p4 style={{fontWeight:'500'}} className='text-[10px] font-[Manrope] text-[black] text-left'>end John Smith a comparative analysis of shortlisted pr...</p4>
       
     </div>
     </div>







        </div>
      </div>
    </div>
  );
};

export default OverviewPage;