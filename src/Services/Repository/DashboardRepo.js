import axios from "axios";
import {toast} from "react-hot-toast";


export async function getNewsData(category, country) {
    const toastId = toast.loading("Fetching latest News...");
    try {
        const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`);
        toast.dismiss(toastId);
        toast.success("Here are your fresh news..!");
        
        const resData = response.data.articles;
        console.log(resData); // Log for debugging

        return resData; // Properly return the articles array
    } catch (error) {
        toast.dismiss(toastId);
        toast.error("Something went wrong while fetching news..!");
        console.error("Error fetching data:", error);
        
        return []; // Return an empty array on error
    }
}
