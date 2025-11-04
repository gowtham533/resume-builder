import commonAPI from "./commonAPI";
import ServerURL from "./ServerURL";

// resume add api - called by userinputs, when finish button clicked
export const addResume = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}