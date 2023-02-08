# Seenit - Simple Reddit clone app only with images and videos

![thumbnail](public/screenshot.png)

This is Seenit, simple reddit clone app only fetching images and videos from any subreddit. It's built with React and Tailwind.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See popular section on initial page load
- See error message if user types a wrong subreddit
- Change subreddit by clicking a tag below search bar
- click the corresponding links on content
- pause and play videos by clicking

### Screenshot

![thumbnail-1](public/thumbnail-1.gif)
![thumbnail-2](public/thumbnail-2.gif)

### Links

- Live Site URL: [Netlify link](https://seenit-reddit-clone.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- Mobile-first workflow
- [Reddit JSON API](https://github.com/reddit-archive/reddit/wiki/JSON) - Reddit JSON API
- [React](https://reactjs.org/) - JS library
- [Vite](https://nextjs.org/) - React framework
- [Tailwindcss](https://tailwindcss.com) - Tailwindcss

### What I learned

```javascript
// ./src/components/Video.jsx
function Video({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    console.log(isPlaying);

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
// return video content
  )
  }
```

To respectively manage the play/pause button of each video content, I utilized the `useRef` hook. This hook doesn't trigger re-rendering and store information to each component (the videos in this instance), enabling users to control the videos without reloading the entire page.
