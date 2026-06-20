# FemFit (Web)

A women's fitness and wellness tracker, built with React and deployed on Vercel. This is the web version of FemFit — originally a Flutter mobile app — rebuilt so it's easy to deploy and try out straight from the browser.

Log workouts, track your water intake, and check in on your mood for the day. Everything is saved in the browser's local storage so your data is there when you come back.

## Features

- Home screen with a progress ring summarizing the day
- Workout logger with quick-add suggestions
- Water intake tracker with a visual goal of 8 glasses a day
- Mood check-in with six mood options
- Data resets automatically each day
- No backend, no login — everything stored locally in the browser

## Tech stack

React, Vite, plain CSS (no UI framework)

## Running locally

```bash
git clone https://github.com/Kare100/femfit-web.git
cd femfit-web
npm install
npm run dev
```

## Deploying

This project is set up to deploy on Vercel with zero config. Connect the repo on vercel.com and it builds automatically using Vite's default build command.

## What I want to add next

- weekly history view
- sync across devices with a simple backend
- export data as CSV
