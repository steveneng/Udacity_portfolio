/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it("all URL are defined and not empty", function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined(); // loops through the object to see if each property is defined
                expect(allFeeds[i].url).not.toBe("");
            }
        });


        it("each feed in allFeeds has a name that is defined", function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(""); // checks if each name is defined
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menue", function() {

        it("Menu item is hidden by default", function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it("menue changes when menu icon is clicked", function() {

            $('.menu-icon-link').click(); // mimics a click
            expect($('body').hasClass('menu-hidden')).toBe(false); //if clicked, then the class is toggeled and should be false

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true); // after clicking again, it should be toggled to true

        });

    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('Contains a Single Entry', function(done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

    describe("New Feed Selection", function() {
        var currentFeed;
        var newFeed;

        beforeEach(function(done) {
            // load feed before testing the spec
            loadFeed(0, function() {
                currentFeed = $('.feed').text();
                loadFeed(1, function() {
                    newFeed = $('.feed').text();
                    done();
                });
            });
        });

        it('Changes in Feed', function() {
            console.log(currentFeed); // shows differences of the text
            console.log(newFeed);
            expect(currentFeed).not.toBe(newFeed); // check for old and new feed to be different
        });
    });
}());
