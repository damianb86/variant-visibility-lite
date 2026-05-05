#!/usr/bin/env node

import { spawn } from "node:child_process";

const port = process.env.PORT || "3000";

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      env: process.env,
      shell: false,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code, signal) => {
      if (signal) {
        reject(new Error(`${command} ${args.join(" ")} stopped with ${signal}`));
        return;
      }

      if (code === 0) {
        resolve();
        return;
      }

      const error = new Error(
        `${command} ${args.join(" ")} failed with exit code ${code}`,
      );
      error.exitCode = code || 1;
      reject(error);
    });
  });
}

async function main() {
  await run("npx", ["prisma", "migrate", "deploy"]);

  const server = spawn(
    "npx",
    [
      "react-router",
      "dev",
      "--host",
      "127.0.0.1",
      "--port",
      port,
      "--strictPort",
    ],
    {
      env: process.env,
      shell: false,
      stdio: "inherit",
    },
  );

  const stop = (signal) => {
    if (!server.killed) {
      server.kill(signal);
    }
  };

  process.on("SIGINT", () => stop("SIGINT"));
  process.on("SIGTERM", () => stop("SIGTERM"));

  server.on("error", (error) => {
    console.error(error);
    process.exit(1);
  });

  server.on("exit", (code, signal) => {
    if (signal) {
      console.error(`react-router dev stopped with ${signal}`);
      process.exit(1);
    }

    process.exit(code || 0);
  });
}

main().catch((error) => {
  console.error(error.message);
  process.exit(error.exitCode || 1);
});
