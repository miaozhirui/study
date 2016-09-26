#git 常用的命令

	1. git log --oneline --graph查看历史记录
	2. git reset --hard hash
	3. git checkout -b dev 检出并切换到dev分支
		git branch dev 创建dev分支
		git checkout dev 切换到dev分支
	4. git commit -a -m 'commit' 自动添加并commit
	5. git merge dev 把dev分支合并到当前的分支
	6. git branch -d dev 删除dev分支
	7. git branch 查看分支
	8. git log --oneline --graph --decorate --all 显示记录的线
			--oneline 显示短日志
			--graph 显示线
			--decorate 显示当前头指针在哪个位置
			--all 显示所有分支的历史
	9. git reset --hard HEAD 用当前分支的最新提交(最新历史提交)，覆盖工作区和暂存区
		这个命令要慎用，一把小心就会把工作区和暂存区的内容给干掉了
	10. git cherry-pick 4f71d64(commitId)合并指定的提交 (可以把有效的commit合并过去)
	11. git rebase 变基
	12. git remote add origin git@github.com:zhufengnodejs/gitdemo.git为本地仓库添加远程仓库
	13. git remote -v 显示远程仓库详细信息
	14. git remote remove deploy
	14. git fetch origin dev //把远程的分支拉倒本地来
	15. git branch -b dev origin/dev 基于远程origin/dev分支建立本地dev分支(要把远程的这个分支拉下来)
	16. git ls-files查看暂存区有哪些内容
	17. git --bare init 初始化一个裸库

## no-ff
	```
	git checkout -b dev
    git status
    ls
    cat index.js
    echo --no-ff >> index.js
    cat index.js
    git commit -a -m 'add --no-ff'
    git checkout master
    git merge --no-ff -m 'merge with no-ff' dev;
    git log --oneline --graph

	```

##隐藏工作台
	git stash
	git stash pop
	git stash apply 回复后，但是stash 内容不删除

##什么是标签
	ps: 可以创建标签，切换到这个标签，基于这个标签新建个分支
	git 的标签相当于某个版本库的快照，其实它就是指向某个提交的commit的指针
	git tag v1.0 在当前的分支最新提交打个标签，其实就是指向当前commit
	git tag v1.0 2259a40 指定tag打在某个具体的commit id上面
	git show v1.0 查看某个标签具体指向某个commit
	git tag -d v1.0删除这个标签
	git push origin v1.0向远处服务器推送标签
	git push origin --tags 向远处服务器推送所有的标签
	git tag -a v0.8 -m '标签说明' beebf73(commitId)
		-a 指定标签名
		-m 指定说明文字

	git checkout v0.9 切换到某个具体的标签(这个时候HEAD指向的是commitId,不是某个具体的分支(detached HEAD); 这有个问题，如果在这个commit基础之上再提交代码的话，第二天如果想找回最新的commit,除非记住那个时候提交的commitId，不然是找不回来的，这样就很不方便。)
		解决办法，在当前的commitId上面执行git checkout -b <new-branch-name>;其实就是基于当前的commitId 新建一个分支，后期可以通过切换分支的方式找回代码

##git rebase
	ps: 有的时候我们在master分支开了新分支，然后通过git merge合并的时候；会出现合并的分叉,如果让它看起来就像一条线呢，我们可以通过git rebase功能
	1. git checkout -b mybranch
	2. cd mybranch 
	3. echo 1 >> 1
	4. git commit -a -m 'add 1'
	5. echo 2 >> 1
	6. git commit -a -m 'add 2'
	7. git checkout master
	8. echo 3 >> 1
	9. git commit -a -m 'add 3'

	开始合并
	10. git checkout dev
	11. git rebbase master (取消掉dev的commit并且把dev指向master最新提交)
	12. 可能会有冲突，这个时候解决冲突，
	13. git add .
	14. git rebase --continue
	15. git rebase --abort

##git 配置有三个级别
	1.当前仓库级别
		git config --local
	2.当前用户级别
		文件位于~/.gitignore
		git config --global user.name
	3.系统，级别最低
		git config --system

##gitignore的配置示例
	node_modules/
	.[oa]任何以o和a结尾的而文件
	.js以js结尾的文件
	!test.js 除了test.js都可以忽略
	mo/ 以mo结尾文件夹
	.idea

	
































































	
