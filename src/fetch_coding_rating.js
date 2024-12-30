const actualAPI = true ? `https://alfa-leetcode-api.onrender.com/` : `http://localhost:3000/`

const leetcodeContestQuery = `laldasji/contest`;
const leetcodeQuestionsQuery = `userProfile/laldasji`;

async function getInfo(type) {
    let message;
    if (type == 'questions') {
        message = actualAPI + leetcodeQuestionsQuery;
    } else {
        message = actualAPI + leetcodeContestQuery;
    }

    try {
        const response = await fetch(message);
        if (!response.ok) {
            throw new Error('Too many requests!');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return -1;
    }
}

function displayError() {
    const right = document.querySelector('#right');
    const newElement = document.createElement('div');
    newElement.classList.add('errorAlert');
    newElement.innerHTML = `<h1>Oops! Seems like the API has had a bit too many requests!
                            <br>
                            <br>
                            You can still visit <a href="https://leetcode.com/u/laldasji" target="_blank">My Leetcode Profile</a>
                            </h1>`;
    right.appendChild(newElement);
}

function showLoadingAnimation() {
    const right = document.querySelector('#right');
    const newElement = document.createElement('div');
    newElement.classList.add('errorAlert');
    const loading = document.createElement('div');
    loading.classList.add('lds-hourglass');

    newElement.append(loading);
    right.append(newElement);
}

function removeLoadingAnimation() {
    const right = document.querySelector('#right');
    const newElement = document.querySelector('.errorAlert');

    newElement.classList.add('disappear');
    setTimeout(() => {
        right.removeChild(newElement);
    }, 1000);
}

async function loadLeetcodeInfo() {
    showLoadingAnimation();
    console.log('huhohaha');
    const actualProgressEasy = document.querySelector('#actualProgressEasy')
    const actualProgressMedium = document.querySelector('#actualProgressMedium')
    const actualProgressHard = document.querySelector('#actualProgressHard')

    const progress = await getInfo('questions');
    const rankingProgress = await getInfo('contest');
    if (progress == -1 || rankingProgress == -1) {
        removeLoadingAnimation();
        displayError();
    }

    actualProgressEasy.style.width = `${(Number(progress.totalSubmissions[1].count) / Number(progress.totalEasy)) * 100}%`;
    actualProgressMedium.style.width = `${(Number(progress.totalSubmissions[2].count) / Number(progress.totalMedium)) * 100}%`;
    actualProgressHard.style.width = `${(Number(progress.totalSubmissions[3].count) / Number(progress.totalHard)) * 100}%`;

    const easyFractionCompleted = document.querySelector('.easyFractionCompleted');
    const mediumFractionCompleted = document.querySelector('.mediumFractionCompleted');
    const hardFractionCompleted = document.querySelector('.hardFractionCompleted');

    easyFractionCompleted.textContent = `${Number(progress.totalSubmissions[1].count)}/${Number(progress.totalEasy)}`;
    mediumFractionCompleted.textContent = `${Number(progress.totalSubmissions[2].count)}/${Number(progress.totalMedium)}`;
    hardFractionCompleted.textContent = `${Number(progress.totalSubmissions[3].count)}/${Number(progress.totalHard)}`;

    const leetcodeRank = document.querySelector('#leetcodeRank');
    let tempRank = String(progress.ranking);
    let rank = '';
    let length = tempRank.length;
    for (let i = length - 1; i >= 0; i--) {
        rank += tempRank[i];
        if ((length - i) != 0 && (length - i)%3 == 0)
            rank += ',';
    }
    rank = rank.split('').reverse().join('');
    leetcodeRank.innerHTML = `<h1>Ranking:<br>${rank}</h1>`;

    const contestRating = document.querySelector('#contestRating')
    const contestsAttended = document.querySelector('#contestsAttended')
    const contestRank = document.querySelector('#contestRank');
    const contestPercentage = document.querySelector('#contestPercentage')
    const globalRank = document.querySelector('#globalRank')

    contestRating.innerHTML = `Contest Rating:<br>${(rankingProgress.contestRating).toFixed(0)}`;
    contestsAttended.innerHTML = `Contests Attended:<br>${rankingProgress.contestAttend}`;
    contestRank.innerHTML = `Last Contest Rank:<br>${rankingProgress.contestParticipation[rankingProgress.contestParticipation.length - 1].ranking}`
    contestPercentage.innerHTML = `Contest Top %:<br>${rankingProgress.contestTopPercentage}%`;
    globalRank.innerHTML = `Global Ranking:<br>${rankingProgress.contestGlobalRanking} / ${rankingProgress.totalParticipants}`;

    setTimeout(() => {removeLoadingAnimation()}, 500);
}

export { loadLeetcodeInfo };