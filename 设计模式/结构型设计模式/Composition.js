const Folder = function (folder) {
    this.folder = folder
    this.list = []
}
Folder.prototype.add = function(resource) {
    this.list.push(resource)
}
Folder.prototype.scan = function() {
    console.log('开始扫描', this.folder)
    for (let index = 0,folderItem; folderItem = this.list[index++];) {
        folderItem.scan()
    }
}
const File = function (file) {
    this.file = file
}
File.prototype.add = function () {
    throw Error('文件下不能添加其他文件夹或者文件')
}
File.prototype.scan = function () {
    console.log('开始扫描文件', this.file)
}
const folder = new Folder('root');
const folder2 = new Folder('js')
const folder3 = new Folder('song')

const file1 = new File('深入React技术栈.pdf')
const file2 = new File('JavaScript权威指南.pdf')
const file3 = new File('小王子.mp3')

folder2.add(file1)
folder2.add(file2)

folder3.add(file3)

folder.add(folder2)
folder.add(folder3)
