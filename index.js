import setApi from "./common/setApi.js";
import listeningIp from "./common/listeningIp.js";
import { setConfig, queryConfig } from "./common/config.js"

// 主业务
try {
    const unchangedFu = ( currentIp ) => {
        console.log( "ip未变动：" + currentIp )
    }

    const changeFu = async ( currentIp ) => {
        console.log( "ip变动：" + currentIp )

        await setConfig( currentIp )

        const configFile = await queryConfig()

        if ( configFile.appConfig?.length, configFile ) {
            configFile.appConfig?.map( async ( item ) => {
                const data = await setApi( configFile.cookie, item.app_id, [ currentIp ], item._d2st )

                data.status === 200
                    ? console.log( item.app_id + "应用配置成功！" )
                    : console.log( item.app_id + "应用配置失败！" )

            } )
        } else {
            console.log( "请配置appConfig！" )
        }
    }

    listeningIp( changeFu, unchangedFu )
} catch ( e ) {
    console.log( "运行错误" )
    console.log( e )
}

