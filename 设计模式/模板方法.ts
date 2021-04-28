/**
 * 模板方法模式， 只需要使用继承就可以实现
 * 由两部分组成： 抽象父类 + 具体实现的子类
 * 通常在抽象父类中封装了子类的算法框架
 * 符合开放封闭的原则
 * 应用场景
    在一个方法里定义一个算法(业务逻辑)骨架，并将某些步骤推迟到子类中实现。模板方法模式可以让子类在不改变算法整体结构的情况下，重新定义算法中的某些步骤。
    复用 扩展
 */
    abstract class Drinks {
      firstStep() {
        console.log('烧开水')
      }
    
      abstract secondStep()
    
      thirdStep() {
        console.log('倒入杯子')
      }
    
      abstract fourthStep()
    
      drink() {
        this.firstStep()
        this.secondStep()
        this.thirdStep()
        this.fourthStep()
      }
    }
    
    class Tea extends Drinks {
      secondStep() {
        console.log('浸泡茶叶')
      }
    
      fourthStep() {
        console.log('加柠檬')
      }
    }
    
    class Coffee extends Drinks {
      secondStep() {
        console.log('冲泡咖啡')
      }
    
      fourthStep() {
        console.log('加糖')
      }
    }
    
    // test
    const tea = new Tea()
    tea.drink()
    const coffee = new Coffee()
    coffee.drink()