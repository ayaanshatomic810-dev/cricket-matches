// Sample cricket matches data
const matchesData = [
    {
        id: 1,
        team1: { name: 'India', flag: '🇮🇳', score: '185' },
        team2: { name: 'Australia', flag: '🇦🇺', score: '156' },
        status: 'live',
        format: 'T20I',
        venue: 'MCG, Melbourne',
        startTime: '2026-05-08 14:00 IST'
    },
    {
        id: 2,
        team1: { name: 'Pakistan', flag: '🇵🇰', score: '142' },
        team2: { name: 'England', flag: '🇬����', score: '0' },
        status: 'upcoming',
        format: 'ODI',
        venue: 'Old Trafford, Manchester',
        startTime: '2026-05-09 16:30 UTC'
    },
    {
        id: 3,
        team1: { name: 'South Africa', flag: '🇿🇦', score: '287' },
        team2: { name: 'New Zealand', flag: '🇳��', score: '245' },
        status: 'completed',
        format: 'Test',
        venue: 'Wanderers, Johannesburg',
        startTime: '2026-05-06 10:00 SAST'
    },
    {
        id: 4,
        team1: { name: 'Sri Lanka', flag: '🇱🇰', score: '168' },
        team2: { name: 'Bangladesh', flag: '🇧🇩', score: '165' },
        status: 'live',
        format: 'T20I',
        venue: 'Dambulla International Cricket Ground',
        startTime: '2026-05-08 19:00 IST'
    },
    {
        id: 5,
        team1: { name: 'West Indies', flag: '🏝️', score: '0' },
        team2: { name: 'Afghanistan', flag: '🇦🇫', score: '0' },
        status: 'upcoming',
        format: 'T20I',
        venue: 'Providence Stadium, Guyana',
        startTime: '2026-05-10 20:00 AST'
    },
    {
        id: 6,
        team1: { name: 'Ireland', flag: '🇮🇪', score: '156' },
        team2: { name: 'Netherlands', flag: '🇳🇱', score: '142' },
        status: 'completed',
        format: 'ODI',
        venue: 'Malahide, Dublin',
        startTime: '2026-05-05 14:00 IST'
    },
    {
        id: 7,
        team1: { name: 'Zimbabwe', flag: '🇿🇼', score: '98' },
        team2: { name: 'Kenya', flag: '🇰🇪', score: '102' },
        status: 'live',
        format: 'ODI',
        venue: 'Harare Sports Club',
        startTime: '2026-05-08 12:00 CAT'
    },
    {
        id: 8,
        team1: { name: 'UAE', flag: '🇦🇪', score: '0' },
        team2: { name: 'Oman', flag: '🇴🇲', score: '0' },
        status: 'upcoming',
        format: 'T20I',
        venue: 'Dubai International Cricket Stadium',
        startTime: '2026-05-11 18:00 GST'
    }
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