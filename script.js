const Calculate = () => {
    const wordsInputField = document.getElementById("words");
    const words = wordsInputField.value;
    const outputField = document.getElementById("output");
    if (words.trim() == "") {
        wordsInputField.classList.add("border-red-500", "border", "border-solid")
        outputField.classList.add("text-red-500")
        outputField.textContent = "Enter the value"
        return
    }
    const Calculate= words.length;
    outputField.classList.add("text-black")
    outputField.textContent = Calculate
    console.log(wordlength);

}