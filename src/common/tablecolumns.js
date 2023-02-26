
const columnsLgScreen = [
    {
        title: 'Rank',
        dataIndex: 'rank',
        width: '7%',
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.rank.startsWith(value),
    },
    {
        title: 'Name',
        dataIndex: 'name',
        with: '15%',
        render: (name, data) => <div style={{ fontSize: '1.2em', display: 'flex' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                <img style={{ height: '40px', width: '40px' }} src={`https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`} />
            </div>
            <div>
                <div>{name}</div>
                <div>{data.symbol}</div>
            </div>
        </div>
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: 'Market Cap',
        dataIndex: 'mcap',
    },
    {
        title: 'VWAP(24Hr)',
        dataIndex: 'vwap',
    },
    {
        title: 'Supply',
        dataIndex: 'supply',
    },
    {
        title: 'Volume',
        dataIndex: 'volume',
    },
    {
        title: 'Change(24Hr)',
        dataIndex: 'ch24',
        render: (change)=>
            <div>
                <p style={parseInt(change)>=0?{color:'green'}:{color:'red'}}>{change}%</p>
            </div>
        
    }
];

const columnsSmScreen = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (name, data) => <div style={{ fontSize: '1.1em', display: 'flex' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                <img style={{ height: '25px', width: '25px' }} src={`https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`} />
            </div>
            <div>
                <div>{name}</div>
                <div>{data.symbol}</div>
            </div>
        </div>
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: '24Hr',
        dataIndex: 'ch24',
    }
]

export const getLscrColumns = () => {
    return columnsLgScreen;
}

export const getSmcrColumns = () => {
    return columnsSmScreen;
}