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
