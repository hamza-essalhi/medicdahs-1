import React, { useMemo, useState, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import { FaTrash, FaPen, FaPlus } from 'react-icons/fa';
import { PiCaretCircleDoubleLeftFill, PiCaretCircleDoubleRightFill } from 'react-icons/pi';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import NotFoundUserPage from '../Routes/NotFoundUserPage';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Table = ({ title, data, setShowBackDRropAlertMessage, setValueOfBackdrop,counterName,url,addUrl }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const navigate=useNavigate()
    const columns = useMemo(() => {
        if (data.length === 0) {
            return [];
        }

        const actionColumn = {
            Header: 'Action',
            accessor: 'i', // Assuming 'id' is a unique identifier for each row
            Cell: ({ row }) => (
                <div className='flex items-center justify-center'>
                    <FaTrash
                        className='table-icon table-icon-delete mx-3'
                        onClick={() => handellDelete(row.original)}
                    />
                    <FaPen className='table-icon table-icon-edite mx-3' onClick={() => handellView(row.original)} />
                </div>
            ),
        };

        return [...Object.keys(data[0]).map((key) => ({ Header: key, accessor: key })), actionColumn];
    }, [data]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data: searchTerm ? filteredData : data,
            initialState: { pageSize: 10 },
        },
        usePagination
    );

    const renderPageButtons = () => {
        const buttons = [];
        const visiblePages = 3; // Number of visible pages before the ellipsis

        for (let i = 0; i < pageCount; i++) {
            if (
                i < visiblePages ||
                i >= pageCount - visiblePages ||
                (i >= pageIndex - 1 && i <= pageIndex + 1)
            ) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => gotoPage(i)}
                        className={
                            pageIndex === i
                                ? 'active pagination-btn max-sm:text-exsm max-sm:h-5 max-sm:w-5 w-8 h-8'
                                : 'pagination-btn max-sm:h-5 max-sm:w-5 w-8 h-8'
                        }
                        disabled={pageIndex === i}
                    >
                        {i + 1}
                    </button>
                );
            } else if (buttons[buttons.length - 1] !== '...') {
                buttons.push('...');
            }
        }

        return buttons;
    };

    const handellDelete = (rowData) => {
        setShowBackDRropAlertMessage(true);
        const valuesArray = Object.values(rowData);
        setValueOfBackdrop(valuesArray[0]);
    };
    const handellView = (row) => {
        const link = url+row.id
        navigate(link)
    };

    useEffect(() => {
        // Update filtered data when the search term changes
        const filtered = data.filter(
            (row) =>
                Object.values(row).some(
                    (value) => String(value).toLowerCase().includes(searchTerm.toLowerCase())
                )
        );
        setFilteredData(filtered);
    }, [data, searchTerm]);
    return (
        <div className="flex flex-row table-continer backdrop-blur-sm p-4 mt-20 mx-2 ">
            
                <div className='main-row flex flex-col w-full flex-nowrap overflow-hidden '>
                    <div className='flex items-center justify-between gap-1 mx-3 p-2 my-2 max-sm:mx-0 max-sm:p-1 max-sm:flex-col'>
                        <h1 className='title-font text-2xl font-bold max-sm:text-sm'>{title}</h1>
                        <div className='max-sm:order-3 bg-white counter max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center my-2 '>
                            {filteredData.length > 1 ? <span className=' w-40% max-sm:text-exsm active-color'>{filteredData.length} {counterName}s Trouvés
                            </span> : <span className=' w-40% max-sm:text-exsm active-color'>{filteredData.length} {counterName} Trouvé
                            </span>}
                        </div>
                        <div className={`w-60% flex items-center gap-2 max-sm:w-full max-sm:my-2 max-sm:order-2`}>

                            <input
                                type="text"
                                placeholder={`Chercher...`}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className=' max-sm:text-exsm'
                            />
                            {
                                addUrl &&<motion.span 
                                transition={{ duration: 0.1 }}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 4px gray"
              }}
                                >
                                    <Link to={addUrl} className='active-color flex items-center gap-1'><FaPlus></FaPlus> Ajouter</Link>
                                </motion.span>
                            }
                        </div>
                    </div>
                    {filteredData.length > 0 ?<>
                    <div className="w-full overflow-x-auto sm:rounded-lg my-6 overflow-hidden">
                        <table {...getTableProps()} className="w-full relative text-sm text-left text-white overflow-hidden">
                            <thead className="text-xs text-black uppercase p-5">
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()} className='px-6 py-4 max-sm:text-exsm max-sm:px-2 max-sm:py-2'>
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {page.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()} className="text-black">
                                            {row.cells.map((cell) => (
                                                <td {...cell.getCellProps()} className='px-6 py-4 max-sm:text-exsm max-sm:px-2 max-sm:py-2'>
                                                    {cell.column.Header === 'Action' ? (
                                                        cell.render('Cell')
                                                    ) : (
                                                        cell.render('Cell')
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination my-2 flex items-center justify-center w-full max-sm:text-exsm">
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            <PiCaretCircleDoubleLeftFill className='pagination-btn-icon pagination-btn max-sm:h-5 max-sm:w-5 w-8 h-8' />
                        </button>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                            <IoIosArrowDropleftCircle className='pagination-btn-icon pagination-btn  max-sm:h-5 max-sm:w-5 w-8 h-8 ' />
                        </button>
                        {renderPageButtons()}
                        <button onClick={() => nextPage()} disabled={!canNextPage}>
                            <IoIosArrowDroprightCircle className='pagination-btn-icon pagination-btn max-sm:h-5 max-sm:w-5 w-8 h-8 ' />
                        </button>
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                            <PiCaretCircleDoubleRightFill className='pagination-btn-icon pagination-btn max-sm:w-5 max-sm:h-5 w-8 h-8 ' />
                        </button>
                    </div></>: <NotFoundUserPage message="Aucun Patient Trouvé" />}
                </div> 
            

        </div>
    );
}

export default Table;