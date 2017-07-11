// these are the listed data points for the Model
var locations = [{
        title: "Cafe la Cerra",
        lat: 40.7450620,
        lng: -73.9782340,
        show: true,
        selected: false,
        venueid: "54a47225498e7bfcc04645bb"
    },
    {
        title: "Culture Espresso",
        lat: 40.7520940,
        lng: -73.9857350,
        show: true,
        selected: false,
        venueid: "4a72eeb8f964a52056db1fe3"
    },
    {
        title: "Andrews Coffee Shop",
        lat: 40.7516990,
        lng: -73.9896960,
        show: true,
        selected: false,
        venueid: "4bf5663994af2d7f15a93b72"
    },
    {
        title: "Martha Stewart Café",
        lat: 40.7515360,
        lng: -74.0064200,
        show: true,
        selected: false,
        venueid: "55019e1b498ee718d2c6ae4c"
    },
    {
        title: "A & A Coffee Shop",
        lat: 40.7410040,
        lng: -73.9927930,
        show: true,
        selected: false,
        venueid: "49ef508ff964a5209a681fe3"
    },
    {
        title: "The Coffee Shop",
        lat: 40.7365120,
        lng: -73.9910290,
        show: true,
        selected: false,
        venueid: "3fd66200f964a5204ee41ee3"
    },
    {
        title: "O Cafe",
        lat: 40.7357910,
        lng: -73.9977060,
        show: true,
        selected: false,
        venueid: "4d32037f5c2db60c8ddebd6c"
    }
];

// VIEW MODEL
function AppViewModel() {
    var self = this;

    this.arrayList = []; // The for loop here pushes the markers and information into the self.arrayList array
    locations.forEach(function(marker) {
        self.arrayList.push(new google.maps.Marker({
            position: {
                lat: marker.lat,
                lng: marker.lng
            },
            map: map,
            title: marker.title,
            show: ko.observable(marker.show),
            animation: google.maps.Animation.DROP,
            selected: ko.observable(marker.selected),
            venueid: marker.venueid
        }));
    });

    this.errorDisplay = ko.observable('');
    this.cafeAPI = function(listedMarkers) {
        $.ajax({
            url: "https://api.foursquare.com/v2/venues/" + listedMarkers.venueid + '?client_id=3RNIZPB2RW3LNXWJ54S0Q4Q4W5HYDQHBVCHGMGWL5DI2QPSA&client_secret=QRPWRPKLJ1AMCN25F55ZIZBAC2JPBXMOXQ50RXQ1VBTG0WZV&v=20170619',
            success: function(data) {
                // stores results to display results
                var jsonResult = data.response.venue;
                listedMarkers.price = jsonResult.price.message;
                listedMarkers.rating = jsonResult.rating;
                listedMarkers.contact = jsonResult.contact.formattedPhone;
                listedMarkers.address = jsonResult.location.address;
            },
            //alert if there is error in recievng json
            error: function(e) {
                self.errorDisplay("No data on this location oh no!");
            }
        });
    };

    this.toggleBounce = function(passedMapMarker) { // makes the marker bounce
        if (passedMapMarker.getAnimation() !== null) {
            passedMapMarker.setAnimation(null);
        } else {
            passedMapMarker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                passedMapMarker.setAnimation(null);
            }, 800);
        }
    };

    this.textInput = ko.observable('Type Here to find places');

    // calls every keydown from input box
    this.searchFilter = function() {
        var check = self.textInput().toLowerCase(); // converts inputed text to lowercase to make it non case sensitive
        var arg = self.arrayList;
        if (self.textInput().length === 0) {
            for (i = 0; i < self.arrayList.length; i++) {
                self.arrayList[i].show(true);
                self.arrayList[i].setVisible(true);
            }
        } else {
            for (i = 0; i < self.arrayList.length; i++) {
                if (arg[i].title.toLowerCase().match(check) !== null) {
                    arg[i].show(true);
                    arg[i].setVisible(true);
                } else {
                    arg[i].show(false);
                    arg[i].setVisible(false);
                }
            }
        }
        infowindow.close();
    };

    // hider is activated when the button is clicked, which hides all locations on the list
    this.hider = function() {
        $('li').hide('slow');
        if ($('li').css('display') === 'none') {
            $('li').show('fade');
        }
    };

    this.picked = function(spots) {
        price = function() { // finds all the price of the store location
            if (spots.price === "" || spots.price === undefined) {
                return "No data availible";
            } else {
                return "$$$: " + spots.price;
            }
        };

        totalRatings = function() { // finds all the ratings of the store location
            if (spots.rating === "" || spots.rating === undefined) {
                return ":( sorry but no ratings here yet....";
            } else {
                if (spots.rating > 8) {
                    return "Ratings: " + spots.rating + " (Totally Recommend)";
                } else {
                    return "Ratings: " + spots.rating;
                }
            }
        };

        contacts = function() { // finds all the contacts of the store location
            if (spots.contact === "" || spots.contact === undefined) {
                return "No contact availible :(";
            } else {
                return "Phone Number: " + spots.contact;
            }
        };

        address = function() { // finds the address of the store location
            if (spots.address === "" || spots.address === undefined) {
                return "404 address not here :(";
            } else {
                return "Address: " + spots.address;
            }
        };

        var fillInfowindow = "<h4>" + spots.title + "</h4>" + "<br>" + totalRatings() + "<br>" + price() + "<br>" + address() + "<br>" + contacts();
        infowindow.setContent(fillInfowindow);
        infowindow.open(map, spots);
        self.toggleBounce(spots);
    };

    self.arrayList.forEach(function(passedMarker) { // this passes each marker to get info from the API  (thanks for the help Karol!)
        self.cafeAPI(passedMarker);
        passedMarker.addListener('click', function() {
            self.picked(this);
        });
    });
}

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.7413549,
            lng: -73.9980244
        },
        zoom: 13
    });
    infowindow = new google.maps.InfoWindow();
    ko.applyBindings(new AppViewModel());
}

function errorDisplay(){
  alert("error on map!");
}
