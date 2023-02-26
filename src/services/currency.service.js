import axios from "axios"
import { formatedBigValues, formatedCurrency } from "../common/currenyformate";

function service() {

    const getAllCurrency = () => {

        return axios.get('https://api.coincap.io/v2/assets')
            .then((response) => {
                try {
                    const currencyData = []
                    response.data.data.map((currency) => {
                        let curObj = {
                            key: currency.id,
                            rank: currency.rank,
                            name: currency.name,
                            price: formatedCurrency(parseFloat(currency.priceUsd)),
                            mcap: formatedCurrency(parseFloat(currency.marketCapUsd)),
                            vwap: formatedCurrency(currency.vwap24Hr),
                            supply:formatedBigValues(parseFloat(currency.supply).toFixed(2)),
                            volume: formatedCurrency(currency.volumeUsd24Hr),
                            ch24: parseFloat(currency.changePercent24Hr).toFixed(2),
                            symbol: currency.symbol
                        }
                        currencyData.push(curObj)
                    })
                    return currencyData
                } catch (err) {
                    console.log(err);
                }
            })
            .catch((err) => err);
    }
    return {
        getAllCurrency
    };
}
const currencyService = service();

export default currencyService;
