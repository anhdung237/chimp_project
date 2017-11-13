# chimp_project
testing project using chimp framework

==================== Structure ====================
1. npm install -g chimp
2. create folder "features" in project directory
3. create folder "step_definitions" under folder "features"
4. create folder "pages" which is same level with folder "features"

==================== How to work ====================
5. Read the structure in git https://github.com/xolvio/chimp/tree/master/features to understand how to create feature files and step files following 2 format webdriver and es2015
6. We will use format es2015 to create feature and step file
7. When running, Cucumber will read file feature, then finding on all step files to use the appropriate step. So we have 2 approaches here:
    7.1. Create only one step file and contains all the steps for whole app
    7.2. Create each step file for each page. But when using this approach, Cucumber will through the error message "Duplicated steps" if we have the steps which are the same name in many step files
8. When running feature file, cucumber will notify the steps which are missed. We only copy and paste these steps into appropriate step file

==================== Create the page object ====================
9. Follow this link http://webdriver.io/guide/testrunner/pageobjects.html to understand how to create page object pattern by WebdriverIO. We will use ES6
10. Create main page "page" into pages folder. Notice the last command of page.js is "module.exports = page;" instead of "module.exports = new page();" to avoid the error "TypeError: Super expression must either be null or a function, not object"
11. Create the child pages such as: loginPage.js and mainPage.js. The last command should be "module.exports = new loginPage();"
12. In the child page, for example: loginPage.js, we will extend page by below:
    12.1. Require page by command var page = require('./page')
        12.1.1. ./ means current folder
        12.1.2. ../ means go to parent folder
    12.2. Declare the extension, e.g. class loginPage extends page {}
    12.3. Then we declare the elements and methods of the specific page

==================== Step files call page ====================
13. The same with section "Create the page object", if the step file want to call any page, we should require the page, by command: var loginPage = require('../pages/loginPage');
14. Then in the step definition, we can all the instance of page and using its elements, methods

==================== Using chimp config file ====================
15. Download config file from link https://github.com/xolvio/chimp/blob/master/src/bin/default.js , change "import path from 'path';" to "var path = require("path");"
16. Export the json output of cucumber. We will change in chimp config file, change from "jsonOutput: null" tp "jsonOutput: path.resolve(__dirname, 'output.json'),". It will create a output file output.json in main directory. This file will be used in Jenkins later.


==================== Some commands using to run feature file ====================
16. chimp --webdriverio.waitforTimeout=5000 --watch
16. chimp config/chimp-config.js --watch -r steps
17. chimp features/login.feature