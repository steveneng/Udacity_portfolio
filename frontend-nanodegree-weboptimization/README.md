## Website Performance Optimization portfolio project

The purpose of this project is to optimize the web portfolio to enhance its performance. One of our objectives is to ensure that the frame rate would be at least 60fps by removing
jank from the code.

To set this file up locally and inspect it:

1) Click on the Clone or download button

2) Click Download Zip or copy the github link

2) Unzip the file or use the terminal and type in: git clone [pasted link]

3) Open index.html in Google Chrome browser

4)  When the file loads, right click on the page and click inspect or command+option+i (if you are using a mac)

5) Click the Timeline tab and check off the JS profile under Capture.

6) Click record and scroll up and down the page and change the pizza size.

7) Click record again to stop recording and view the results.

changes that were made:

* Pizzeria.jpg and other image files were compressed to make loading speeds quicker

* async attributes were assigned to external JS files (analytics.js and perfmatters.js)

* External CSS source calls have been relocated above </body>

* Dom access was reduced by assigning DOM call into a variable

* changed querySelectorAll to document.getElementsByClassName()

* changed array length into a variable

* declared elem as variable outside of forloop

* changed to document.getElementById() also changed window width to global variable

* change the number of pizza using a dynamic method by using inner.height

* changed dom selectors into variable outside of loops

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
