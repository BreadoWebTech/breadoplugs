import { logger } from "@vendetta";

import { registerCommand } from "@vendetta/commands";

let quoteCMD = [];

const qoute = async function () {

  const response = await fetch (`https://api.quotable.io/quotes/random`);

  const resp = await response.json();

  return resp["0"];

}

export default {

  onLoad: () => {

    try {

      quoteCMD.push(

        registerCommand({

          name: "quote",

          displayName: "quote",

          description: "generates a quote.",

          displayDescription: "generates a quote",

          type: 1,

          applicationId: -1,

          inputType: 1,

          execute: async () => { return { content: await qoute() }}

        })

      );

    } catch (err) {

      logger.log(err);

      return { content: "Error. Check the logs and contact Breado#5112 on Discord. " };

    }

  },

};

export const onUnload = () => {

  for (const unregisterCommands of commands) unregisterCommands();

};

