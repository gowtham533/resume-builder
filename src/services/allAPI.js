import commonAPI from "./commonAPI";
import ServerURL from "./ServerURL";

// resume add api - called by userinputs, when finish button clicked
export const addResume = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)

}

// get resume api called from  viewresume 
export const getResume = async (id)=>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
}

// update resume api
export const updateResume = async (id,resume)=>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
}

// add hstory api
export const addHistoryAPI = async (history)=>{
    return await commonAPI(`${ServerURL}/history`,"POST",history)
}

// get hstry api
export const getHistoryAPI = async ()=>{
    return await commonAPI(`${ServerURL}/history`,"GET",{})
}

// remove hstry api
export const removeHistoryAPI = async (id)=>{
    return await commonAPI(`${ServerURL}/history/${id}`,"DELETE",{})
}