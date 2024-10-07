import { queryConfig } from "./config.js"

export default async function ( cookie, appId, ipList, d2st ) {
    const configFile = await queryConfig()
    let body = `app_id=${ appId }`

    ipList?.map( item => body += `&ipList%5B%5D=${ item }` )

    return fetch( "https://work.weixin.qq.com/wework_admin/apps/saveIpConfig?lang=zh_CN&f=json&ajax=1&timeZoneInfo%5Bzone_offset%5D=-8&random=0.1851843954966843", {
        headers: {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": cookie,
            "Referer": "https://work.weixin.qq.com/wework_admin/frame",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": body,
        "method": "POST"
    } )
}



