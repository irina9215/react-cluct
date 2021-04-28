/**
 * 抽象工厂模式
   应用场景: 继承同一父类、实现同一接口的子类对象，由给定的多个类型参数创建具体的对象。
 */
enum Type {
    A,
    B
}
enum Occupation {
    TEACHER,
    STUDENT
}
interface Hello {
    sayHello()
}
class TA implements Hello {
    sayHello() {
        console.log('teacher A saying hello')
    }
}
class TB implements Hello {
    sayHello() {
        console.log('teacher B saying hello')
    }
}
class SA implements Hello {
    sayHello() {
        console.log('Student A saying hello')
    }
}
class SB implements Hello {
    sayHello() {
        console.log('Student B saying hello')
    }
}
class AFactory {
    static list = new Map<Occupation, Hello>([
        [Occupation.TEACHER, new TA()],
        [Occupation.STUDENT, new SA()],
    ])
    static getHello(occupation: Occupation) {
        return AFactory.list.get(occupation)
    }
}
class BFactory {
    static list = new Map<Occupation, Hello>([
        [Occupation.TEACHER, new TB()],
        [Occupation.STUDENT, new SB()],
    ])
    static getHello(occupation: Occupation) {
        return BFactory.list.get(occupation)
    }
}
class HelloFactoryAb {
    static list = new Map<Type, any> ([
        [Type.A, new AFactory()],
        [Type.B, new BFactory()],
    ])
    static getType(type: Type) {
        return HelloFactoryAb.list.get(type)
    }
}
// test
HelloFactoryAb.getType(Type.A).getHello(Occupation.TEACHER).sayHello()
HelloFactoryAb.getType(Type.A).getHello(Occupation.STUDENT).sayHello()
HelloFactoryAb.getType(Type.B).getHello(Occupation.TEACHER).sayHello()
HelloFactoryAb.getType(Type.B).getHello(Occupation.STUDENT).sayHello()