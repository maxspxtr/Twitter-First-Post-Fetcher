# Twitter First Post Fetcher

This repository contains a script that automates the process of finding the first tweet of any Twitter account using JavaScript in the browser's inspect console. 

## Features
- Automates scrolling to load all tweets.
- Collects tweets dynamically as they are loaded.
- Outputs the first tweet found.

## How It Works
The script scrolls through the Twitter profile page, collects tweets, and displays the first tweet in the browser console.

---

### Code
```javascript
/**
 * Twitter First Post Fetcher
 * Automates finding the first tweet of a Twitter account using the browser console.
 */

let tweets = []; // Array to store tweets
let scrolled = 0; // Track number of scrolls

function getTweets() {
    window.scrollTo(0, document.body.scrollHeight); // Scroll down to load more tweets
    scrolled++;

    // Stop if too many scrolls to prevent infinite loop
    if (scrolled > 50) { 
        clearInterval(interval);
        console.log("Stopped scrolling.");
        console.log("Tweets found so far:", tweets);
        return;
    }

    // Collect tweets visible on the page
    document.querySelectorAll('article').forEach((article) => {
        const tweet = article.innerText.split('\n')[0]; // Extract text from the article
        if (!tweets.includes(tweet)) {
            tweets.push(tweet);
        }
    });
}

// Run the script every 2 seconds to load more tweets
let interval = setInterval(getTweets, 2000);
```

---

### Usage
1. Open the Twitter profile of the desired account in your browser.
2. Open the browser's Developer Tools by pressing:
   - `Ctrl + Shift + I` (Windows/Linux) or 
   - `Cmd + Option + I` (Mac).
3. Navigate to the **Console** tab.
4. Paste the code snippet provided above into the console.
5. Press `Enter` to execute the script.
6. Wait for the script to collect tweets. Once it stops, the earliest tweets will be displayed in the `tweets` array in the console.

---

### Limitations
- This script depends on Twitter's dynamic loading behavior and may stop working if Twitter changes its page structure.
- Limited to the number of tweets loaded during scrolling.

---

### Future Enhancements
- Create a browser extension for easier use.
- Fetch tweets programmatically using Twitter's API for more reliability.

---

### License
This project is licensed under the MIT License. See the `LICENSE` file for details.
