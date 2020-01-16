import { mtop } from '@ali/kobex-fetch'
import { getSystemInfo } from "@ali/kobex-util";

Page({
  data: {
    list: [
      {
        text: 'aaa',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579183678387&di=8fc994233e222dccf735314294c37335&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F339689907.jpeg',
      },
      {
        text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579183853022&di=b14ea4ef1c56274ac85ef30e99c40d08&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fgamezone%2Fpics%2Fhv1%2F98%2F158%2F2214%2F144005738.jpeg',
      },
      {
        text: 'cccccccccccccccccccccccccccccccccccccccccccccccccccc',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579183753263&di=d4fe3bd8e95a93eb5085d22e309affd6&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2Fupload%2F20160223%2Fjk11chuy0fsjpg.jpg',
      },
      {
        text: 'ddddddd',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579183776338&di=1f69635ef3f96841737c76b3e3b9d5fb&imgtype=0&src=http%3A%2F%2Fcrawl.nosdn.127.net%2F969becbdd8e4d860e20a78eb3aca8604.jpg',
      },
      {
        text: 'eeeeeeeeeeeeeeeeeeeeeeee',
        image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=801157670,2699076291&fm=26&gp=0.jpg',
      },
      {
        text: 'ffffffffffffff',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579183736599&di=11484a8d80aa9280efd4447f60e4f52d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F07%2F20171107094330_23n4t.jpeg',
      }
    ],
    list1: [],
    list2: [],
    leftH: 0,
    rightH: 0,
  },
  onLoad(query) {
    console.log('hhhhhhhhhhh')
    let that = this
    const list = this.data.list
    const sysInfo = getSystemInfo()
    const ratio = 750 / sysInfo.screenWidth
    const width = (sysInfo.screenWidth * 0.4 - 40) / ratio
    let leftH = 0
    let rightH = 0
    let list1 = []
    let list2 = []
    for (const item of list) {
      console.log(item.image)
      this.getImageInfo(item.image).then(res => {
        // console.log(res)
        const imgWidth = res.width
        const imgHeight = res.height
        const cellheight = width / imgWidth * imgHeight + 75/ratio
        if (leftH <= rightH) {
          list1.push(item)
          leftH += cellheight
          that.setData({
            list1
          })
          console.log(that.data.list1)
        } else {
          list2.push(item)
          rightH += cellheight
          that.setData({
            list2
          })
          console.log(that.data.list2)
        }
      })
    }
  },
  getImageInfo(src) {
    return new Promise(function (resolve, reject) {
      my.getImageInfo({
        src,
        success(res) {
          resolve(res)
        },
        fail(error) {
          console.log(error)
          reject(error)
        }
      })
    })
  }
})
