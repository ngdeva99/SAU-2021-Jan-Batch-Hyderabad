import React, { Component } from 'react';

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         students: [
            { id: 1, name: 'Devanathan', age: 21, email: 'deva@it.ssn.edu.in' },
            { id: 2, name: 'Osama', age: 34, email: 'AlQieda.com' },
            { id: 3, name: 'dubakoor', age: 66, email: 'poda@ymail.com1' },
         ]
      }
   }
   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email } = student  
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }

   renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }




 render() {
    return (
       <div>
          <h1 id='title'>React Table</h1>
           <div>
              <h1 id='title'>React employee Table</h1>
              <table id='employees' border="2">
                <thead>
                  <tr>{this.renderTableHeader()}</tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
              </table>
           </div>
       </div>
    )
 }
}

export default Table