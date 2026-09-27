/**
 * 挂起，使用await调用该函数即可
 * @param interval 挂起时间，单位：毫秒
 */
function sleep(interval: number): Promise<unknown>;

export default sleep;