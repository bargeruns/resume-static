# seanbrage.com

This is my personal resume and portfolio. It's written in plain, timeless web technologies. I'm a huge fan of modern front-end tools and frameworks, but am also a big believer in selecting the right tools for the right job. I had a few goals in mind when I started work on the site:

 - **Mobile first, not just mobile-friendly**. When I was originally learning web development, the prevailing idea was "make it good, then make it mobile". I decided to try and un-learn some habits, and challenged myself to target phone screens first, and then modify as needed to adapt to larger displays.
 - **Target 2G**. Sure, just about everyone these days has a blazing-fast internet connection, and LTE connectivity in the US has become pretty ubiquitous. But I wanted to see if I could create something that was simple enough, effective enough, and small enough to work just as well for someone on a 2G connection.
 - **Minify, minify, minify**. I didn't have a _ton_ of experience doing minification for the web, but since [Gulp.js](http://gulpjs.com) _is_ one of my favorite tools, I put in the work to minify all of the things. I'm pleased with the results, and if you pull up my site on your phone, you will be, too.
 - **Simple, above all else.** This site does not use jQuery. Or a front-end framework, or a routing library. With the exception of [Bulma](https://bulma.io) to help make everything pretty, the site doesn't need anything external to itself to run on your phone. By forcing myself to simplify at any cost, I was also able to learn some new skills and unlearn some bad habits.

All in all, I'm pleased with how the site turned out. In a few hours I was able to make something that looks good, loads quickly on a wide range of devices and connections, and doesn't [kill itself with cleverness](http://read.humanjavascript.com/ch03-code-for-humans.html).

## Under the Hood

The site itself is a single HTML page, with some JS determining what to display and when. I used [Sass](http://sass-lang.com) to build my stylesheet, [Babel](https://babeljs.io) to make my JavaScript backwards-compatible, and [Gulp.js](http://gulpjs.com) to process and minify everything to get it ready for deployment on Firebase.

## FAQ

  - **Why didn't you use [FRAMEWORK]? Everyone who's anyone is using [FRAMEWORK]!**
    Really, it came down to the "right tools for the right job" discussion. And by discussion, I mean me in my own head but you get the idea. I thought about using EmberJS or React (I even have a few unused prototypes of this site written in both Ember and React). But using a full-framework like Ember felt a bit like swatting a fly with a Howitzer. And while I love React (I mean, I _looooooove_ React), it felt like it would detract from my goals of being simple and mobile-first.
  - **Why no jQuery?** `JavaScript !== jQuery`. As I worked, I kept running into problems that I realized _I didn't know how to solve without jQuery_. It was going to be impossible to achieve my goals if I couldn't learn how to use the DOM APIs to get things done using plain JavaScript. I ended up having lots of fun, learning more, and meeting my goals by not relying on jQuery.
  - **Your site is boring. Isn't there _anything_ cool or interesting going on here?** Actually, I am rather proud of what I thought was a cool solution for "front-end routing". Check out the un-minified `index.js` to see what I came up with. Spoiler alert - HTML5 data attributes are **the best**.