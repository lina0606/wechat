Page({
  //页面跳转
  onTap:function(){
    //wx.redirectTo平级间的页面跳转，wx.navigateTo父子间的跳转，最多5个页面  
    wx.switchTab({
      url: '../post/post'
    })
  }
})