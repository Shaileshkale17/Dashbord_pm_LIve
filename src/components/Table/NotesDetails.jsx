import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import  CiUser from "../../assets/ion_person-outline.png";
import  FaPhoneAlt  from "../../assets/call.png";
import CgMail from "../../assets/ic_outline-email.png";
import note from "../../assets/add_notes.png";
import Searchsvg from "../../assets/material-symbols_search.svg";

import '../Home.css';


const TabBar = ({ activeTab, setActiveTab }) => (
  <div className="flex mb-4 justify-center ">
    {['All', 'Available', 'In Meet'].map((tab) => (
      <button
        key={tab}
        style={{fontFamily:'Manrope', padding:'10px 10px', width:'121px'}}
        className={` px-4 py-2 ${activeTab === tab ? 'bg-[#3D2314] text-white rounded-[24px]' : 'bg-white text-[#3D2314] '}`}
        onClick={() => setActiveTab(tab)}>
        {tab}
      </button>
    ))}
  </div>
);


 function NotesDetails  ()  {
  const [activeTab, setActiveTab] = useState('All');
  

  

  return (
    <div className='p-4 pt-0'>
       <div
          style={{ gap: "20px", paddingTop: "30px",  fontFamily: 'Manrope'}}
          className="p-4 overflow-x-auto flex flex-col gap-9 bg-custom-bg;
        "
        >
          <h1
            className="font-bold flex items-center gap-1 font-[Manrope]"
            style={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Home
            <IoIosArrowForward style={{ color: "#1C1B1F" }} />
            <span
              style={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "24px",
              }}
              className="font-medium font-[Manrope]"
            >
              Notes
            </span>
          </h1>
        </div>
    <br />
    <div className="flex flex-row items-center justify-center">
              <div className="flex justify-start items-center w-[50%] lg:block relative lg:w-[36rem] rounded-full">
                <input
                  className="w-full py-2 px-12 rounded-full "
                  style={{
                    boxShadow: " 0px 0px 4px 0px #00000040",
                  }}
                  type="text"
                  value=""
                
                  placeholder="Search"
                />
                <img
                  style={{ top: "0.6rem" }}
                  src={Searchsvg}
                  alt="Search"
                  className="absolute left-4"
                />
              </div>
            </div>

            <br />
            <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <br />
<div className='Cards gap-8'>
            
<div className='flex flex-wrap gap-8 mb-[30px]'>
<div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px', fontFamily:'Manrope'}} className="font-[Manrope] w-[70px] h-[28px] bg-[#BAEFB1] text-[#1D750E] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>

    <div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px', fontFamily:'Manrope'}} className="font-[Manrope] w-[70px] h-[28px] bg-[#BAEFB1] text-[#1D750E] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>

    <div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-[#F4E8C8] text-[#AF8414] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center text-center">
          In Meet
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>

    <div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px'}} className="w-[70px] h-[28px] bg-[#F4E8C8] text-[#AF8414] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center text-center">
          In Meet
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>
</div>
<div className='flex flex-wrap gap-8 mb-[30px]'>
<div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px', fontFamily:'Manrope'}} className="font-[Manrope] w-[70px] h-[28px] bg-[#BAEFB1] text-[#1D750E] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>

    <div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px', fontFamily:'Manrope'}} className="font-[Manrope] w-[70px] h-[28px] bg-[#BAEFB1] text-[#1D750E] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>

    <div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px', fontFamily:'Manrope'}} className="font-[Manrope] w-[70px] h-[28px] bg-[#BAEFB1] text-[#1D750E] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>

    <div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px', fontFamily:'Manrope'}} className="font-[Manrope] w-[70px] h-[28px] bg-[#BAEFB1] text-[#1D750E] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>
</div>

<div className='flex flex-wrap gap-8 mb-[30px]'>
<div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px', fontFamily:'Manrope'}} className="font-[Manrope] w-[70px] h-[28px] bg-[#BAEFB1] text-[#1D750E] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>

    <div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px', fontFamily:'Manrope'}} className="font-[Manrope] w-[70px] h-[28px] bg-[#BAEFB1] text-[#1D750E] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>

    <div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px', fontFamily:'Manrope'}} className="font-[Manrope] w-[70px] h-[28px] bg-[#BAEFB1] text-[#1D750E] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>

    <div className=" bg-white rounded-[12px] p-[12px] max-w-xs w-[310px] h-[272px]" style={{
  boxShadow: '0px 0px 4px 0px #00000040'

}}>
      <div className="flex items-center mb-4 justify-between">
        <div className="">
        <img src={CiUser} className="w-[92px] h-[92px] text-[92px]" />
        </div>
        <div>
          <h2 style={{fontFamily: 'Manrope',
fontSize: '18px',
fontWeight: '700',
lineHeight: '24.59px',
paddingBottom:'10px'}} className=" text-center text-[#3D2314]">Sharukh</h2>
<div>
<div className='flex flex-wrap'>
            
            <img src={CgMail} className='text-[14px]'/>
           
          
          <p style={{fontFamily: 'Manrope',}} className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> sharukh@gmail.com</p>
         
          </div>
          <div className=' flex flex-wrap pt-[5px]'> 
           
            <img src={FaPhoneAlt} className='text-[24px]'/>

           
          <p className="text-[#3D2314] text-[14px] ml-3 font-[Manrope]"> 9012345678</p>
          
          </div>
</div>
        
        </div>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <div>
        <div className='flex flex-wrap justify-between' style={{alignContent:'center'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Attended</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">12</p>
        </div>
        <div className='flex flex-wrap justify-between ' style={{alignContent:'center', paddingTop:'5px'}}>
          <p className="text-sm text-gray-600 font-[Manrope]">Clients Converted</p>
          <p className="text-lg font-semibold ml-[7px] font-[Manrope]">04</p>
        </div>
        </div>
       
        <div style={{borderRadius:'8px', fontFamily:'Manrope'}} className="font-[Manrope] w-[70px] h-[28px] bg-[#BAEFB1] text-[#1D750E] text-[12px]  px-[10px] py-[6px] mt-[15px] item-center justify-center">
          Available
        </div>
      </div>
      <button className="font-[Manrope] w-full gap-2 text-[#3D2314] bg-white py-2 px-4 rounded-lg flex items-center justify-center" style={{border:'1px solid #3D2314'}}>
       
        <img src={note} className='text-[24px]'/>

        Add Note
      </button>
    </div>
</div>
</div>  
    </div>
  );
};

export default NotesDetails;