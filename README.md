# rco
Russian Chamber Orchestra website
www.russianchamberorch.org

A repsonsive site built using Twitter Bootstrap + custom css files, PHP, font awesome glyphs, Date.js, JSON and jQuery.

I used PHP to avoid repeating myself - that is, there are two files used on every page, inc/rco-header.php and 
inc/rco-footer.php, which set up the navigation menu and footer section, respectively, as well as loading in all
the css and js files, respectively.

The concert dates on the home page and the tickets page are automatically updated by editing a single JSON file, 
concerts6.json. This way, someone with very little training can update the concert schedule - the only part of the site that frequently gets updated. The JSON is parsed using jQuery in the main.js file. I used Date.js to determine (while parsing the JSON) when the next concert is, and to put just that one on the front page (index.php), while the entire schedule is added to tickets.php, using jQuery's append function. 

The transition effect between pages is achieved via css and jQuery which manipulate the
<body> tag, which has an id of "cbp-so-scroller." The css is found in the file coolnavbar.css (look for that id), and the jQuery function in main.js.
