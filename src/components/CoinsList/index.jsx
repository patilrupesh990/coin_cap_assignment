import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CoinListContainer } from './CoinListElements'
import CoinListTable from './CoinListTable'
import { fetchCurrencies, fetchColumns, fetchSmColumns } from '../../actions/currencies.actions'
import { slice } from 'lodash'
import { Button } from 'antd';

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCompleted: false,
            index: 50,
            initialData: []
        }
    }

    componentDidMount() {
        this.props.fetchCurrencies();
        this.props.fetchColumns();
        this.props.fetchSmColumns();
    }

    static getDerivedStateFromProps(props, state) {
        if (props?.currencies.length > 0) {
            state.initialData = slice(props?.currencies, 0, state.index);
        }
    }

    loadMore = () => {
        if (this.state.index >= this.props?.currencies.length) {
            this.setState({
                isCompleted: true
            })
        } else {
            this.setState((prev) => ({
                isCompleted: false,
                initialData: slice(this.props?.currencies, 0, this.state.index + 50),
                index: this.state.index + 50,
            }))
        }
    }

    render() {
        return (
            <>
                <CoinListContainer>
                    <CoinListTable currencies={this.state.initialData} />

                </CoinListContainer>
                {!this.state.isCompleted ? (
                    <div style={{ margin: '1em 0em 1em 0em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button onClick={this.loadMore} type="primary" shape="round" size="large">
                            View More
                        </Button>
                    </div>
                ) : null}
            </>
        )
    }
}

const mapStateToProps = state => ({
    currencies: state.currency.currenciesIntialState
})

export default connect(mapStateToProps, {
    fetchCurrencies,
    fetchColumns,
    fetchSmColumns
})(index)