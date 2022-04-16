import axios from "axios";

export const apiEdamam = () => {

    let url = "https://api.edamam.com/search?q=dessert";
    let auth = "&app_id=cc383839&app_key=5a1cea729b493172ae24a7a51f2a7d9e&";
    let startPage = "from=";
    let endPage = "&to=";

    const nextPage = async (start, end) => {
        const res = await axios.get(`${url}${auth}${startPage}${start}${endPage}${end}`);
        return res;
    };

    const getSearch = async (search, start, end) => {
        const res = await axios.get(`${url}&${search}${auth}${startPage}${start}${endPage}${end}`);
        return res;
    };

    return {
        nextPage,
        getSearch
    }
        
}


/* https://developer.edamam.com/admin/applications/1409622511458?service_id=2555417725632 */

/* https://developer.edamam.com/es/api-recetas-edamam-documentacion */