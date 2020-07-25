const { http } = require("../../utils/http.js")
const { app_id, app_secret } = getApp().globalData
Page({
  data: {
  },
  onShow(){},
  login(event) {
    let encrypted_data = event.detail.encryptedData
    let iv = event.detail.iv
    console.log(event.detail.iv)
  },
  wxLogin(encrypted_data,iv){
    wx.login({
      success(res){
         this.loginMe(res.code,iv,encrypted_data)
      }
    })
  },
  loginMe(code,iv,encrypted_data){
    http.post(`/sign_in/mini_program_user`, {
      code,
      iv,
      eencrypted_data,
      app_id,
      app_secret,
    })
    .then((response)=>{
      this.saveMessage(response)
      wx.reLaunch({
        url: '/pages/punch/punch',
      })
    })
  },
  saveMessage(reponse){
    wx.setStorageSync('myhome', response.data.detail)
    wx.setStorageSync('X-token', response.header["X-token"])
  } 
})