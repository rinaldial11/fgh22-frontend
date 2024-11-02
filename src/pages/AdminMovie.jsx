import React from "react";
import NavBar from "../components/NavBar";
import { CiCalendar } from "react-icons/ci";
import AnchorMain from "../components/AnchorMain";
import Spiderman from "../assets/images/Spiderman.png";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import Blackwidow from "../assets/images/Black-Widow.png";

function AdminMovie() {
  return (
    <>
      <NavBar isLog={true} isAdmin={true} page="add-movie" />
      <main className="px-28 pt-16 h-screen pb-32 text-base bg-abumuda gap-12 text-maintext">
        <div className="bg-white py-10 w-full rounded-2xl flex flex-col gap-10">
          <div className="flex justify-between items-center pl-14 pr-9">
            <div className="text-2xl font-bold">List Movie</div>
            <div className="flex gap-4">
              <div className="relative w-72 h-14">
                <CiCalendar className="absolute top-1/3 left-6" />
                <select
                  className="w-full h-full bg-maintix px-16 rounded-lg"
                  name="date"
                  id="date"
                >
                  <option disabled selected value="30/10/24">
                    Choose date
                  </option>
                  <option value="30/10/24">30/10/24</option>
                  <option value="01/11/24">01/11/24</option>
                  <option value="02/11/24">02/11/24</option>
                  <option value="03/11/24">03/11/24</option>
                  <option value="04/11/24">04/11/24</option>
                </select>
              </div>
              <div className="w-36">
                <AnchorMain content="Add Movies" page="/admin-add-movies" />
              </div>
            </div>
          </div>
          <table className="w-full text-center">
            <thead className="h-14">
              <tr className="text-xs font-bold">
                <th>No</th>
                <th>Thumbnail</th>
                <th>Movie Name</th>
                <th>Category</th>
                <th>Released Date</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-sm h-14">
              <tr className="border-t border-maintix">
                <td>1</td>
                <td className="flex justify-center pt-2">
                  <div className="w-9 h-9 overflow-hidden rounded-lg">
                    <img src={Spiderman} alt="Spiderman" />
                  </div>
                </td>
                <td className="text-blue">
                  <Link to="">Spiderman HomeComing</Link>
                </td>
                <td>Action, Adventure</td>
                <td>07/05/2023</td>
                <td>2 Hours 15 Minute</td>
                <td className="text-white flex gap-3 justify-center">
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-blue">
                    <IoMdEye />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-secondtix">
                    <BiSolidPencil />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-red">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr className="border-t border-maintix">
                <td>2</td>
                <td className="flex justify-center pt-2">
                  <div className="w-9 h-9 overflow-hidden rounded-lg">
                    <img src={Blackwidow} alt="Black Widow" />
                  </div>
                </td>
                <td className="text-blue">
                  <Link to="">Black Widow</Link>
                </td>
                <td>Sci-fi, Adventure</td>
                <td>10/06/2023</td>
                <td>2 Hours 15 Minute</td>
                <td className="text-white flex gap-3 justify-center">
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-blue">
                    <IoMdEye />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-secondtix">
                    <BiSolidPencil />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-red">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr className="border-t border-maintix">
                <td>3</td>
                <td className="flex justify-center pt-2">
                  <div className="w-9 h-9 overflow-hidden rounded-lg">
                    <img src={Spiderman} alt="Spiderman" />
                  </div>
                </td>
                <td className="text-blue">
                  <Link to="">Spiderman HomeComing</Link>
                </td>
                <td>Action, Adventure</td>
                <td>07/05/2023</td>
                <td>2 Hours 15 Minute</td>
                <td className="text-white flex gap-3 justify-center">
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-blue">
                    <IoMdEye />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-secondtix">
                    <BiSolidPencil />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-red">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr className="border-t border-maintix">
                <td>4</td>
                <td className="flex justify-center pt-2">
                  <div className="w-9 h-9 overflow-hidden rounded-lg">
                    <img src={Blackwidow} alt="Black Widow" />
                  </div>
                </td>
                <td className="text-blue">
                  <Link to="">Black Widow</Link>
                </td>
                <td>Sci-fi, Adventure</td>
                <td>10/06/2023</td>
                <td>2 Hours 15 Minute</td>
                <td className="text-white flex gap-3 justify-center">
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-blue">
                    <IoMdEye />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-secondtix">
                    <BiSolidPencil />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-red">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr className="border-t border-maintix">
                <td>5</td>
                <td className="flex justify-center pt-2">
                  <div className="w-9 h-9 overflow-hidden rounded-lg">
                    <img src={Spiderman} alt="Spiderman" />
                  </div>
                </td>
                <td className="text-blue">
                  <Link to="">Spiderman HomeComing</Link>
                </td>
                <td>Action, Adventure</td>
                <td>07/05/2023</td>
                <td>2 Hours 15 Minute</td>
                <td className="text-white flex gap-3 justify-center">
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-blue">
                    <IoMdEye />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-secondtix">
                    <BiSolidPencil />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-red">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr className="border-t border-maintix">
                <td>6</td>
                <td className="flex justify-center pt-2">
                  <div className="w-9 h-9 overflow-hidden rounded-lg">
                    <img src={Blackwidow} alt="Black Widow" />
                  </div>
                </td>
                <td className="text-blue">
                  <Link to="">Black Widow</Link>
                </td>
                <td>Sci-fi, Adventure</td>
                <td>10/06/2023</td>
                <td>2 Hours 15 Minute</td>
                <td className="text-white flex gap-3 justify-center">
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-blue">
                    <IoMdEye />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-secondtix">
                    <BiSolidPencil />
                  </button>
                  <button className="flex justify-center items-center w-8 h-8 rounded-lg bg-red">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-2 justify-center w-full">
            <button className="w-10 h-10 border-[0.5px] border-maintix rounded-lg  hover:bg-secondtix hover:text-maintix">
              1
            </button>
            <button className="w-10 h-10 border-[0.5px] border-maintix rounded-lg  hover:bg-secondtix hover:text-maintix">
              2
            </button>
            <button className="w-10 h-10 border-[0.5px] border-maintix rounded-lg  hover:bg-secondtix hover:text-maintix">
              3
            </button>
            <button className="w-10 h-10 border-[0.5px] border-maintix rounded-lg  hover:bg-secondtix hover:text-maintix">
              4
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminMovie;
