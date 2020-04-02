import React from "react";

function DateFormatGroup({ results, title }) {
  return (
    <>
      <thead>
        <tr>
          <th colSpan="3">{title}</th>
        </tr>
      </thead>
      <tbody>
        {results.map(result => (
          <tr key={result.name}>
            <td>{result.name}</td>
            <td>{result.skeleton}</td>
            <td>{result.value}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default DateFormatGroup;
