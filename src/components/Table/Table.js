import React from "react";

const Table = (props) => {
  const rows = props.characters.map((character, i) => {
    return <tr key = {i}>
      <td>{character.name}</td>
      <td>{character.job}</td>
      <td><a className="button is-danger" onClick={() => props.delete(character)}>Delete</a></td>
    </tr>
  })
  return (
     <div className='row'>
      <div className='col-md-12 col-lg-12'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
     </div>
  );
};

export default Table;