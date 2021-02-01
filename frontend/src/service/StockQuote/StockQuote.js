import axios from "axios";
import { STOCK_QUOTE_URL } from "../../global";

export function getStockQuote(companyName) {
    return axios.get(STOCK_QUOTE_URL + companyName);
}