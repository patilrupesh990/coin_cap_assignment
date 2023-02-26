
import React, { Component } from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux';
import { LargeScreenTable, SmallScreenTable } from './CoinListElements';

 class CoinListTable extends Component {
    constructor(props){
        super(props)
    }
   
  render() {
    return (
      <>
        <LargeScreenTable>
            <Table columns={this.props.columns} dataSource={this.props.currencies} pagination={false}>
            </Table>
        </LargeScreenTable>
        <SmallScreenTable>
            <Table columns={this.props.smallScreenColumns} dataSource={this.props.currencies} pagination={false}>
            </Table>
        </SmallScreenTable>
      </>
    )
  }
}

const mapStateToProps= state =>({
    columns:state.columns.lgScrColumns,
    smallScreenColumns:state.smColumns.smScrColumns
})

export default connect(mapStateToProps)(CoinListTable)