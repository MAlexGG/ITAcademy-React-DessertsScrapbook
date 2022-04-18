import axios from "axios";

export const apiEdamam = () => {

    let url = "https://api.edamam.com/search?q=dessert";
    let auth = "&app_id=cc383839&app_key=5a1cea729b493172ae24a7a51f2a7d9e&";
    let startPage = "from=";
    let endPage = "&to=";

    const getSearch = async (search, start, end) => {
        const res = await axios.get(`${url} ${search}${auth}${startPage}${start}${endPage}${end}`);
        return res;
    };

    return {
        getSearch
    }       
}