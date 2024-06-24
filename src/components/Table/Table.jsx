

const Table = () => {
  const visitors = Array(10).fill({
    date: "26 Jun | 05:33 PM",
    customerId: "ROFC001",
    fullName: "Sameer Kashyap",
    email: "SameerK123@gmail.com",
    mobile: "+91 9254962485",
    project: "Project A",
    team: "Team A",
    attendant: "Somesh Reddy",
  });

  return (
    <div className="p-4 overflow-x-auto">

   
        <h1 className="font-bold mb-10">Home <span className="font-medium">Direct Visitors</span></h1>
    

      <div className="flex items-center justify-center ">
        <input className=" mb-16 w-[60%] py-2 rounded-full px-10 outline-none border-2 border-gray-600 " type="text" name="" id="" placeholder="Search" />
      </div>



      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-[15px] text-left">
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">CustomerID</th>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Email ID</th>
            <th className="py-2 px-4 border-b">Mobile No</th>
            <th className="py-2 px-4 border-b">Project</th>
            <th className="py-2 px-4 border-b">Team</th>
            <th className="py-2 px-4 border-b">Attendant</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor, index) => (
            <tr className="text-[14px]" key={index}>
              <td className="py-2 px-4 border-b">{visitor.date}</td>
              <td className="py-2 px-4 border-b">{visitor.customerId}</td>
              <td className="py-2 px-4 border-b">{visitor.fullName}</td>
              <td className="py-2 px-4 border-b">{visitor.email}</td>
              <td className="py-2 px-4 border-b">{visitor.mobile}</td>
              <td className="py-2 px-4 border-b">{visitor.project}</td>
              <td className="py-2 px-4 border-b">{visitor.team}</td>
              <td className="py-2 px-4 border-b">{visitor.attendant}</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-600 mr-2">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
