/**
 * 工厂模式
   应用场景: 用来创建继承同一父类、实现同一接口的子类对象，由给定的类型参数创建具体的对象。
 */
enum HelloTypes {
    A,
    B
}
interface Hello {
    sayHello()
  }
  
  class A implements Hello {
    sayHello() {
      console.log('A');
    }
  }
  
  class B implements Hello {
    sayHello() {
      console.log('B');
    }
  }
  
  class HelloFactory {
    static list = new Map<HelloTypes, Hello>([
      [HelloTypes.A, new A()],
      [HelloTypes.B, new B()]
    ])
  
    static getHello(type: HelloTypes) {
      return HelloFactory.list.get(type)
    }
  }
  
  // test
  HelloFactory.getHello(HelloTypes.A).sayHello()
  HelloFactory.getHello(HelloTypes.B).sayHello()