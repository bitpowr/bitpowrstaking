
export function capitalizeWord(word: string) {
    // Convert the first letter of the word to uppercase and concatenate the rest of the word
    return word.charAt(0).toUpperCase() + word.slice(1);
}