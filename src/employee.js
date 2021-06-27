import React from 'react';
class Employee extends React.Component{
    render(){
    //     return <form className="form-horizontal">
        
    //     <input type="text" className="form-control" ref={(c) => this.title = c} name="title" />
    //     <div>{this.title}</div>
    // </form>
        return <EmployeeDetails Id="1" Name="John Doe" Dept="Admin"></EmployeeDetails>;
    }
}

function EmployeeDetails(props) {
    return <div className=" flex rounded border-2 border-gray-500 p-5 h-screen justify-center items-center">            
            <div>
                <table className="border-collapse border border-green-800">
                    <tr className="">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Dept</th>
                    </tr>
                    <tr>
                        <td>{props.Id}</td>
                        <td>{props.Name}</td>
                        <td>{props.Dept}</td>
                    </tr>
                </table>
            </div>
            
        </div>;
}

export default Employee;