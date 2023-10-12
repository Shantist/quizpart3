// Third quiz.
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const submitButton = document.getElementById("submit-button");
    const resultContainer = document.getElementById("result-container");
    const scoreElement = document.getElementById("score");
    const questionsContainer = document.getElementById("questions-container");

    let quizStarted = false;

    startButton.addEventListener("click", function () {
        quizStarted = true;
        startButton.style.display = "none";
        questionsContainer.style.display = "block";
    });

    submitButton.addEventListener("click", function () {
        if (!quizStarted) {
            return; // Do not process the quiz if it hasn't started yet.
        }

        const unansweredQuestions = getUnansweredQuestions();
        
        if (unansweredQuestions.length === 0) {
            const answers = getAnswers();
            const totalQuestions = 3;
            const score = calculateScore(answers, totalQuestions);

            // Display results
            scoreElement.textContent = `Your Score: ${score} / ${totalQuestions}`;
            resultContainer.style.display = "block";
        } else {
            alert("Please answer all questions before submitting.");
            highlightUnansweredQuestions(unansweredQuestions);
        }
    });

    playAgainButton.addEventListener("click", function () {
        quizStarted = false;
        startButton.style.display = "block";
        questionsContainer.style.display = "none";
        resultContainer.style.display = "none";
        clearAnswers();
    });

    function getAnswers() {
        const answers = [];

        // Question 1: Multiple Choice
        const q1 = document.querySelector('input[name="q1"]:checked');
        if (q1) {
            answers.push(q1.value);
        }

        // Question 2: Fill in the Blank
        const q2Answer = document.getElementById("q2-answer").value.trim();
        if (q2Answer) {
            answers.push(q2Answer.toLowerCase());
        }

        // Question 3: True or False
        const q3 = document.querySelector('input[name="q3"]:checked');
        if (q3) {
            answers.push(q3.value);
        }

        return answers;
    }

    function calculateScore(answers, totalQuestions) {
        let score = 0;

        // Check answers for each question
        if (answers[0] === "tama") {
            score++;
        }

        if (answers[1] === "channel") {
            score++;
        }

        if (answers[2] === "true") {
            score++;
        }

        return score;
    }

    function clearAnswers() {
        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.checked = false;
        });

        document.getElementById("q2-answer").value = "";
    }

    function getUnansweredQuestions() {
        const unansweredQuestions = [];

        // Question 1: Multiple Choice
        const q1 = document.querySelector('input[name="q1"]:checked');
        if (q1) {
            answers.push(q1.value);
        }

        // Question 2: Fill in the Blank
        const q2Answer = document.getElementById("q2-answer").value.trim();
        if (q2Answer) {
            answers.push(q2Answer.toLowerCase());
        }

        // Question 3: True or False
        const q3 = document.querySelector('input[name="q3"]:checked');
        if (q3) {
            answers.push(q3.value);
        }

        return answers;
    }

    function calculateScore(answers, totalQuestions) {
        let score = 0;

        // Check answers for each question
        if (answers[0] === "tama") {
            score++;
        }

        if (answers[1] === "channel") {
            score++;
        }

        if (answers[2] === "true") {
            score++;
        }

        return score;
    }

    function clearAnswers() {
        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.checked = false;
        });

        document.getElementById("q2-answer").value = "";
    }

    function getUnansweredQuestions() {
        const unansweredQuestions = [];

        // Question 1: Multiple Choice
        const q1 = document.querySelector('input[name="q1"]:checked');
        if (!q1) {
            unansweredQuestions.push("Question 1");
        }

        // Question 2: Fill in the Blank
        const q2Answer = document.getElementById("q2-answer").value.trim();
        if (!q2Answer) {
            unansweredQuestions.push("Question 2");
        }

        // Question 3: True or False
        const q3 = document.querySelector('input[name="q3"]:checked');
        if (!q3) {
            unansweredQuestions.push("Question 3");
        }

        return unansweredQuestions;
    }

    function highlightUnansweredQuestions(unansweredQuestions) {
        unansweredQuestions.forEach(question => {
            const questionElement = document.querySelector(`strong:contains("${question}")`);
            if (questionElement) {
                questionElement.style.color = "red";
            }
        });
    }
});
