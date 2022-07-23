import { IColumnItem } from "./type"
import React from 'react'

const TableHeaderBase = (props: {data: IColumnItem[], checkboxSelection: boolean}): JSX.Element => {

    const { checkboxSelection, data } = props

    const CheckedItem = () => {
        return (
            <td className="pl-10">
                <div className="flex items-center gap-x-4">
                    <input
                        type="checkbox"
                        className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                    />
                </div>
            </td>
        )
    }


    const Item = () => {
        return (
            <>
                {
                   data?.length ? data?.map( item => {
                        return <th 
                                className="py-4 px-4 text-center" 
                                key={item.field} 
                                id={item.field}
                            >
                                {item.name}
                            </th>
                   }) : null
                }
            </>
        )
    }

    return (
        <thead>
            <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                {
                    checkboxSelection ?  <CheckedItem /> : null
                }
                
                <Item />
            </tr>
        </thead>
    )
}

export default React.memo(TableHeaderBase) 