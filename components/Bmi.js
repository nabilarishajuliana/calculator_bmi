import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableResult from "./Table";
import { BiPlusMedical } from "react-icons/bi";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import * as XLSX from "xlsx";

function Bmi() {
  const [nama, setNama] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("Masukkan berat dan tinggi kamu!");
  const [result, setResult] = useState([]);

  useEffect(() => {
    // Save the BMI results to local storage
    localStorage.setItem("bmiResults", JSON.stringify(result));
    console.log("New data added to result:", result[result.length - 1]);
  }, [result]);

  useEffect(() => {
    // Load the BMI results from local storage on component mount
    const storedResults = localStorage.getItem("bmiResults");
    if (storedResults) {
      setResult(JSON.parse(storedResults));
    }
  }, []);

  const calBmi = (event) => {
  event.preventDefault();

  if (
    weight === 0 ||
    height === 0 ||
    weight === "" ||
    height === "" ||
    nama === ""
  ) {
    toast.info("Data wajib di isi", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (isNaN(weight) === true || isNaN(height) === true) {
    /* It checks if the value of `weight` or `height` is not a number. */
    toast.warn("Hanya menerima angka!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    let tinggi = height * height;
    let bmi = weight / tinggi;
    let kat = "";
    setBmi(bmi.toFixed(1));

    if (bmi < 18.5) {
      kat = "berat badan kamu kurang";
      setMsg(kat);
    } else if (bmi >= 18.5 && bmi < 24.9) {
      kat = "berat badan kamu normal";
      setMsg(kat);
    } else {
      kat = "berat badan kamu lebih";
      setMsg(kat);
    }

    const newData = {
      nama: nama,
      weight: weight,
      height: height,
      bmi: bmi,
      msg: kat,
    };

    setResult((prevResult) => {
      const updatedResult = [...prevResult, newData];
      localStorage.setItem("bmiResults", JSON.stringify(updatedResult));
      return updatedResult;
    });
  }
};


  const exportToExcel = () => {
    const data = [
      ["Nama", "Berat Badan (Kg)", "Tinggi Badan (m)", "BMI", "Kategori"],
      ...result.map((item) => [
        item.nama,
        item.weight,
        item.height,
        item.bmi,
        item.msg,
      ]),
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "BMI_Input.xlsx", { bookType: "xlsx" });
  };

  let srcImage;

  let resetData = () => {
    setNama("");
    setHeight("");
    setWeight("");
    setBmi("");
    setMsg("Masukkan berat dan tinggi kamu!");
    srcImage = "";
  };

  if (bmi < 1) {
    srcImage = null;
  } else {
    if (bmi < 18.5) {
      srcImage = "../Assets/underweight.png";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      srcImage = "../Assets/healthy.png";
    } else {
      srcImage = "../Assets/overweight.png";
    }
  }

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-orange-500">
                <BiPlusMedical />
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Yuk <span className="text-orange-500">Hitung</span>, berat
                badanmu sudah ideal apa belum
              </h2>
            </div>

            <div className="title"></div>
            <form onSubmit={calBmi}>
              <div>
                <input
                  className="bg-slate-300 text-center text-base w-full my-1 py-2 px-1 outline-none border rounded-md"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukkan Nama"
                />
              </div>
              <div>
                <input
                  className="bg-slate-300 text-center text-base w-full my-1 py-2 px-1 outline-none border rounded-md"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Masukkan Berat Badan (Kg)"
                />
              </div>
              <div>
                <input
                  className="bg-slate-300 text-center text-base w-full my-1 py-2 px-1 outline-none border rounded-md"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Masukkan Tinggi Badan (m)"
                />
              </div>
              <button className="btn w-full py-2 my-2 cursor-pointer rounded-md bg-orange-400 text-white">
                Submit
              </button>
              <button
                className="btn w-full py-2 my-2 cursor-pointer rounded-md bg-orange-600 text-white"
                onClick={() => resetData()}
              >
                Reset
              </button>
              <ReactHTMLTableToExcel
                id="exportButton"
                className="btn w-full py-2 my-2 cursor-pointer rounded-md bg-orange-400 text-white"
                table="bmiTable"
                filename="BMI_Results"
                sheet="Sheet"
                buttonText="Export to Excel"
                onClick={exportToExcel}
              />
            </form>
            <div className="text-black  text-lg mt-3">
              <h1 className="text-2xl my-2 font-bold">Cek Hasilnya </h1>
              <h3>BMI kamu: {bmi}</h3>
              <p>{msg}</p>
              <div className="flex justify-center">
                <img src={srcImage} alt="" />
              </div>
            </div>

            <table id="bmiTable" className="hidden">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>BMI</th>
                  <th>Kategori</th>
                </tr>
              </thead>
              <tbody>
                {result.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nama}</td>
                    <td>{item.weight}</td>
                    <td>{item.height}</td>
                    <td>{item.bmi}</td>
                    <td>{item.msg}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <TableResult data={result} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bmi;
