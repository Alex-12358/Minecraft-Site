import { EasyDonateApiClient } from '@scondic/easydonate-sdk'
import { Client as MCExplore } from 'mcexplore'

export default defineEventHandler(async () => {
  const client = new EasyDonateApiClient('ac82035a693c5d6447d8b7a326dbfb04')
  const mc = new MCExplore()

  const { response: servers } = await client.getAllServers()

  const serversWithStatus = await Promise.all(
    servers.map(async (srv) => {
      try {
        const address = srv.port ? `${srv.ip}:${srv.port}` : srv.ip

        // получаем онлайн и макс. игроков
        const online = await mc.serverInfo.getOnlineCount(address)
        const fullInfo = await mc.serverInfo.getServer(address)

        return {
          id: srv.id,
          shopId: srv.shop_id,
          name: srv.name,
          ip: srv.ip,
          port: srv.port,
          online: online ?? 0,
          maxPlayers: fullInfo?.players?.max ?? 0
        }
      } catch (err) {
        console.error(`Ошибка получения онлайна для ${srv.name}:`, err)
        return {
          id: srv.id,
          shopId: srv.shop_id,
          name: srv.name,
          ip: srv.ip,
          port: srv.port,
          online: 0,
          maxPlayers: 0
        }
      }
    })
  )

  return serversWithStatus
})
