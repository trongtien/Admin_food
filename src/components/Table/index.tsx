import React from 'react';
import { ITableBaseProps } from './type';
import TableHeaderBase from './Header';


const TableBase: React.FC<ITableBaseProps> = (props) => {
  const { columns = [], rows = [], checkboxSelection = false } = props;


  return (
    <table className="w-full border-b border-gray-200">
      <TableHeaderBase data={columns} checkboxSelection={checkboxSelection} />
    
      <tbody>
        {
          rows.length ? rows?.map((item, idx) => {
            return (
              <tr
                className="hover:bg-gray-100 transition-colors group"
                key={idx}
              >
                {
                  Object.keys(item).map((keyItem) => {
                    return <td className="gap-x-4 items-center py-4 pl-10" id={keyItem}>{item[keyItem]}</td>
                  })
                }
              </tr>
            )
          }) : null
        }
      </tbody>
    </table>
  )
}

export default React.memo(TableBase);