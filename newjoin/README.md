newjoin
=======
重构优化代码
添加所见即所得编辑器
图片上传功能
favicon

issue&directions:
class applyform:报名申请表单
class contentText:部门简介内容文本，using字段是bool，如果后台有多个版本的介绍，那么using为true的将在前台显示，version可以让管理员填版本信息便于区分
submitHandler函数负责将用户的提交表单写入数据库，并取得各部门介绍显示在页面上。
如果要添加图片上传路径就加在contentText里，以前有图片压缩的代码的话很简单加点东西就好了。
