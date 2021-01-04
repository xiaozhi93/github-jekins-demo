// 拓展vue-service-cli部署指令
/** @type { import('@vue/cli-service').ServicePlugin } */
module.exports = (api) => {
  api.registerCommand(
    'deploy',
    {
      description: 'deploy to server by ssh',
      usage: 'vue-cli-service deploy',

    },
    () => {
      console.log(`👋  Hello`)
    }
  )
}