import * as React from "react";

const TableResult = ({data}) => {

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Nama</th>
                            <th className="py-3 px-6">Berat Badan</th>
                            <th className="py-3 px-6">Tinggi Badan</th>
                            <th className="py-3 px-6">BMI</th>
                            <th className="py-3 px-6">Hasil BMI</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        { data &&
                            data.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.nama}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.weight}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.height}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.bmi}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.msg}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableResult;