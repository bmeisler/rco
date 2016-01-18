# rco
Russian Chamber Orchestra website
www.russianchamberorch.org

A repsonsive site built using Twitter Bootstrap, PHP, font aweseom glyphs, custom css files, Javascript, JSON and jQuery.

I used PHP to avoid repeating myself - that is, there are two files used on every page, inc/rco-header.php and 
inc/rco-footer.php, which set up the navigation menu and footer section, respectively, as well as loading in all
the css and js files, respectively.

The concert dates on the home page and the tickets page are automatically updated by editing a single JSON file, 
concerts6.json. I used Date.js to determine (in main.js) when the next concert is, and to put just that one on 
the front page (index.php).

The neat effect of transitions between pages is achieved via css transitions and jQuery which manipulate the
<body> tag, which has an id of "cbp-so-scroller." The css is found in the file coolnavbar.css, and the jQuery function 
in main.js.
