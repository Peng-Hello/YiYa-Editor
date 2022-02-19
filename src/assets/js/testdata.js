let datas = {
    "dataList": [
        [{
            "component": "inputbox",
            "savePart": "<div style=\"text-align: center;\"><span style=\"background-color: rgb(255 255 255 / var(--tw-bg-opacity));\"><font size=\"7\">欢迎使用 YiYa 编辑器 👏</font></span></div>"
        }],
        [{
            "component": "inputbox",
            "savePart": "<b><font size=\"4\">一. 简介&nbsp;</font></b><font size=\"4\"><b>👀</b></font>"
        }],
        [{
            "component": "inputbox",
            "savePart": "YiYa 编辑器是使用 Vite+Vue3+Tailwind 来构建的一款开源的编辑器。适用于模块化笔记，博客文章的撰写。它不同于传统的富文本编辑器。它的主要的好处在于支持拖拽（快速，灵活的布局），自定义组件（满足各种工作场景）。它的设计灵感主要来自于 Notion 。"
        }],
        [{
            "component": "inputbox",
            "savePart": ""
        }],
        [{
            "component": "inputbox",
            "savePart": "<b><font size=\"4\">二. 我们的优势&nbsp;</font></b><font size=\"4\"><b>✨</b></font>"
        }],
        [{
            "component": "ol",
            "savePart": "<div contenteditable=\"true\" class=\"outline-none h-full w-full\"><ol class=\"list-decimal\"><li>&nbsp;适配移动端！</li><li>以Json输出</li><li>好看的Banner</li><li>&nbsp;支持拖拽，实现高效的灵活的排版，提高工作效率。<br></li><li>&nbsp;支持自定义组件，满足各种工作场景</li><li>&nbsp;自由，个性化。通过配置文件更改快捷键，真正实现个性化。</li></ol></div>"
        }],
        [{
            "component": "inputbox",
            "savePart": ""
        }],
        [{
            "component": "inputbox",
            "savePart": "<b><font size=\"4\">三. 快速开始&nbsp;</font></b><font size=\"4\"><b>🏃</b></font>"
        }],
        [{
            "component": "inputbox",
            "savePart": "<b>3.1 基础功能的快捷键</b>"
        }],
        [{
            "component": "inputbox",
            "savePart": "1. 添加输入块 <b>快捷键</b>：' <b>shift+enter </b>'<div><br></div>"
        }, {
            "component": "inputbox",
            "savePart": "2.&nbsp;拖动输入块 <b>快捷键</b>：' <b>按住 alt 不放以开始拖动</b> '"
        }],
        [{
            "component": "inputbox",
            "savePart": "3.&nbsp;重点标注 快捷键如下<div><div><span style=\"background-color: yellow;\">标黄</span> <b>快捷键</b>： ' <b>alt+y</b> '</div><div><span style=\"background-color: deepskyblue;\">标蓝</span> <b>快捷键</b>： ' <b>alt+b</b> '</div><div><span style=\"background-color: orange;\">标橙</span> <b>快捷键</b>： ' <b>alt+o</b> '</div></div><div><br></div>"
        }, {
            "component": "inputbox",
            "savePart": "4.&nbsp;文字布局 快捷键如下<div><div>居左文字 <b>快捷键</b>：' <b>ctrl+j</b> '</div><div>居中文字 <b>快捷键</b> ：' <b>ctrl+k</b> '</div><div>居右文字 <b>快捷键</b>：' <b>ctrl+l</b> '</div></div>"
        }],
        [{
            "component": "inputbox",
            "savePart": "5.&nbsp;加粗选中 <b>快捷键</b>：' <b>ctrl+b</b> '"
        }, {
            "component": "inputbox",
            "savePart": "6.&nbsp;移除样式 <b>快捷键</b>：’ <b>shift+space</b> ‘ ( tip: 这个可以去除所画的标注 )"
        }],
        [{
            "component": "inputbox",
            "savePart": "7. <u>画线 </u><b>快捷键</b>：' <b>ctrl+u</b> '<div><br></div>"
        }, {
            "component": "inputbox",
            "savePart": "8. <strike>删除线</strike> <b>快捷键</b>：' <b>alt+d</b> '"
        }],
        [{
            "component": "inputbox",
            "savePart": "9. <span style=\"background-color: yellow;\">字体的选择 快捷键如下</span><div><font size=\"7\">7号字体 <b>快捷键</b>：' <b>alt+7</b> '</font></div><div><font size=\"6\">6号字体 <b>快捷键</b>：' <b>alt+6</b> '</font></div><div><font size=\"5\">5号字体 <b>快捷键</b>：' <b>alt+5</b>&nbsp;<span style=\"background-color: rgb(248 250 252 / var(--tw-bg-opacity));\">'</span></font></div><div><span style=\"background-color: rgb(248 250 252 / var(--tw-bg-opacity));\"><font size=\"4\">4号字体 <b>快捷键</b>：' <b>alt+4</b> '</font></span></div><div><span style=\"background-color: rgb(248 250 252 / var(--tw-bg-opacity));\">3号字体 <b>快捷键</b>：' <b>alt+3</b> '</span></div><div><span style=\"background-color: rgb(248 250 252 / var(--tw-bg-opacity));\"><font size=\"2\">2号子体 <b>快捷键</b>：' <b>alt+2</b> '</font></span></div><div><span style=\"background-color: rgb(248 250 252 / var(--tw-bg-opacity));\"><font size=\"1\">1号字体 <b>快捷键</b>：' <b>alt+1</b> '</font></span></div><div><span style=\"background-color: rgb(248 250 252 / var(--tw-bg-opacity));\"><font size=\"1\"><br></font></span></div>"
        }],
        [{
            "component": "inputbox",
            "savePart": "<b>3.2 使用命令加载自定义组件</b>"
        }],
        [{
            "component": "inputbox",
            "savePart": "说明：输入块不仅仅可以充当文字的载体，它还支持使用命令！<b>语法：' / '+' 你需要加载的组件名</b>（<span style=\"background-color: yellow;\">不必区分大小写</span>）'"
        }],
        [{
            "component": "inputbox",
            "savePart": "补充: 目前预制的组件很少（ 日后我也会去编写更多的组件的）"
        }],
        [{
            "component": "inputbox",
            "savePart": "1. 使用' <b>/ol</b> ' 加载 有序列表组件 ( Tip:<u> 输完命令按 ' shift+回车 ' 进行确认</u>)。 如："
        }],
        [{
            "component": "ol",
            "savePart": "<div contenteditable=\"true\" class=\"outline-none h-full w-full\"><ol class=\"list-decimal\"><li>&nbsp;Test 1</li><li>&nbsp;Test 2</li><li>&nbsp;Test 3</li></ol></div>"
        }],
        [{
            "component": "inputbox",
            "savePart": "2. \" 居中盒子 \"&nbsp; 主要用来居中图片，文字。命令：' <b>/interval</b> ' 演示：（Tip : 做这个组件主要是为了居中图片。如果要居中文字建议使用 ' ctrl+k '）"
        }],
        [{
            "component": "interval",
            "savePart": "<div class=\"w-full h-full flex justify-center\"><div id=\"box\" contenteditable=\"true\" class=\"outline-none h-full\" style=\"width: 586.5px;\"><span style=\"text-align: center;\">这里也可以把截图粘贴进来</span></div></div>"
        }],
        [{
            "component": "inputbox",
            "savePart": ""
        }],
        [{
            "component": "inputbox",
            "savePart": "<span style=\"background-color: rgb(255, 255, 255);\"><b><font size=\"4\">四 . 可能存在的问题&nbsp;</font></b></span><font size=\"4\"><b>🐞</b></font>"
        }],
        [{
            "component": "ol",
            "savePart": "<div contenteditable=\"true\" class=\"outline-none h-full w-full\"><ol class=\"list-decimal\"><li>可能有时候输入块，组件的宽度没有来得及更新。此时建议拖一下组件触发重新更新宽度。</li><li>组件少的可怜。对视频，图片上传，等等功能做的不还不够。（主要通过自定义组件来完成）</li><li>移动端可能有部分机型适配不好。</li><li>未知的 Bug。</li></ol></div>"
        }],
        [{
            "component": "inputbox",
            "savePart": ""
        }],
        [{
            "component": "inputbox",
            "savePart": "<b><font size=\"4\">五. 注意事项&nbsp;</font></b><font size=\"4\"><b>❤️</b></font>"
        }],
        [{
            "component": "inputbox",
            "savePart": "<div>1. 由于该项目比较新，在组件方面比较少。我相信随着时间的推移，组件会丰富起来的。这需要你我的共同努力。</div><div>2. 食用时，请仔细阅读 README 文档，避免在开发自定义组件时遇到重大错误。</div><div>3. 目前这项目还不够成熟，不可避免地会有挺多 Bug 的。如有发现可以 发个 issue 给我，在这里谢谢大家了！</div>"
        }],
        [{
            "component": "inputbox",
            "savePart": ""
        }],
        [{
            "component": "inputbox",
            "savePart": ""
        }],
        [{
            "component": "inputbox",
            "savePart": ""
        }],
        [{
            "component": "inputbox",
            "savePart": ""
        }]
    ]
}

export {
    datas
}