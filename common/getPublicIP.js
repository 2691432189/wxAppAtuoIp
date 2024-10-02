export default async function () {
    try {
        const response = await fetch( 'https://ipinfo.io/json' );
        const data = await response.json();
        return data.ip
    } catch ( error ) {
        console.error( '获取公网 IP 时出错:', error );
        return ''
    }
}