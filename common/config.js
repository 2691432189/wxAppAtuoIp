import fs from 'fs/promises';
import path from 'path';

const currentFilePath = path.resolve() + "/config/config.json"

export async function setConfig(initIp) {
    try {
        const data = await fs.readFile(currentFilePath, 'utf8');
        const config = JSON.parse(data);
        config.initIp = initIp;

        await fs.writeFile(currentFilePath, JSON.stringify(config, null, 2), 'utf8');
        console.log('文件已成功更新！');
    } catch (error) {
        console.error('处理配置文件时出错:', error);
    }
}

export async function queryConfig() {
    try {
        const data = await fs.readFile(currentFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return null
    }
}