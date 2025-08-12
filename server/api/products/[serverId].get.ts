import { EasyDonateApiClient } from '@scondic/easydonate-sdk'

const client = new EasyDonateApiClient("ac82035a693c5d6447d8b7a326dbfb04")

export default defineEventHandler(async (event) => {
  const serverId = Number(getRouterParam(event, 'serverId'))
  const res = await client.getAllProducts(serverId)
  return res.response // ✅ чистый массив товаров
})
