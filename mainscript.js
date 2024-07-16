//var marine_animal_locations = {
//    'Clams': {'latitude': 38.0, 'longitude': -122.0}, //# Example: San Francisco Bay Area
//    'Corals': {'latitude': 24.5, 'longitude': -80.0}, //# Example: Florida Keys
//    'Crabs': {'latitude': 38.3, 'longitude': 27.1}, //# Example: Aegean Sea
//    'Dolphin': {'latitude': 25.0, 'longitude': -77.0},// # Example: Bahamas
//    'Eel': {'latitude': 34.3, 'longitude': 135.8}, //# Example: Coastal Japan
//    'Fish': {'latitude': -14.2, 'longitude': -170.7},// # Example: American Samoa
//    'Jelly Fish': {'latitude': 36.5, 'longitude': 137.5}, //# Example: Toyama Bay, Japan
//    'Lobster': {'latitude': 44.1, 'longitude': -68.1}, //# Example: Maine, USA
//    'Nudibranchs': {'latitude': 33.7, 'longitude': 118.3}, //# Example: Catalina Island, USA
//    'Octopus': {'latitude': 36.8, 'longitude': 30.5}, //# Example: Mediterranean Sea
//    'Otter': {'latitude': 36.6, 'longitude': -121.9}, //# Example: Monterey Bay, USA
//    'Penguin': {'latitude': -64.8, 'longitude': -64.0}, //# Example: Antarctic Peninsula
//    'Puffers': {'latitude': 35.3, 'longitude': 129.0}, //# Example: East Sea, Korea
//    'Sea Rays': {'latitude': 13.4, 'longitude': 144.7}, //# Example: Guam
//    'Sea Urchins': {'latitude': -42.6, 'longitude': 173.0},// # Example: Kaikoura, New Zealand
//    'Seahorse': {'latitude': 29.3, 'longitude': 48.1}, //# Example: Persian Gulf
//    'Seal': {'latitude': 55.5, 'longitude': -1.6}, //# Example: Northumberland, UK
//    'Sharks': {'latitude': -30.5, 'longitude': 151.7}, //# Example: Great Barrier Reef, Australia
//    'Shrimp': {'latitude': 16.8, 'longitude': -88.9}, //# Example: Belize
//    'Squid': {'latitude': 42.0, 'longitude': 143.0}, //# Example: Hokkaido, Japan
//    'Starfish': {'latitude': -33.9, 'longitude': 18.4},// # Example: Cape Town, South Africa
//    'Turtle_Tortoise': {'latitude': 21.9, 'longitude': -87.5},// # Example: Yucatán Peninsula, Mexico
//    'Whale': {'latitude': 59.9, 'longitude': -111.5}, //# Example: Northern Canada
//}

var marine_animal_locations = {
    'Clams': {
        'name': 'San Francisco Bay Area',
        'latitude': 38.0,
        'longitude': -122.0
    },
    'Corals': {
        'name': 'Florida Keys',
        'latitude': 24.5,
        'longitude': -80.0
    },
    'Crabs': {
        'name': 'Aegean Sea',
        'latitude': 38.3,
        'longitude': 27.1
    },
    'Dolphin': {
        'name': 'Bahamas',
        'latitude': 25.0,
        'longitude': -77.0
    },
    'Eel': {
        'name': 'Coastal Japan',
        'latitude': 34.3,
        'longitude': 135.8
    },
    'Fish': {
        'name': 'American Samoa',
        'latitude': -14.2,
        'longitude': -170.7
    },
    'Jelly Fish': {
        'name': 'Toyama Bay, Japan',
        'latitude': 36.5,
        'longitude': 137.5
    },
    'Lobster': {
        'name': 'Maine, USA',
        'latitude': 44.1,
        'longitude': -68.1
    },
    'Nudibranchs': {
        'name': 'Catalina Island, USA',
        'latitude': 33.7,
        'longitude': 118.3
    },
    'Octopus': {
        'name': 'Mediterranean Sea',
        'latitude': 36.8,
        'longitude': 30.5
    },
    'Otter': {
        'name': 'Monterey Bay, USA',
        'latitude': 36.6,
        'longitude': -121.9
    },
    'Penguin': {
        'name': 'Antarctic Peninsula',
        'latitude': -64.8,
        'longitude': -64.0
    },
    'Puffers': {
        'name': 'East Sea, Korea',
        'latitude': 35.3,
        'longitude': 129.0
    },
    'Sea Rays': {
        'name': 'Guam',
        'latitude': 13.4,
        'longitude': 144.7
    },
    'Sea Urchins': {
        'name': 'Kaikoura, New Zealand',
        'latitude': -42.6,
        'longitude': 173.0
    },
    'Seahorse': {
        'name': 'Persian Gulf',
        'latitude': 29.3,
        'longitude': 48.1
    },
    'Seal': {
        'name': 'Northumberland, UK',
        'latitude': 55.5,
        'longitude': -1.6
    },
    'Sharks': {
        'name': 'Great Barrier Reef, Australia',
        'latitude': -30.5,
        'longitude': 151.7
    },
    'Shrimp': {
        'name': 'Belize',
        'latitude': 16.8,
        'longitude': -88.9
    },
    'Squid': {
        'name': 'Hokkaido, Japan',
        'latitude': 42.0,
        'longitude': 143.0
    },
    'Starfish': {    'name': 'Cape Town, South Africa',
    'latitude': -33.9,
    'longitude': 18.4
},
'Turtle_Tortoise': {
    'name': 'Yucatán Peninsula, Mexico',
    'latitude': 21.9,
    'longitude': -87.5
},
'Whale': {
    'name': 'Northern Canada',
    'latitude': 59.9,
    'longitude': -111.5
}
}



var marineSpeciesDescriptions = {
    'Clams': [
        "Clams are a type of marine bivalve mollusk, found in both freshwater and marine environments.",
        "They are encased in a hinged shell and are filter feeders, consuming plankton and other small organisms.",
        "Clams play an important role in the aquatic food chain and are indicators of environmental health.",
        "They are also valued as a food source, with a global market for both wild-caught and farmed clams.",
        "Overharvesting and pollution are significant threats to clam populations in various regions."
    ],
    'Corals': [
        "Corals are marine invertebrates within the class Anthozoa of the phylum Cnidaria.",
        "They typically live in compact colonies of many identical individual polyps.",
        "Corals secrete calcium carbonate to form a hard skeleton, which forms coral reefs.",
        "Reefs are important marine ecosystems, providing habitat for a diverse range of species.",
        "Coral reefs are under threat from climate change, ocean acidification, pollution, and destructive fishing practices."
    ],
    'Crabs': [
        "Crabs are decapod crustaceans of the infraorder Brachyura, known for their short projecting tail and two large claws.",
        "They are found in all the world's oceans, in fresh water, and on land.",
        "Crabs are omnivores, feeding on algae, plankton, detritus, and other small organisms.",
        "They play a significant role in the marine ecosystem as both predator and prey.",
        "Crabs are also a popular seafood, but overfishing and habitat destruction pose threats to certain species."
    ],
    'Dolphin': [
        "Dolphins are highly intelligent marine mammals and are part of the family of toothed whales that includes orcas and pilot whales.",
        "They are known for their playful behavior, making them popular in human culture.",
        "Dolphins are carnivores, mostly eating fish and squid.",
        "Dolphin coloration varies, but they are generally gray in color with darker backs and lighter bellies.",
        "They are well known for their agility and playful behavior, making them a favorite of wildlife watchers."
    ],
    'Eel': [
        "Eels are elongated fish, ranging in length from 5 centimeters to 4 meters.",
        "Their snakelike bodies are adapted to burrowing in sand, mud, and among rocks.",
        "Most eels live in the shallow waters of the ocean and burrow into sand, mud, or amongst rocks.",
        "Eels are an important source of food for humans and are also popular in home aquariums.",
        "Some species of eel are known for their remarkable migrations, traveling large distances to breed."
    ],
    'Fish': [
        "Fish are gill-bearing aquatic craniate animals that lack limbs with digits.",
        "They form a sister group to the tunicates, together forming the olfactores."],
    'Jelly Fish' : [
        "1. Jellyfish are free-swimming marine animals belonging to the phylum Cnidaria, characterized by their gelatinous, umbrella-shaped bodies and trailing tentacles.",
        "They are found in every ocean, from the surface to the deep sea, and some species inhabit freshwater environments.",
        "Jellyfish play a role in marine ecosystems both as predators, feeding on plankton, fish, and even other jellyfish, and as prey for larger marine animals."
    ],
    'Lobster' : [
        "Lobsters are large marine crustaceans known for their long bodies, muscular tails, and claws, belonging to the family Nephropidae.",
        "They inhabit the rocky, sandy, or muddy bottoms of the ocean, and some species can also be found in freshwater environments.",
        "Lobsters are omnivorous and feed on fish, mollusks, algae, and other marine organisms, often scavenging for food."
    ],
    'Nudibranchs' : [
        "Nudibranchs, commonly known as sea slugs, are a group of soft-bodied, marine gastropod mollusks, known for their striking colors and diverse forms.",
        "They are found in oceans worldwide, from shallow, coastal waters to deep-sea environments, with over 3,000 described species.",
        "Nudibranchs range in size from a few millimeters to over a foot long, and their vivid colors often serve as a warning to predators of their toxicity."
    ],
    'Octopus' : [
        "The octopus is a highly intelligent and adaptable cephalopod mollusk known for its eight arms, bulbous head, and the ability to squirt ink as a defense mechanism.",
        "Found in diverse marine habitats, from coral reefs to the deep sea, octopuses are among the most widespread and behaviorally diverse of all cephalopods.",
        "They are renowned for their problem-solving skills, ability to escape enclosures, and use tools, exhibiting remarkable intelligence."
    ],
    'Otter' : [
        "Otters are semi-aquatic mammals belonging to the weasel family and are known for their playful behavior, agile swimming abilities, and significant role in aquatic ecosystems.",
        "There are 13 species of otters, and they can be found in a variety of aquatic habitats, including rivers, lakes, oceans, and wetlands, across different continents.",
        "Otters have a streamlined body, webbed feet, and a long, tapered tail, all adaptations that make them excellent swimmers."
    ],
    'Penguin' : [
        "Penguins are flightless seabirds primarily found in the Southern Hemisphere, with the highest concentrations in Antarctica, though certain species inhabit temperate climates like the Galapagos penguin.",
        "They are known for their distinct black and white plumage, which serves as camouflage while swimming – the black back blends with the ocean from above and the white belly from below.",
        "Emperor Penguins are the tallest species, standing nearly 4 feet tall, while the Little Blue Penguin is the smallest, averaging around 13 inches."
    ],
    'Puffers' : [
        "Pufferfish, also known as blowfish, are found in tropical and subtropical ocean waters, with a few species inhabiting brackish and freshwater.",
        "They are known for their unique ability to inflate into a ball shape to deter predators, a defense mechanism facilitated by swallowing water or air.",
        "Pufferfish are among the most poisonous vertebrates in the world, with toxins such as tetrodotoxin in their internal organs, which is up to 1,200 times more lethal than cyanide."
    ],
    'Sea Rays' : [
        "Stingrays are a group of sea rays, which are cartilaginous fish related to sharks, found in temperate and tropical waters worldwide.",
        "They are characterized by their flattened bodies, long, whip-like tails with a venomous stinger, and pectoral fins that give a bird-like appearance in motion.",
        "The majority of stingrays have one or more barbed stingers on the tail, used only in self-defense; the sting can be extremely painful to humans but is rarely fatal."
    ],
    'Sea Urchins' : [
        "Sea urchins are small, spiny, globular animals belonging to the class Echinoidea, found in oceans all over the world, from shallow waters to great depths.",
        "They have a hard shell called a test covered in spines that serve both for mobility and protection against predators",
        "Sea urchins primarily feed on algae, but some species also consume small invertebrates; their grazing habits significantly influence the marine ecosystem, particularly in kelp forests."
    ],
     'Seahorse' : [
        "Seahorses are small marine fishes in the genus Hippocampus, known for their horse-like heads, prehensile tails, and unique method of reproduction.",
        "They are found in shallow tropical and temperate waters around the world, often in seagrass beds, mangroves, and coral reefs.",
        "Unlike most other fish, seahorses swim upright and use their dorsal fins for propulsion and pectoral fins for steering."
    ],
        'Seal' : [
        "Seals are marine mammals belonging to the family Phocidae, known for their streamlined bodies, flippers, and ability to live both in water and on land.",
        "They are found in a wide range of marine environments, from Arctic and Antarctic regions to tropical waters.",
        "Seals primarily feed on fish, squid, and crustaceans, and their hunting skills are honed by their excellent underwater vision and sensitive whiskers, which detect vibrations from prey."
    ],
        'Sharks' : [
        "Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head.",
        "Found in all oceans, they range from small species like the dwarf lantern shark, only 17 centimeters long, to the whale shark, the largest fish in the world, which can reach up to 12 meters.",
        "Sharks have a unique sensory system; they use electroreception to detect the electrical fields created by other organisms, aiding in hunting."
    ],
            'Shrimp' : [
        "Shrimp are small, decapod crustaceans found in both freshwater and marine environments around the world, known for their delicate taste and nutritional value.",
        "They have a segmented body, an exoskeleton, and antennae, and they swim backward by rapidly flexing the abdomen and tail.",
        "Shrimp play a vital role in the food chain, serving as both predator and prey for a wide range of marine species."
    ],
            'Squid' : [
        "Squid are fast-swimming, cephalopods widely distributed in marine environments worldwide, from the deep sea to coastal waters.",
        "They have a distinct head, bilateral symmetry, a mantle, and tentacles with suckers or hooks, which they use for capturing prey.",
        "Squid are known for their rapid movements and ability to swim quickly by expelling water through a siphon, a form of jet propulsion."
    ],
            'Starfish' : [
        "Starfish, or sea stars, are echinoderms belonging to the class Asteroidea, characterized by their star-shaped body and usually five arms, though some species have more.",
        "They are found in all the world's oceans, from tropical coral reefs to deep-sea trenches, and vary in size and color.",
        "Starfish are famous for their ability to regenerate lost arms."
    ],
            'Turtle_Tortoise' : [
        "Turtles are reptiles of the order Testudines, characterized by a special bony or cartilaginous shell developed from their ribs, acting as a shield.",
        "They are one of the oldest reptile groups, more ancient than snakes or crocodilians, with fossil records dating back to the time of the dinosaurs.",
        "SharksTurtles are divided into two main groups: tortoises, which are land-dwelling, and turtles, which are primarily aquatic or semi-aquatic. have a unique sensory system; they use electroreception to detect the electrical fields created by other organisms, aiding in hunting."
    ],
            'Whale' : [
        "Whales are large marine mammals belonging to the order Cetacea, which includes the blue whale, the largest animal ever known to have existed.",
        "They are found in all the world's oceans, from the Arctic and Antarctic to tropical waters, and are highly migratory, traveling thousands of kilometers for feeding and breeding.",
        "Whales are divided into two suborders: baleen whales, which filter feed on small organisms like krill, and toothed whales, which hunt fish and squid."
    ]
}
function classifyImage() {
    var formData = new FormData();
    var fileInput = document.getElementById('image-upload');
    if (fileInput.files.length > 0) {
        formData.append('file', fileInput.files[0]);

        $.ajax({
            type: 'POST',
            url: '/predict',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                if (response[0] === "Error") {
                    alert("Error: " + response[1]);
                    return;
                }

                var classificationText = "      "+ response[0];
                if((response[2] * 100).toFixed(2) > 30.0){
                var probabilityText = (response[2] * 100).toFixed(2).toString() + "%";

                console.log(classificationText);
                var imagePath = "/static/images/" + response[1].toString() + ".jpeg";
                var aboutText = document.getElementById('img-ident-about');
                var speciesInfo = marineSpeciesDescriptions[response[0]];
                var location = marine_animal_locations[response[0]]
                if (location) {
                    var locationText = location.name + " (Latitude: " + location.latitude + ", Longitude: " + location.longitude + ")";
                    document.getElementById('location_result').innerText = locationText;
                } else {
                    document.getElementById('location_result').innerText = "Location not available.";
                }
                if (speciesInfo) {
                   // Join the array elements into a string, separated by line breaks.
                    aboutText.innerHTML = speciesInfo.join("<br><br>");
                } else {
                    aboutText.innerText = "No additional information available.";
                }
//                document.querySelector('#show_map').addEventListener('click',function() {
//                    var mapArea = document.querySelector('.modal5');
//                    if (mapArea) {
//                        mapArea.classList.remove('hidden');
//                    } else {
//                        console.error('Map area not found.');
//                        return;
//                    }
////                    a = document.querySelector('#MA').innerHTML;
////                    console.log(a);
//                      var sElement = document.getElementById('s');
//                       if (sElement) {
//                            sElement.innerHTML = document.querySelector('#MA').innerHTML;
//                        } else {
//                            console.error('Element with ID "s" not found.');
//                            return;
//                        }
//
////                    mapArea.classList.remove('hidden');
////                    console.log(document.querySelector("#s").innerHTML);
//                     var mapElement = document.getElementById('map');
////                    document.querySelector("#s").innerText = a;
//                     const userLocation = { lat: location.latitude, lon: location.longitude };
//                    const map = L.map('map').setView([userLocation.lat, userLocation.lon], 12);
//                    toreplace.innerHTML=mapReal;
////                    const userLocation = { lat: location.latitude, lon: location.longitude };
////                    console.log(userLocation);
////                    const map = L.map('map').setView([userLocation.lat, userLocation.lon], 12);
//
//
//                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                        attribution: '&copy; OpenStreetMap contributors'
//                    }).addTo(map);
//
//                    L.marker([userLocation.lat, userLocation.lon]).addTo(map)
//                        .bindPopup('User Location')
//                        .openPopup();
//
//                })
                  document.querySelector('#show_map').addEventListener('click', function() {
    var mapArea = document.querySelector('.modal5');
    if (mapArea) {
        mapArea.classList.remove('hidden');
        console.log('Map area is now visible.');
    } else {
        console.error('Map area not found.');
        return;
    }

    var mapElement = document.getElementById('map');
    if (mapElement) {
        if (!mapElement._leaflet) { // Check if map is already initialized
            const userLocation = { lat: location.latitude, lon: location.longitude };
            const map = L.map('map').setView([userLocation.lat, userLocation.lon], 12);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            L.marker([userLocation.lat, userLocation.lon]).addTo(map)
                .bindPopup('User Location')
                .openPopup();

            console.log('Map should now be initialized.');
        } else {
            console.log('Map is already initialized.');
        }
    } else {
        console.error('Map element not found.');
    }
});

                document.getElementById('classification-result').innerText = classificationText;
                document.getElementById('probability-result').innerText = probabilityText;
                document.getElementById('classified-image').src = imagePath;
                document.getElementById('classified-image').alt = response[0];
//                document.getElementById('location_result').innerText = location;

                document.querySelector('.class-sec').classList.remove('invis');
                document.querySelector('.iden-sec').classList.remove('invis');
                document.querySelector('.imginf-sect').style.display = 'block';
                document.querySelector('.reset-btn').style.display='block';
                }
                else{
                    var probabilityText = "I think it is not a Marine Animal";
                    var imagePath = "/static/images/" + response[1].toString() + ".jpeg";
                    var aboutText = document.getElementById('img-ident-about');
                    var speciesInfo = marineSpeciesDescriptions[response[0]];
                    if (speciesInfo) {
                        aboutText.innerHTML = speciesInfo.join("<br><br>");
                    } else {
                        aboutText.innerText = "No additional information available.";
                    }

                    document.getElementById('classification-result').innerText = "Not a classified Marine Animal";
                    document.getElementById('probability-result').innerText = probabilityText;
                    document.getElementById('classified-image').src = "/static/images/disappoint.png";
                    document.getElementById('classified-image').alt = "Not a Marine Animal";

                    document.querySelector('.class-sec').classList.remove('invis');
                    document.querySelector('.iden-sec').classList.remove('invis');
                    document.querySelector('.imginf-sect').style.display = 'block';
                    document.querySelector('.reset-btn').style.display='block';

                }
            },
            error: function(error) {
                console.log(error);
                alert('Error: ' + error.responseText);
            }
        });
    } else {
        alert('Please select an image file to classify.');
    }
}



//function classifyImage() {
//    var formData = new FormData();
//    var fileInput = document.getElementById('FileInput');
//    if (fileInput.files.length > 0) {
//        formData.append('file', fileInput.files[0]);
//
//        $.ajax({
//            type: 'POST',
//            url: '/predict',
//            data: formData,
//            contentType: false,
//            processData: false,
//            success: function(response) {
//                // Assuming response is an object with classification and index
//                var classificationText = "Image Classification: " + result.classification;
//                var imagePath = "/static/images/" + result.index + ".jpg";
//
//                // Update the classification text
//                document.getElementById('classification-result').innerText = classificationText;
//
//                // Update the image source
//                document.getElementById('classified-image').src = imagePath;
//                document.getElementById('classified-image').alt = result.classification;
//
//                // Make sections visible
//                document.querySelector('.class-sec').classList.remove('invis');
//                document.querySelector('.iden-sec').classList.remove('invis');
//                document.querySelector('.imginf-sect').style.display = 'block';
//            },
//            error: function(error) {
//                console.log(error);
//            }
//        });
//    } else {
//        alert('Please select an image file to classify.');
//    }
//}


//
//function classifyImage() {
//    var formData = new FormData();
//    var fileInput = document.getElementById('FileInput');
//    document.querySelector('.class-sec').classList.remove('invis');
//    document.querySelector('.iden-sec').classList.remove('invis');
//    document.querySelector('.imginf-sect').style.display='block';
//    if (fileInput.files.length > 0) {
//        formData.append('file', fileInput.files[0]);
//
//        $.ajax({
//            type: 'POST',
//            url: '/predict',
//            data: formData,
//            contentType: false,
//            processData: false,
//            success: function(response) {
//                // Update the page with the response
//                document.getElementById('classification-result').innerText = "Image Classification: " + response[0];
//                document.querySelector('.class-sec').classList.remove('invis');
//            },
//            error: function(error) {
//                console.log(error);
//            }
//        });
//    } else {
//        alert('Please select an image file to classify.');
//    }
//}

//
//function classifyImage() {
//    // Add your image classification logic here
//    // Update the content in #classification-result and #image-preview
//    // document.getElementById('classification-section').style.display = 'block';
//    // document.getElementById('identification-section').style.display = 'block';
//    // document.getElementById('image-info-section').style.display = 'block';
//    // document.querySelector('.class-sec').classList.add('class-sec-pseudo');
//    document.querySelector('.class-sec').classList.remove('invis');
//    document.querySelector('.iden-sec').classList.remove('invis');
//
//
//    // document.querySelector('.class-sec').style.display='block';
//    // document.querySelector('.iden-sec').style.display='block';
//    document.querySelector('.imginf-sect').style.display='block';
//
//    // document.getElementsByClassName('class-sec').style.display='block'
//    // document.getElementsByClassName('iden-sec').style.display='block'
//    // document.getElementsByClassName('imginf-sect').style.display='block'
//
//    // document.getElementById('know-more-section').style.display = 'block';
//}

// for video slider;
const btns=document.querySelectorAll(".nav-btn");
const slids=document.querySelectorAll(".video-slide");


var sliderNav=function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });
    slids.forEach((slide)=>{
        slide.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slids[manual].classList.add("active");
}
btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    })
});



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// chatbot
$(function() {
  var INDEX = 0;
  $("#chat-submit").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input").val().trim();
    if (msg == '') {
      return false;
    }

    // Send user message to the /chat route
    $.ajax({
      type: "POST",
      url: "/chat",
      data: { message: msg },
      success: function(response) {
        // Process and display the response from the chatbot
        generate_message(msg, 'self');
        generate_message(response.response, 'user');
      },
      error: function(err) {
        console.error(err);
      }
    });
  });

//$(function() {
//  var INDEX = 0;
//  $("#chat-submit").click(function(e) {
//    e.preventDefault();
//    var msg = $("#chat-input").val();
//    if(msg.trim() == ''){
//      return false;
//    }
//    generate_message(msg, 'self');
//    var buttons = [
//        {
//          name: 'Existing User',
//          value: 'existing'
//        },
//        {
//          name: 'New User',
//          value: 'new'
//        }
//      ];
//    setTimeout(function() {
//      generate_message(msg, 'user');
//    }, 1000)
//
//  })
  
  function generate_message(msg, type) {
    INDEX++;
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    if(type == 'self'){
     $("#chat-input").val(''); 
    }    
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
  }  
  
  function generate_button_message(msg, buttons){    
    /* Buttons should be object array 
      [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ]
    */
    INDEX++;
    var btn_obj = buttons.map(function(button) {
       return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
    }).join('');
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "          <div class=\"cm-msg-button\">";
    str += "            <ul>";   
    str += btn_obj;
    str += "            <\/ul>";
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);   
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
    $("#chat-input").attr("disabled", true);
  }
  
  $(document).delegate(".chat-btn", "click", function() {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, 'self');
  })
  
  $("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
})

//reset button
function clearResult(){

  window.location.reload()
  // document.getElementById("result").value = ''
}


// for notebook

const rulebtn = document.querySelector('.btn-instruct');
const abtAlgobtn = document.querySelector('.btn-aboutAlgo');
const feedbtn = document.querySelector('.btn-Feedback');
const contbtn = document.querySelector('.btn-contact');

// console.log(rulebtn,abtAlgobtn,feedbtn,contbtn);
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const modal4 = document.querySelector('.modal4');
const modal5= document.querySelector('.modal5');
// console.log(modal1,modal2,modal3,modal4);
const closeModal1 = document.querySelector('.close-modal1');
const closeModal2 = document.querySelector('.close-modal2');

const closeModal3 = document.querySelector('.close-modal3');

const closeModal4 = document.querySelector('.close-modal4');
const closeModal5 = document.querySelector('.close-modal5');


const overlay = document.querySelector('.overlay');

const closeRuleBook = function() {
   console.log("hi");
    modal1.classList.add('hidden');
    modal2.classList.add('hidden');
    modal3.classList.add('hidden');
    modal4.classList.add('hidden');
     modal5.classList.add('hidden');
    overlay.classList.add('hidden');
};
closeRuleBook();

// Event listener for opening the rulebook
rulebtn.addEventListener('click', function() {
    modal1.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
abtAlgobtn.addEventListener('click', function() {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
feedbtn.addEventListener('click', function() {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
contbtn.addEventListener('click', function() {
  modal4.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

// Event listeners for closing the rulebook
closeModal1.addEventListener('click', closeRuleBook);
closeModal2.addEventListener('click', closeRuleBook);
closeModal3.addEventListener('click', closeRuleBook);
closeModal4.addEventListener('click', closeRuleBook);
closeModal5.addEventListener('click', closeRuleBook);

overlay.addEventListener('click', closeRuleBook);

mapArea=document.querySelector('.modal5');
mapReal=document.querySelector('#MAP');
toreplace=document.querySelector('#abc');
console.log(mapReal);
console.log(toreplace);

//document.querySelector('#show_map').addEventListener('click', ()=>{
////alert("HI")
//
//
//
//});