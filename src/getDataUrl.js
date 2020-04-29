/*
 * @Descripttion: 
 * @version: 
 * @Author: Anke Wang
 * @Date: 2020-04-28 19:15:53
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-04-28 19:20:48
 */

//https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date=freq_0&area=world
export const getFreUrl = () => {

    let freid = $('#fre').val();
    let frestr = ["freq_0","freq_0.001","freq_0.002","freq_0.003","freq_0.004","freq_0.005"]
    let furl = "https://bigd.big.ac.cn/ncov/rest/variation/haplotype/json?date="+frestr[freid]+"&area=world";
    //console.log(furl);
    return furl;
}