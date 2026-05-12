/**
 * IPL 2026 Recent Match Results
 * Data reflects the matches completed as of May 12, 2026.
 */

const iplMatchResults = [
  {
    matchNumber: 56,
    date: "2026-05-12",
    venue: "Narendra Modi Stadium, Ahmedabad",
    team1: {
      name: "Gujarat Titans",
      short: "GT",
      logo: "https://iplt20.com", // Example Official Path
      score: "168/5 (20.0)"
    },
    team2: {
      name: "Sunrisers Hyderabad",
      short: "SRH",
      logo: "https://iplt20.com",
      score: "86 (14.5)"
    },
    outcome: "Gujarat Titans won by 82 runs"
  },
  {
    matchNumber: 55,
    date: "2026-05-11",
    venue: "HPCA Stadium, Dharamshala",
    team1: {
      name: "Punjab Kings",
      short: "PBKS",
      logo: "https://iplt20.com",
      score: "210/5 (20.0)"
    },
    team2: {
      name: "Delhi Capitals",
      short: "DC",
      logo: "https://iplt20.com",
      score: "216/7 (19.0)"
    },
    outcome: "Delhi Capitals won by 3 wickets"
  },
  {
    matchNumber: 54,
    date: "2026-05-10",
    venue: "Shaheed Veer Narayan Singh Stadium, Raipur",
    team1: {
      name: "Royal Challengers Bengaluru",
      short: "RCB",
      logo: "https://iplt20.com",
      score: "167/8 (20.0)"
    },
    team2: {
      name: "Mumbai Indians",
      short: "MI",
      logo: "https://iplt20.com",
      score: "166/7 (20.0)"
    },
    outcome: "Royal Challengers Bengaluru won by 2 wickets"
  }
];

// Display the most recent result in console
const latest = iplMatchResults[0];
console.log(`${latest.team1.short} vs ${latest.team2.short}: ${latest.outcome}`);

];

let currentFilter = 'all';

// Initialize the page
function init() {
    renderMatches(matchesData);
    setupFilterListeners();
    // Auto-refresh every 30 seconds
    setInterval(() => {
        renderMatches(getFilteredMatches());
    }, 30000);
}

// Setup filter button listeners
function setupFilterListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            renderMatches(getFilteredMatches());
        });
    });
}

// Get filtered matches based on current filter
function getFilteredMatches() {
    if (currentFilter === 'all') {
        return matchesData;
    }
    return matchesData.filter(match => match.status === currentFilter);
}

// Render matches to the page
function renderMatches(matches) {
    const container = document.getElementById('matches-container');
    
    if (matches.length === 0) {
        container.innerHTML = '<div class="loading">No matches found</div>';
        return;
    }
    
    container.innerHTML = matches.map(match => createMatchCard(match)).join('');
}

// Create a match card HTML
function createMatchCard(match) {
    const statusClass = match.status === 'live' ? 'live' : match.status === 'upcoming' ? 'upcoming' : 'completed';
    const statusText = match.status.charAt(0).toUpperCase() + match.status.slice(1);
    
    return `
        <div class="match-card">
            <div class="match-header">
                <div>
                    <span class="match-format">${match.format}</span>
                </div>
                <span class="match-status ${statusClass}">${statusText}</span>
            </div>
            <div class="match-body">
                <div class="teams-container">
                    <div class="team">
                        <div class="team-flag">${match.team1.flag}</div>
                        <div class="team-name">${match.team1.name}</div>
                        <div class="team-score">${match.team1.score}</div>
                    </div>
                    <div class="vs-text">vs</div>
                    <div class="team">
                        <div class="team-flag">${match.team2.flag}</div>
                        <div class="team-name">${match.team2.name}</div>
                        <div class="team-score">${match.team2.score}</div>
                    </div>
                </div>
                <div class="match-details">
                    <div class="detail-row">
                        <span class="detail-label">📍 Venue:</span>
                        <span class="detail-value">${match.venue}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">⏰ Time:</span>
                        <span class="detail-value">${match.startTime}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
