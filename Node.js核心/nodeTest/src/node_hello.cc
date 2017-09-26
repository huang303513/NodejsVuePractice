#include <node.h>
#include <node_hello.h>
#include <v8.h>

namespace node {
using namespace v8;
	// 实现 定义的方法
	Handle<Value> SayHello(const Arguments& args) {
		HandleScope scope;
		return scope.Close(String::New("Hello world!"));
	}
	// 给传入的目 对象 加sayHello方法 
	void Init_Hello(Handle<Object> target) {
		target->Set(String::NewSymbol("sayHello"), FunctionTemplate::New(SayHello)->GetFunction()); 
	}

}
// 调用NODE_MODULE()将注 方法定义 内存中 
NODE_MODULE(node_hello, node::Init_Hello)