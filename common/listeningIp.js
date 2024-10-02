import config from "../config/config.json" assert { type: 'json' }
import getPublicIP from "./getPublicIP.js"

import { queryConfig } from "./config.js"

export default function ( changeFu, unchangedFu, ) {
    const contrastFu = async () => {
        const currentIp = await getPublicIP()
        const configFile = await queryConfig()

        currentIp === configFile.initIp
            ? unchangedFu( currentIp )
            : changeFu( currentIp )
    }



    contrastFu()

    setInterval( () => {
        contrastFu()
    }, config.listenTime * 1000 )


}


