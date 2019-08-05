# What is that ?

It's a shitty custom made redux clone, created without looking at how redux works.

# Why ??

I was just messing around with React on some tiny PoCs, and I didn't wanted to use redux just to dipatch an 'addToAList' action...  
I've also done this a bit for the chellenge of course :D 

# How it Works ?

* You use it the same way you use redux. (/!\ redux map things to `this.props`, here it's mapped to `this.state` instead).
* You can dispatch **actions**, that use **reducers** to change **state** values. Same syntax.
* You can link global state values to one component private state, so it's updated automatically when this global linked state change (because of a dispatched action).  

> For more details, just look at the example code, where 2 super basic components just communicate via the state manager.  


> **EDIT**: I added a sample project using this lib, not so clean, but you can play with it within your browser :D : https://stackblitz.com/edit/react-eeqtxm?file=index.js

# Can I use it ?

Yes, but, I promise you don't want to :
* No tests, I'm sure you can break it in 2 sec
* Probably not efficient/optimized *(I would not try to add a lot of reducers and a lot of different components binded to states.)*
* I don't always know what I'm doing x), There is so much nested methods/class/functions, I have no Idea how it works, but it kinda... I use the good old secret method called *"ChangeThingsRandomlyAndPressF5TillThereIsNoMoreErrorInTheConsole"*. My favorite <3.

But there is maybe one pros :
* It weighs approxymately the same weight of this readme :)

# But I don't care, I want to use it anyway !

OK... That's up to you :|  

I don't made a npm package for that (fortunalty !).
So you'll just have to copy the `srsm2000.js` somewhere, and import it (look at the `examples/index.js`);

**/!\ The project is writter with ES6 Syntax, so your project must handle ES6 files /!\\**

# Contribute

If you want. Not sure it's useful, but I'll be happy :)