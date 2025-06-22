 function checkAnswer(button) {
      const correctAnswer = button.getAttribute("data-answer");
      const selectedAnswer = button.textContent;
      // console.log("Selected Answer:", selectedAnswer);
      // console.log("Correct Answer:", correctAnswer);

      if (selectedAnswer.includes(correctAnswer)) {
        button.style.backgroundColor = "green";
        button.style.color = "white";
      } else {
        button.style.backgroundColor = "red";
        button.style.color = "white";
      }

      const optionContainer = button.parentElement;
  const options = optionContainer.querySelectorAll(".options");
  options.forEach((opt) => {
    opt.disabled = true;
    opt.style.cursor = "not-allowed";
  });

    }

    

    
    // Handle submit button click
    document
      .querySelector(".submit-btn button")
      .addEventListener("click", function () {
        const options = document.querySelectorAll(".options");
        let score = 0;
        options.forEach((option) => {
          if (option.style.backgroundColor === "green") {
            score++;
          }
        });
        document.getElementById(
          "score"
        ).innerHTML = `<strong>Score: ${score} / 20</strong>`;
        document.querySelector(".submit-btn button").disabled = true;
        document.querySelector(".submit-btn button").style.backgroundColor =
          "gray";
        document.querySelector(".submit-btn button").style.cursor =
          "not-allowed";
      });
