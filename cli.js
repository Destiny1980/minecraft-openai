#!/usr/bin/env node

import debug from "debug";
import bot from "./bot.js";
import { program } from "commander";

const log = debug("minecraft-openai.cli:log");

program
  .name("minecraft-openai")
  .description("Playing Minecraft with OpenAI (proof of concept)")
  
program.command('start')
  .description('start the bot')
  .option("--host <host>", "hostname of the minecraft server", "localhost")
  .option("--port <port>", "port of the minecraft server", 25565)
  .option("--username <username>", "username of the bot", "OpenAI")
  .action(async(options) => {
    await bot(options.host, options.port, "OpenAI").catch(console.error);
  });


program.parse();

