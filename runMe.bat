@echo off
node node_modules\cucumber\bin\cucumber.js -r features\ -f json:test\report\results.json
pause
