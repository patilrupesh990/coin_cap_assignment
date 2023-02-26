export const formatedCurrency = (value) =>{
    if (value >= 1e6 && value < 1e9){ 
        return "$"+((value / 1e6).toFixed(2).toLocaleString("en-US", {style:"currency", currency:"USD"}) + "M");
    }
    if (value >= 1e9 && value < 1e12)
         return "$" + (value / 1e9).toFixed(2).toLocaleString("en-US", {style:"currency", currency:"USD"}) + "B";
    else
    return parseFloat(value).toLocaleString("en-US", {style:"currency", currency:"USD"})
}

export const formatedBigValues = (value) =>{
    if (value >= 1e6 && value < 1e9){ 
        return ((value / 1e6).toFixed(2) + "M");
    }
    if (value >= 1e9 && value < 1e12)
         return (value / 1e9).toFixed(2) + "B";
    else
    return parseInt(value)
}