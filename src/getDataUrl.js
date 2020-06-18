/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-04-28 19:15:53
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-06-18 14:15:51
 */
//https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=UTR-29753&area=Beijing&frequency=0
//https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=freq_0&area=world
export const getFreUrl = () => {

    let freid = $('#fre').val();
    let frestr = ["UTR-29753","UTR-29753","UTR-non"]
    let furl = "https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date="+frestr[freid]+"&area=Beijing&frequency=0";
    //console.log(furl);
    return furl;
}