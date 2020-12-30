import axios from "axios";
import { NEWS_API_URL } from "../../global";

/**
 * Gets news about the company.
 * 
 * @param {string} companyName Company name.
 * @return {Promise<AxiosResponse<any>>} Success or error response.
 */
export function getCompanyNews(companyName) {
    return axios.get(NEWS_API_URL + companyName);
}