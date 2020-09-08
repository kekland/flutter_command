(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(2),i=n(6),o=(n(0),n(74)),r={id:"testing_commands",title:"Testing Commands",sidebar_label:"Testing Commands"},s={unversionedId:"testing_commands",id:"testing_commands",isDocsHomePage:!1,title:"Testing Commands",description:"Testing is an essential step in the software development cycle. Command uses ValueNotifiers internally and this makes testing commands straight forward. Traditional approaches such as StreamMatcher for asynchronous testing is not applicable. A ValueNotifier is essentially a ChangeNotifier whose changes can be listened to and verified. The approach we used internally is store these results in a List and then compare this against an expected List of values. Generally we will have a Command which is already functional and we write test against it to verify its functional aspects. In  case of widget testing it would be preferable to mock a command and test the corresponding UI elements independently. Lets see these two cases in the upcoming sections.",source:"@site/docs\\testing.md",permalink:"/flutter_command/docs/testing_commands",editUrl:"https://github.com/escamoteur/flutter_command/docs/testing.md",sidebar_label:"Testing Commands",sidebar:"someSidebar",previous:{title:"CommandBuilder Widget",permalink:"/flutter_command/docs/command_builder"}},l=[{value:"Testing Commands",id:"testing-commands",children:[{value:"Command to be tested",id:"command-to-be-tested",children:[]},{value:"Test changes in <code>value</code>",id:"test-changes-in-value",children:[]},{value:"Test Changes in <code>results</code>",id:"test-changes-in-results",children:[]}]},{value:"Mocking Commands",id:"mocking-commands",children:[]}],c={rightToc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Testing is an essential step in the software development cycle. ",Object(o.b)("inlineCode",{parentName:"p"},"Command")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"ValueNotifier"),"s internally and this makes testing commands straight forward. Traditional approaches such as ",Object(o.b)("inlineCode",{parentName:"p"},"StreamMatcher")," for asynchronous testing is not applicable. A ",Object(o.b)("inlineCode",{parentName:"p"},"ValueNotifier")," is essentially a ",Object(o.b)("inlineCode",{parentName:"p"},"ChangeNotifier")," whose changes can be listened to and verified. The approach we used internally is store these results in a ",Object(o.b)("inlineCode",{parentName:"p"},"List")," and then compare this against an expected ",Object(o.b)("inlineCode",{parentName:"p"},"List")," of values. Generally we will have a ",Object(o.b)("inlineCode",{parentName:"p"},"Command")," which is already functional and we write test against it to verify its functional aspects. In  case of widget testing it would be preferable to mock a command and test the corresponding UI elements independently. Lets see these two cases in the upcoming sections."),Object(o.b)("h2",{id:"testing-commands"},"Testing Commands"),Object(o.b)("h3",{id:"command-to-be-tested"},"Command to be tested"),Object(o.b)("p",null,"Let us assume you want to test an asynchronous command which accepts a name and returns a greeting message after 2 seconds. Following is trivial implementation of such a command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"Command greetingCommand =\n    Command.createAsync<String, String>((String name) async {\n  await Future.delayed(Duration(seconds: 2));\n  return 'Hello $name! Welcome.';\n}, 'Hello! Welcome.');\n")),Object(o.b)("h3",{id:"test-changes-in-value"},"Test changes in ",Object(o.b)("inlineCode",{parentName:"h3"},"value")),Object(o.b)("p",null,"As a simple scenario lets test what is exposed by the ",Object(o.b)("inlineCode",{parentName:"p"},"Command")," which by itself is a ",Object(o.b)("inlineCode",{parentName:"p"},"ValueNotifier")," and can be listened to changes in its ",Object(o.b)("inlineCode",{parentName:"p"},"value"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"test('Greeting Command returns correct messages', () async {\n    // A list that holds the greetings returned by the command.\n    List<String> greetings = [];\n\n    greetingCommand.addListener(() {\n      greetings.add(greetingCommand.value);\n    });\n\n    // Expect the initial Value is correct\n    expect(greetingCommand.value, 'Hello! Welcome.');\n\n    // Execute the command with the name Foo.\n    greetingCommand.execute('Alice');\n\n    // Wait for the command to execute.\n    await Future.delayed(Duration(seconds: 2));\n\n    // Expect the value has changed to greet Alice\n    expect(greetingCommand.value, 'Hello Alice! Welcome.');\n\n    // Execute the command again with a different name this time\n    // Since a Command is callable following is also a valid syntax.\n    greetingCommand('Bob');\n\n    // Wait for the command to execute.\n    await Future.delayed(Duration(seconds: 2));\n\n    // Expect the value has changed to greet Bob\n    expect(greetingCommand.value, 'Hello Bob! Welcome.');\n\n    // Verify the results.\n    expect(greetings, ['Hello Alice! Welcome.', 'Hello Bob! Welcome.']);\n  });\n")),Object(o.b)("p",null,"In the above it is important to note that the initial value is not part of the expected list because the ",Object(o.b)("inlineCode",{parentName:"p"},"value")," is set even before adding a listener and hence the value change will not be emitted. However a ",Object(o.b)("inlineCode",{parentName:"p"},"ValueListenable")," builder would still receive this initial value, because it internally sets this to its ",Object(o.b)("inlineCode",{parentName:"p"},"value"),"."),Object(o.b)("h3",{id:"test-changes-in-results"},"Test Changes in ",Object(o.b)("inlineCode",{parentName:"h3"},"results")),Object(o.b)("p",null,"Command exposes a combined state of its internal execution in an attribute called ",Object(o.b)("inlineCode",{parentName:"p"},"results")," in the form of ",Object(o.b)("inlineCode",{parentName:"p"},"CommandResult"),". This is much more granular compared to the above test. Here we receive additional information like whether the command is execution has any errors, the parameter if any passed to it and the result if any. Now if you check the expected results it contains more values. Since ",Object(o.b)("inlineCode",{parentName:"p"},"CommandResult")," overrides ",Object(o.b)("inlineCode",{parentName:"p"},"==")," it can be used directly in list comparison as shown in following snippet. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"test('Greeting Command returns correct results', () async {\n    // A list that holds the greetings returned by the command.\n    List<CommandResult> greetingResults = [];\n    greetingCommand.results.listen((CommandResult greetingResult, _) {\n      greetingResults.add(greetingResult);\n    });\n\n    // Execute the command with the name Foo.\n    greetingCommand.execute('Alice');\n\n    // Wait for the command to execute.\n    await Future.delayed(Duration(seconds: 2));\n\n    // Execute the command again with a different name this time\n    // Since a Command is callable following is also a valid syntax.\n    greetingCommand('Bob');\n\n    // Wait for the command to execute.\n    await Future.delayed(Duration(seconds: 2));\n\n    // Verify the results.\n    expect(greetingResults, [\n      CommandResult<String, String>('Alice', null, null, true),\n      CommandResult<String, String>('Alice', 'Hello Alice! Welcome.', null, false),\n      CommandResult<String, String>('Bob', null, null, true),\n      CommandResult<String, String>('Bob', 'Hello Bob! Welcome.', null, false),\n    ]);\n  });\n")),Object(o.b)("p",null,"However note that, if ",Object(o.b)("inlineCode",{parentName:"p"},"TParam")," the type of parameter, ",Object(o.b)("inlineCode",{parentName:"p"},"TResult")," the type of the result or the ",Object(o.b)("inlineCode",{parentName:"p"},"Exception")," thrown inside the command are not ",Object(o.b)("inlineCode",{parentName:"p"},"==")," comparable then a direct comparison of ",Object(o.b)("inlineCode",{parentName:"p"},"CommandResult")," would still fail. In such cases it is recommended to compare individual properties of these classes or override ",Object(o.b)("inlineCode",{parentName:"p"},"==")," for each of them."),Object(o.b)("h2",{id:"mocking-commands"},"Mocking Commands"),Object(o.b)("p",null,"Its not always possible to create all the ",Object(o.b)("inlineCode",{parentName:"p"},"Command"),"s upfront and proceed the UI development. In order to keep these process independent it would be necessary that the ",Object(o.b)("inlineCode",{parentName:"p"},"Commands")," be mockable. This also ensures that the Commands can evolve independently without affecting the UI widget tests as long as they stick to the required ",Object(o.b)("inlineCode",{parentName:"p"},"TParam"),", ",Object(o.b)("inlineCode",{parentName:"p"},"TResult")," signature. Hence ",Object(o.b)("inlineCode",{parentName:"p"},"flutter_command")," exposes a ",Object(o.b)("inlineCode",{parentName:"p"},"MockCommand")," class which provides utility functions to mock a ",Object(o.b)("inlineCode",{parentName:"p"},"Command"),"."),Object(o.b)("p",null,"Let us see an example which is similar to the above mentioned greeting command. We noticed that the ",Object(o.b)("inlineCode",{parentName:"p"},"results")," should notify results in the form of ",Object(o.b)("inlineCode",{parentName:"p"},"CommandResult"),". This behavior can be easily mocked as shown below. For this assume you have Text widget that shows this greeting message and we use a ",Object(o.b)("inlineCode",{parentName:"p"},"ValueListenableBuilder")," in this case. "),Object(o.b)("p",null,"Lets first create a ",Object(o.b)("inlineCode",{parentName:"p"},"MockCommand")," called ",Object(o.b)("inlineCode",{parentName:"p"},"mockGreetingCmd"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),'final mockGreetingCmd = MockCommand<String, String>(\n        "Initial Value",\n        ValueNotifier<bool>(true),\n        false,\n        false,\n        true,\n        true,\n        "MockingJay",\n      );      \n')),Object(o.b)("p",null,"Then set up the ",Object(o.b)("inlineCode",{parentName:"p"},"CommandResults")," to be notified in its ",Object(o.b)("inlineCode",{parentName:"p"},"results")," attribute using the ",Object(o.b)("inlineCode",{parentName:"p"},"queueResultsForNextExecuteCall")," function as shown below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"mockGreetingCmd.queueResultsForNextExecuteCall([\n    CommandResult<String, String>('Alice', null, null, true),\n    CommandResult<String, String>('Alice', 'Hello Alice! Welcome.', null, false),    \n]);\n")),Object(o.b)("p",null,"As a last step execute the mockCommand and test that the widget receives data correctly."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dart"}),"  testWidgets('Test Greeting text', (tester) async {\n    MockCommand<String, String> mockGreetingCmd = MockCommand<String, String>(\n      \"Initial Value\",\n      ValueNotifier<bool>(true),\n      false,\n      false,\n      true,\n      true,\n      \"MockingJay\",\n    );\n    mockGreetingCmd.queueResultsForNextExecuteCall([\n      CommandResult<String, String>('Alice', null, null, true),\n      CommandResult<String, String>(\n          'Alice', 'Hello Alice! Welcome.', null, false),\n    ]);\n    await tester.pumpWidget(\n      MaterialApp(\n        home: Center(\n          child: ValueListenableBuilder<CommandResult<String, String>>(\n            valueListenable: mockGreetingCmd.results,\n            builder: (context, cmdResult, _) {\n              print(cmdResult);\n              return Text(cmdResult.data);\n            },\n          ),\n        ),\n      ),\n    );\n    await tester.pumpAndSettle();\n    expect(find.byType(Text), findsOneWidget);\n    expect(find.widgetWithText(Center, 'Initial Value'), findsOneWidget);\n\n    // Execute the command and check again.\n    mockGreetingCmd.execute();\n\n    // verify the text is updated\n    await tester.pumpAndSettle();\n    expect(find.byType(Text), findsOneWidget);\n    expect(\n        find.widgetWithText(Center, 'Hello Alice! Welcome.'), findsOneWidget);\n  });\n")))}m.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),p=a,b=d["".concat(r,".").concat(p)]||d[p]||u[p]||o;return n?i.a.createElement(b,s(s({ref:t},c),{},{components:n})):i.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);