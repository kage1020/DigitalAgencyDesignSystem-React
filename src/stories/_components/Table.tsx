import React from 'react';

export default function Table({ rows }: { rows: React.ReactNode[][] }) {
  return (
    <table>
      <thead>
        <tr>
          {rows[0].map((cell, i) => (
            <th key={i}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.slice(1).map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={i * rows[0].length + j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
