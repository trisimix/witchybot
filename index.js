// New to JavaScript? Check out this intro from Mineflayer:
//  https://github.com/PrismarineJS/mineflayer/blob/master/docs/tutorial.md#javascript-basics

// Full Mineflayer docs: https://mineflayer.prismarine.js.org/#/

const mineflayer = require('mineflayer')
const { pathfinder, Movements } = require('mineflayer-pathfinder')
const { GoalNear, GoalBlock, GoalGetToBlock, GoalLookAtBlock, GoalXZ, GoalY, GoalInvert, GoalFollow } = require('mineflayer-pathfinder').goals
const { Vec3 } = require('vec3');

/**
 * @param {mineflayer.Bot} bot - The Mineflayer bot
 */
function configureBot(bot) {

  // Configure the bot to have access to Mineflayer modules/plugins
  bot.loadPlugin(pathfinder)
  const mcData = require('minecraft-data')(bot.version)
  const defaultMove = new Movements(bot, mcData)

  bot.on('chat', async (username, message) => {
    try {
      if (username === bot.username) return
      bot.chat("This is what I heard in chat: " + message)
    } catch (err) {
      console.log(err)
    }
  })

}

exports.configureBot = configureBot