# Porta Aberta EPUB

This is an example ePub publication. 

This project is an example to demonstate the usage of advanced accesibility features in epub publications.

This epub is used in the learn my way application which can be found here: https://github.com/ansanes/learnmywayreader.

It is an interactive epub that includes a set of interactive activities. 

### Generating the epub file

The project includes a gulp file (gulpfile.js) that can be used to package all the assets into an .epub file.

If you want to use the epub in conjunction with the android learn my way epplication App you can modify the value of the outputPath so that it point to the correct location in your Android Studio Project where the .epub file will be copied to after being generated.

### Interactive Actvities

The ebook contains 14 different activities.

Those activities were developed using custom javascript code:

This is the list of available activities and their page indexes.

- Page 4 - Finding activity
- Page 5 - Listening activity
- Page 6 - Sorting activity
- Page 7 - Memeory Activity
- Page 11 - Labeling Activity
- Page 12 - Spelling Activity
- Page 13 - True or False Activity
- Page 15 - Matching Activity

The source files for each activity can be found in the corresponding public_html/porta_aberta/OEBPS/assets subfolder including all the activity media assets, html, CSS and javascript files.
