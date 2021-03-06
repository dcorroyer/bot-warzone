# COD Warzone Stats
Discord bot for calculating aggregate player stats for Call of Duty Warzone.

## Features
- Register players for combined stats
- Scheduled stats posting using cronjob syntax
- View single player stats
- Supports `[mode]` parameter to show stats for different game modes.
  - Battle Royale: `br`
  - Warzone Rumble: `rmbl`
  - Plunder: `plndr`
- Supports PlayStation Network (`psn`), Xbox Live (`xbl`) and Activision ID (`atvi`) platforms
- Supports `[time]` parameter to only show stats from specific times, e.g., last 8 hours (`8h`) or past 3 days (`3d`). Default value: `24h`
  - Hours: `h`
  - Days: `d`
  - Weeks: `w`
  - Months: `m`
- Supports random team splits into groups

## Guide
- [Invite](https://discordapp.com/oauth2/authorize?scope=bot&client_id=711383069160112128) the bot to your server.
- Send `!wz single <mode> <platform> <username> [time]` to fetch stats for a single user.
- Send `!wz stats <mode> [time]` to get stats for all registered users.
  - Register users using `!wz register <platform> <username>`
  - Unregister users using `!wz unregister <platform> <username>`
- For scheduling stats posting, send `!wz schedule '<cronjob>' 8h`. For example, `!wz schedule '30 19 * * *' 8h` posts stats everyday at 19:30 UTC.
- For team splits, send `!wz teams <people-per-team>` to get a random list of teams from registered users.

## Example
- Example response from the bot on Discord

<p align="center">
 <img src="https://github.com/Haroon96/cod-daily-stats/raw/gh-pages/img/response-example.png" alt="Example bot response">
</p>

## Issues
- For Activision ID, it may be necessary to suffix the hash for your profile (e.g., `username#12345`).
