# Discord Self-Bot Message Monitor

> **Warning:**  
> Using self-bots is against [Discord's Terms of Service](https://discord.com/terms) and **may result in your account being permanently banned**. Use at your own risk.

A simple Discord self-bot that forwards messages from a specific user across all servers to another user.

## Setup Instructions

1. **Initialize your project:**
   ```bash
   npm init -y
   ```

2. **Install dependencies:**
   ```bash
   npm install colors discord.js-selfbot-v13 dotenv
   ```

3. **Configure your `.env` file:**
   Create a `.env` file in the project root with the following variables:
   ```
   DISCORD_ID=the_user_id_to_monitor
   LISTENER_ID=the_user_id_to_receive_messages
   TOKEN=your_discord_account_token
   ```

   - `DISCORD_ID`: The user ID you want to monitor.
   - `LISTENER_ID`: The user ID that will receive the forwarded messages.
   - `TOKEN`: Your Discord account token (the account that will run the self-bot).
