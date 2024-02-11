import React from 'react';

export default function Table({
  heads,
  items,
}: {
  heads?: React.ReactNode[];
  items: {
    content: React.ReactNode;
    title?: string;
  }[];
}) {
  return (
    <div>
      {heads && (
        <div className='font-b'>
          <tr>
            {heads.map((cell, i) => (
              <div key={i}>{cell}</div>
            ))}
          </tr>
        </div>
      )}
      <div className='grid grid-cols-4'>
        {items.map((cell, i) => (
          <div key={i} className='grid-rows-subgrid grid row-span-3 p-1'>
            <p className='row-span-2 flex items-center'>{cell.content}</p>
            {cell.title && <p className='text-center'>{cell.title}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
