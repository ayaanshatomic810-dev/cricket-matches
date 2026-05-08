🏏 Cricket Matches Website

A modern, responsive web application to display the latest cricket matches with filtering capabilities and live updates.

Features

✅ Display Latest Matches - Shows all cricket matches with scores and details ✅ Real-time Filtering - Filter by All, Live, Upcoming, and Completed matches ✅ Live Match Indication - Animated badge for ongoing matches ✅ Responsive Design - Works perfectly on desktop, tablet, and mobile devices ✅ Auto-refresh - Updates every 30 seconds automatically ✅ Team Flags - Visual country flags for quick identification ✅ Match Details - Venue, timing, and match format information

File Structure

cricket-matches/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # Documentation
Installation & Usage

Quick Start

Download all files to your computer
Place them in the same folder
Open index.html in your web browser
Enjoy browsing the latest cricket matches!
No installation or dependencies required!

How to Use

Filtering Matches

All: View all matches
Live: See currently ongoing matches
Upcoming: Check upcoming scheduled matches
Completed: View finished matches
Match Information

Each match card displays:

Team names with country flags
Current scores
Match status (Live/Upcoming/Completed)
Match format (Test, ODI, T20I)
Venue location
Start time
Customization Guide

Add New Matches

Edit the matchesData array in script.js:

const matchesData = [
    {
        id: 9,
        team1: { name: 'India', flag: '🇮🇳', score: '250' },
        team2: { name: 'Pakistan', flag: '🇵🇰', score: '0' },
        status: 'upcoming',  // 'live', 'upcoming', or 'completed'
        format: 'ODI',       // 'Test', 'ODI', or 'T20I'
        venue: 'Eden Gardens, Kolkata',
        startTime: '2026-05-12 19:00 IST'
    }
];
Update Styles

Modify colors in styles.css:

Header gradient: Change colors in header selector
Card colors: Modify .match-card styling
Status colors: Update .match-status background colors
Change Refresh Interval

In script.js, modify the auto-refresh interval (default: 30000ms = 30 seconds):

setInterval(() => {
    renderMatches(getFilteredMatches());
}, 30000); // Change this value
API Integration

To connect to a real cricket API, modify the init() function in script.js:

Example with ESPN Cricket API

async function fetchMatches() {
    try {
        const response = await fetch('https://api.cricketdata.com/matches');
        const data = await response.json();
        renderMatches(data);
    } catch (error) {
        console.error('Error fetching matches:', error);
    }
}
Recommended Cricket APIs

Cricket Data API
ESPN Cricket API
CricAPI
Browser Compatibility

Works on all modern browsers:

Chrome 90+
Firefox 88+
Safari 14+
Edge 90+
Tips & Tricks

Add Sound Notifications - Play a sound when a match goes live
Dark Mode - Add a toggle for dark theme
Favorites - Save favorite teams and get alerts
Live Scores - Display ball-by-ball updates
Statistics - Show historical match data and team records
License

Free to use and modify!

Support

For questions or improvements, feel free to reach out!

Made with ❤️ for Cricket Fans