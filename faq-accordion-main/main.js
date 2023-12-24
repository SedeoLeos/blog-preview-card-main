function showMore(accordion){
    // const clickQestion = questionBox.querySelector(".question");
    const showAnswer = accordion.querySelector(".answer");
    const changeIcon = accordion.querySelector(".image-icon");

    if(showAnswer.classList.contains("hidden")){
        showAnswer.classList.remove("hidden");
        changeIcon.src="assets/images/icon-plus.svg";
    }else{
        showAnswer.classList.add("hidden");
        changeIcon.src="assets/images/icon-minus.svg";
    }
}