**使用说明**
1、在Cocos Creator中， 构建发布->发布平台选择“微信小游戏”->勾选最下面“生成开放数据域工程模版”

2、在第1步的基础上编译出目标工程，会发现多了一个openDataContext目录.

3、将本目录中的wx-sub-project文件夹中的文件拷贝到openDataContext目录下，不用做修改

4、然后在微信开发者工具中运行，就可以看到排行榜了，关注日志输出问题，是否正常。


Main.scene场景中的OpenContext节点，是开放域的入口，可以在这里OpenContext.ts添加其他逻辑。节点上 的SubContextView可以设置开放域大小和FPS
