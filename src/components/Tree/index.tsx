import React from 'react';
import { ITreeProps } from './type';

const Tree: React.FC<ITreeProps> = (props) => {

  const { data, onChangeLink } = props;

  const onHandleChangeLink = (val: string) => {
    onChangeLink && onChangeLink(val)
  }

  return (
    <ul className="flex flex-col gap-y-6 pt-20">
      {data.map((item) => {
        return (
          <>
            <li
              key={item.code}
              onClick={() => onHandleChangeLink(item.path)}
              className="flex gap-x-4 items-center py-1 cursor-pointer text-gray-500 hover:text-indigo-600 group"
            >
    
              <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
              <span className="w-6 h-6 fill-current">{item.icon}</span>
              <span>{item.name}</span>
            </li>
          </>
        );
      })}
    </ul>
  )
}

export default React.memo(Tree);