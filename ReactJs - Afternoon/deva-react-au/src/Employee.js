import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

class Employee extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
        stuhead: ['Employee id','Name','Department','Action'],
        studdatas:  [
         { id: 1, name:"Devanathan", department: "IT"},
         { id: 2, name:"Osama", department: "Terrorism"},
         { id: 3, name:"Elon Musk", department: "Conquering Worlds"},
         ],
      };
    }
    

    renderTableHeader(){
        return this.state.stuhead.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }

    removeRow(tempid){
      console.log('deleting: ',tempid);
      var array = this.state.studdatas;
      var filtered = array.filter(function(obj){ 
         return obj.id !== tempid;
      });
      this.setState({
         studdatas:filtered
      });
    }

    renderTableData() {
        return this.state.studdatas.map((employee, index) => {
           const { id, name, department } = employee 
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{department}</td>
                 <td>
                  <FontAwesomeIcon icon='times' onClick={()=>{this.removeRow(id)}} />
                 </td>
              </tr>
           )
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='title'>React employee Table</h1>
              <table id='employees' border="1">
                <thead>
                  <tr>{this.renderTableHeader()}</tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
              </table>
           </div>
        )
     }
}
export default Employee;