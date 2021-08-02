# McMinnville_UFOs

## Overview

Are we alone in the universe?  We are building a UFO-themed webpage with a detailed table of UFO sightings throughout North America for you to review and decide for yourself.

This webpage was built using JavaScript with D3 to generate a table of UFO sighting data and display it via an interactive webpage using HTML customized with Bootstrap.  Because there is a long list of sighting data, filters can be applied to the table based on user input for easy viewing.

## Results

The webpage will initially load with the full table of UFO sighting data for the user to view.  There are five fields available to the left of the table for the user to filter the data based on:
     • Date
     • City
     • State
     • Country
     • Shape (of UFO)

Unfiltered, the site appears as follows:

![FilterSearch](/static/images/FilterSearch.PNG)

The JavaScript file “app.js” utilizes D3 to listen for and apply user input to rebuild the UFO sighting data table.  The script will take the user input values in one or more of the provided filter fields and rebuild the table based on the data that matches.  Each filter field displays an example of the format that should be provided.  For example, the *Enter a State* field shows that the expected input is a state abbreviation in lowercase letters.  If we input “tx” in this field, the table will filter, displaying only the data that matches with State listed as “tx”

![FilterSearch-tx](/static/images/FilterSearch-tx.PNG)

The search can be as specific as possible, for example, here we have further refined our search by filtering based on “State: tx” and “Date: 1/8/2010.”  This returns all data that meets **both** criteria entered in the filter fields:

![ FilterSearch-tx-date](/static/images/FilterSearch-tx-date.PNG)

If a value is entered in any of the filter fields does not match any data, then the table will not populate.  To repopulate the webpage with the original table, simply delete any text from all the filter fields and hit “enter” or refresh the page.

### Summary


The webpage generated with this script performs the desired task of displaying and filtering our data.  However, the filter capabilities are fairly rigid which may cause some frustration for our users.

For example, filter fields require very specific input formats.  In our earlier example, the *Enter a State* field requires the state to be entered as the state abbreviation in lowercase.  If a user types in the state as “Texas” or “TX,” the table will not populate.  The webpage could be updated so that the filter fields can accept multiple expected formats.

Additionally, if one of the filter fields has an incorrect or unavailable input, it is difficult to visually identify the problem.  The webpage could be updated so that an error or incorrect input can be highlighted and a message will appear with a suggested fix.  For example, if the user enters “USA” in the *Enter a State* field, that field will appear with red text and a message will appear noting that the input is not a US state or not input in the correct format.
