gdjs.GameOverCode = {};
gdjs.GameOverCode.GDPlatformObjects1= [];
gdjs.GameOverCode.GDPlatformObjects2= [];
gdjs.GameOverCode.GDPlatformObjects3= [];
gdjs.GameOverCode.GDBackgroundObjects1= [];
gdjs.GameOverCode.GDBackgroundObjects2= [];
gdjs.GameOverCode.GDBackgroundObjects3= [];
gdjs.GameOverCode.GDScorePannelObjects1= [];
gdjs.GameOverCode.GDScorePannelObjects2= [];
gdjs.GameOverCode.GDScorePannelObjects3= [];
gdjs.GameOverCode.GDScoreTextObjects1= [];
gdjs.GameOverCode.GDScoreTextObjects2= [];
gdjs.GameOverCode.GDScoreTextObjects3= [];
gdjs.GameOverCode.GDPlayerNameInputObjects1= [];
gdjs.GameOverCode.GDPlayerNameInputObjects2= [];
gdjs.GameOverCode.GDPlayerNameInputObjects3= [];
gdjs.GameOverCode.GDPlayerNameInput2Objects1= [];
gdjs.GameOverCode.GDPlayerNameInput2Objects2= [];
gdjs.GameOverCode.GDPlayerNameInput2Objects3= [];
gdjs.GameOverCode.GDRestartButtonObjects1= [];
gdjs.GameOverCode.GDRestartButtonObjects2= [];
gdjs.GameOverCode.GDRestartButtonObjects3= [];
gdjs.GameOverCode.GDSubmitButtonObjects1= [];
gdjs.GameOverCode.GDSubmitButtonObjects2= [];
gdjs.GameOverCode.GDSubmitButtonObjects3= [];
gdjs.GameOverCode.GDScoresButtonObjects1= [];
gdjs.GameOverCode.GDScoresButtonObjects2= [];
gdjs.GameOverCode.GDScoresButtonObjects3= [];
gdjs.GameOverCode.GDSubmitLoaderObjects1= [];
gdjs.GameOverCode.GDSubmitLoaderObjects2= [];
gdjs.GameOverCode.GDSubmitLoaderObjects3= [];
gdjs.GameOverCode.GDDinoObjects1= [];
gdjs.GameOverCode.GDDinoObjects2= [];
gdjs.GameOverCode.GDDinoObjects3= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) != "0";
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPlayerNameInputObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameOverCode.GDDinoObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDDinoObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDDinoObjects2[i].addForce(200, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.GameOverCode.GDDinoObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDDinoObjects1.length;i<l;++i) {
    if ( !(gdjs.GameOverCode.GDDinoObjects1[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDDinoObjects1[k] = gdjs.GameOverCode.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDDinoObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDDinoObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDDinoObjects1[i].setX(-((gdjs.GameOverCode.GDDinoObjects1[i].getWidth())));
}
}}

}


};gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartButtonObjects2Objects = Hashtable.newFrom({"RestartButton": gdjs.GameOverCode.GDRestartButtonObjects2});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDSubmitButtonObjects2Objects = Hashtable.newFrom({"SubmitButton": gdjs.GameOverCode.GDSubmitButtonObjects2});
gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDScoresButtonObjects1Objects = Hashtable.newFrom({"ScoresButton": gdjs.GameOverCode.GDScoresButtonObjects1});
gdjs.GameOverCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameOverCode.GDRestartButtonObjects2);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRestartButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects2);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("ScoreCanBeSaved"), true);
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects2[i].enableEffect("Disabled", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects2);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDSubmitButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("ScoreCanBeSaved"), true);
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput2"), gdjs.GameOverCode.GDPlayerNameInput2Objects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "faf8eddb-9fd7-4e98-966b-69159024d0a2", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (( gdjs.GameOverCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.GameOverCode.GDPlayerNameInputObjects2[0].getString()));
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "bfbbe4c0-463d-4152-be84-a9ca0434cb62", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (( gdjs.GameOverCode.GDPlayerNameInput2Objects2.length === 0 ) ? "" :gdjs.GameOverCode.GDPlayerNameInput2Objects2[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.GameOverCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.GameOverCode.GDPlayerNameInputObjects2[0].getString()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("ScoreCanBeSaved"), false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ScoresButton"), gdjs.GameOverCode.GDScoresButtonObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDScoresButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "faf8eddb-9fd7-4e98-966b-69159024d0a2", true);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LeaderboardBackground");
}}

}


};gdjs.GameOverCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameOverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameOverCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.leaderboards.hasSavingErrored("faf8eddb-9fd7-4e98-966b-69159024d0a2");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDSubmitButtonObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("ScoreCanBeSaved"), true);
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects1[i].enableEffect("Disabled", false);
}
}}

}


};gdjs.GameOverCode.eventsList5 = function(runtimeScene) {

{



}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("ScoreCanBeSaved"), false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9396164);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects2[i].enableEffect("Disabled", true);
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.leaderboards.isSaving("faf8eddb-9fd7-4e98-966b-69159024d0a2");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9396972);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.GameOverCode.GDSubmitLoaderObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitLoaderObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitLoaderObjects2[i].hide(false);
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = !(gdjs.evtTools.leaderboards.isSaving("faf8eddb-9fd7-4e98-966b-69159024d0a2"));
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9397956);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.GameOverCode.GDSubmitLoaderObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDSubmitLoaderObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitLoaderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.GameOverCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameOverCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameOverCode.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.GameOverCode.GDSubmitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.GameOverCode.GDSubmitLoaderObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreTextObjects1[i].setString("النقاط   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitLoaderObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitLoaderObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "LeaderboardMusic.mp3", true, 35, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("ScoreCanBeSaved"), true);
}{for(var i = 0, len = gdjs.GameOverCode.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDSubmitButtonObjects1[i].enableEffect("Disabled", false);
}
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameOverCode.eventsList1(runtimeScene);
}


{


gdjs.GameOverCode.eventsList3(runtimeScene);
}


{


gdjs.GameOverCode.eventsList5(runtimeScene);
}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDPlatformObjects1.length = 0;
gdjs.GameOverCode.GDPlatformObjects2.length = 0;
gdjs.GameOverCode.GDPlatformObjects3.length = 0;
gdjs.GameOverCode.GDBackgroundObjects1.length = 0;
gdjs.GameOverCode.GDBackgroundObjects2.length = 0;
gdjs.GameOverCode.GDBackgroundObjects3.length = 0;
gdjs.GameOverCode.GDScorePannelObjects1.length = 0;
gdjs.GameOverCode.GDScorePannelObjects2.length = 0;
gdjs.GameOverCode.GDScorePannelObjects3.length = 0;
gdjs.GameOverCode.GDScoreTextObjects1.length = 0;
gdjs.GameOverCode.GDScoreTextObjects2.length = 0;
gdjs.GameOverCode.GDScoreTextObjects3.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects1.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects2.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects3.length = 0;
gdjs.GameOverCode.GDPlayerNameInput2Objects1.length = 0;
gdjs.GameOverCode.GDPlayerNameInput2Objects2.length = 0;
gdjs.GameOverCode.GDPlayerNameInput2Objects3.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects1.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects2.length = 0;
gdjs.GameOverCode.GDRestartButtonObjects3.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects1.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects2.length = 0;
gdjs.GameOverCode.GDSubmitButtonObjects3.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects1.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects2.length = 0;
gdjs.GameOverCode.GDScoresButtonObjects3.length = 0;
gdjs.GameOverCode.GDSubmitLoaderObjects1.length = 0;
gdjs.GameOverCode.GDSubmitLoaderObjects2.length = 0;
gdjs.GameOverCode.GDSubmitLoaderObjects3.length = 0;
gdjs.GameOverCode.GDDinoObjects1.length = 0;
gdjs.GameOverCode.GDDinoObjects2.length = 0;
gdjs.GameOverCode.GDDinoObjects3.length = 0;

gdjs.GameOverCode.eventsList6(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
