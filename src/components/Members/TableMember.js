import React, { Component } from "react";

const $ = require("jquery");
$.DataTable = require("datatables.net");

export class TableMember extends Component {
  
    componentDidMount(){
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            "columns": [
                {"data" : "name"},
                {"data" : "batch"},
                {"data" : "faculty"},
                {"data" : "email"},
                {"data" : "address"},
                {"data" : "position"},                
            ]
        })
    }

  render() {
    return (
      <div>
        <table
          className="display"
          width="100%"
          ref={(el) => this.el = el}
        >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Faculty</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Position</th>
                </tr>
            </thead>
        </table>
      </div>
    );
  }
}

export default TableMember;
