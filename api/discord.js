const os = require("dotenv");
const express = require("express");

os.config({
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_PUBLIC_KEY,
});

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const DISCORD_PUBLIC_KEY = process.env.DISCORD_PUBLIC_KEY;
