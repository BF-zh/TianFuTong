// pages/verified/index.ts
//@ts-ignore
import Dialog from '@vant/weapp/dialog/dialog';
//@ts-ignore
import Notify from '@vant/weapp/notify/notify';
//@ts-ignore
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"",
    userNameErrorMessage:'',
    idCard:"",
    idCordErrorMessage:'',
    allow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  handleShowProtocol({currentTarget}:WechatMiniprogram.BaseEvent){
    const {title} = currentTarget.dataset
    Dialog.alert({
      title,
      message: `一个期末作品，要什么${title},无脑同意即可`,
    }).then(() => {
      // on close
    })
  },
  handleSelectProtocol(){
    const allow = !this.data.allow
    this.setData({allow})
  },
  handleSubmit(){
    const {userName,idCard,allow,idCordErrorMessage,userNameErrorMessage} = this.data
    if(!userName) return Notify(userNameErrorMessage)
    if(!idCard) return Notify(idCordErrorMessage)
    if(!allow) return Toast("请先阅读并勾选协议")
  },
  handleInputBlur({currentTarget}:WechatMiniprogram.BaseEvent){
    const {error,key,errorKey} = currentTarget.dataset
    if(key in this.data){
      this.data[key as string]
    }
    this.setData({[errorKey]:error})
  },
  handleInputChange({currentTarget}:WechatMiniprogram.BaseEvent){
    const {key} = currentTarget.dataset
    this.setData({[key]:''})
  }
})