Seenit - Simple Reddit clone app only with images and videos

This is Seenit, simple reddit clone app only fetching images and videos from any subreddit. It's built with React, Tailwind,

This is a solution to the IP address tracker challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of contents

Overview
The challenge
Screenshot
Links
My process
Built with
What I learned
Continued development
Overview

The challenge

Users should be able to:

View the optimal layout for each page depending on their device's screen size
See their location on the map on the initial page load
Search for any IP addresses or domains and see the key information and location
Screenshot

thumbnail-1 thumbnail-2

Links

Solution URL: Frontend Mentor Solution link
Live Site URL: Netlify link
My process

Built with

Semantic HTML5 markup
CSS custom properties
Flexbox
Mobile-first workflow
IP API - IP Geolocation API
React Leaflet - React components for Leaflet maps
Leaflet - open-source JavaScript library for mobile-friendly interactive maps
React - JS library
Vite - React framework
Styled Components - For styles
What I learned

I started this project to get familiar with Styled Components and React. I learned a lot while using react-leaflet for map data and IP API for fetching IP Geolocation API. It was a bit tough without having a proficiency in React and Styled Components.

// ./src/App.jsx
const fetchData = async (adress) => {
try {
setLoading(true);
const response = await fetch(`http://ip-api.com/json/${adress?adress:""}`);
const data = await response.json();
setUser(data);
setLoading(false);
if ( data.status === 'success') {setCenter([data.lat, data.lon])}
} catch (err) { console.log('Error occured when fetching data');}}

useEffect(() => { fetchData();},[]);
 there are many ways to fetch api data on React. I chose try{}catch{}and async, awaitbecause it didn't require importing extra components or library from outside and this project was simple enough to use
 on first load, with useState, set loading state to render loading bar on screen
 also it has a fallback for error when fetching data

Continued development

can i move the zoom button on another corner? if possible, I could put that button bottom-left
on Netlify, you can't use http and unluckily enough, for free IP-API pricing, I can't use https feature. I could either find another IP geolocation API with https option or find another hosting website that support http. but in my opinion, using http is unsafe anyway
