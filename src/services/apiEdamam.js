import axios from "axios";

export const apiEdamam = () => {

    /* let url = "https://api.edamam.com/search?q=dessert&pear&app_id=cc383839&app_key=5a1cea729b493172ae24a7a51f2a7d9e&from=0&to=10"; */

    let url = "https://api.edamam.com/search?q=dessert";
    let auth = "&app_id=cc383839&app_key=5a1cea729b493172ae24a7a51f2a7d9e&from=0&to=10"

    const getDesserts = async () => {
        const res = await axios.get(`${url}${auth}`);
        return res;
    };

    const getSearch = async (search) => {
        const res = await axios.get(`${url}&${search}${auth}`);
        return res;
    };




  return (
      getDesserts,
      getSearch
  )
}


/* https://developer.edamam.com/admin/applications/1409622511458?service_id=2555417725632 */

/* https://developer.edamam.com/es/api-recetas-edamam-documentacion */