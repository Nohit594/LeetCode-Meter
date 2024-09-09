document.addEventListener("DOMContentLoaded", function () {

    const searchBtn = document.getElementById('search-btn');
    const usernameInput = document.getElementById('user-input');
    const statsContainer = document.querySelector('.stats-container');
    const easyProgress = document.querySelector('.easy-progress');
    const mediumProgress = document.querySelector('.medium-progress');
    const hardProgress = document.querySelector('.hard-progress');

    const easy = document.getElementById('easy');
    const medium = document.getElementById('medium');
    const hard = document.getElementById('hard');

    let totalQues;
    let totalEasyQues;
    let totalMediumQues;
    let totalHardQues;

    let solvedTotalQues;
    let solvedTotalEasyQues;
    let solvedTotalMediumQues;
    let solvedTotalHardQues;

    const cardStatsContainer = document.querySelector('.stats-cards');

    function validateUsername(username) {
        if (username.trim() === "") {
            alert('Username should not be empty');
            return false;
        }
        return true;
    }

    function fetchUserDetails(username) {
        searchBtn.textContent = 'Searching...'
        searchBtn.disabled = true;
        const config = {
            headers: {
                'Accept': 'application/json',
            },
        }

        fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, config)
            .then((res) => res.json())
            .then((data) => {

                if(data.message === "user does not exist") alert("User does not exist");
                totalQues = data.totalQuestions;
                totalEasyQues = data.totalEasy;
                totalMediumQues = data.totalMedium;
                totalHardQues = data.totalHard;

                solvedTotalQues = data.totalSolved;
                solvedTotalEasyQues = data.easySolved;
                solvedTotalMediumQues = data.mediumSolved;
                solvedTotalHardQues = data.hardSolved;

                console.log("Fetched Data: ", data);

                updateProgress(solvedTotalEasyQues, totalEasyQues, easy, easyProgress);
                updateProgress(solvedTotalMediumQues, totalMediumQues, medium, mediumProgress);
                updateProgress(solvedTotalHardQues, totalHardQues, hard, hardProgress);
                searchBtn.textContent = 'Search';
                searchBtn.disabled = false;
            })
            .catch((error) => {
                console.error("Error fetching user details: ", error);
                searchBtn.textContent = 'Searching...'
                searchBtn.disabled = true;
                statsContainer.innerHTML = `<p>${error.message}</p>`;
            });
    }

    function updateProgress(solved, total, label, circle) {
        if (total > 0) {
            const progressDegree = (solved / total) * 100;
            circle.style.setProperty("--progress-degree", `${progressDegree}%`);
            label.textContent = `${solved}/${total}`;
        } else {
            label.textContent = "No data";
            circle.style.setProperty("--progress-degree", `0%`);
        }
    }

    searchBtn.addEventListener('click', () => {
        const username = usernameInput.value;
        console.log("Logging username: ", username);
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    });
});
