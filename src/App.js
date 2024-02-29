import React, { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    return () =>
      axios.get("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json")
        .then((res) => {
          console.log(res.data.appointments);
          setData(res.data.appointments);
        })
  }, [])

  const handleDeleteAppointment = (index) => {
    setData((prevAppointments) =>
      prevAppointments.filter((_, i) => i !== index)
    );
  };
  return (
    <div>
      <div className="container mx-auto p-10 shadow-lg rounded-3xl border-solid border-2 ">
      <div className="">
        <h4 className="text-2xl font-bold text-slate-500">
          Today's Appointment List
        </h4>
      </div>
        <div className="overflow-x-auto mt-7">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-6 text-left text-base font-medium text-gray-500 tracking-wider">PATIENTS</th>
                <th scope="col" className="px-6 py-6 text-left text-base font-medium text-gray-500 tracking-wider">DATE</th>
                <th scope="col" className="px-6 py-6 text-left text-base font-medium text-gray-500 tracking-wider">TIME</th>
                <th scope="col" className="px-6 py-6 text-left text-base font-medium text-gray-500 tracking-wider">DOCTOR</th>
                <th scope="col" className="px-6 py-6 text-left text-base font-medium text-gray-500 tracking-wider">INJURY</th>
                <th scope="col" className="px-6 py-6 text-left text-base font-medium text-gray-500 tracking-wider">ACTION</th>
              </tr>
            </thead>
            {data && (
              <tbody className="divide-y divide-gray-200">
                {data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            {item.patient_name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-base font-medium text-gray-900">
                              {item.patient_name}
                            </div>
                            <div className="text-sm text-gray-500">
                              +{item.mobile_number}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="gray"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                              />
                            </svg>
                          </div>
                          <div className="text-base text-gray-900">
                          {item.appointment_date}
                          </div>
                        </div>
                        </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <div>
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="gray"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                          </div>
                          <div className="text-base text-gray-900">
                          {item.appointment_time}
                          </div>
                        </div></td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <div>
                          <svg
                          className="fill-green-500 "
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill=""
                            d="M16.23 18L12 15.45L7.77 18l1.12-4.81l-3.73-3.23l4.92-.42L12 5l1.92 4.53l4.92.42l-3.73 3.23zM12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                          />
                        </svg>
                          </div>
                          <div className="text-base text-gray-900">
                          {item.doctor}
                          </div>
                        </div></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="text-base text-gray-900  ">
                      <button className="p-2 rounded-lg bg-slate-300">
                        {item.injury}
                      </button>
                    </div>
                  </td>
                      <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => handleDeleteAppointment(index)}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                        />
                      </svg>
                    </div></td>
                    </tr>
                  )
                })}

              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;