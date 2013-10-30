REM gem update --system
REM gem install jstdutil

REM Capture necessary browsers
@start firefox http://localhost:8003/capture
@start chrome http://localhost:8003/capture
@start iexplore http://localhost:8003/capture

REM Load Test Cases
java -jar %JSTESTDRIVER_HOME%/JsTestDriver-1.3.3d.jar --config ./jsTestDriver.conf --reset --tests all

REM Activate automated-testing
jsautotest 