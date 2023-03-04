
export function capitalizeWord(word: string) {
    // Convert the first letter of the word to uppercase and concatenate the rest of the word
    return word.charAt(0).toUpperCase() + word?.slice(1);
}


export const formatMessgae = (response: any, type?: "error" | "success") => {

    let msg = "";

    if (type == "error") {
        msg = "Something went wrong, ty again."
    }
    else {
        msg = "Success"
    }

    if (response?.toString().toLowerCase().includes("network error")) {
        msg = "There is a network error, check your network connection."
    }

    if (response?.response) {
        if (response?.response?.data?.message) {
            msg = response.response.data.message
        }

        if (response?.response?.message) {
            msg = response.response.message
        }

    }

    return { msg };

}