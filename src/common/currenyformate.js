export const formatedCurrency = (value) =>{
    return parseInt(value).toLocaleString("en-US", {style:"currency", currency:"USD"})
}