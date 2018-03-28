(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dfsVideoEmbed'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\""
    + alias4(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data}) : helper)))
    + "_videoContainer\">\n  <video id=\""
    + alias4(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data}) : helper)))
    + "\" class=\"video-js vjs-big-play-centered vjs-default-skin\" controls preload=\"none\" width=\""
    + alias4(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data}) : helper)))
    + "\" height=\""
    + alias4(((helper = (helper = helpers.height || (depth0 != null ? depth0.height : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data}) : helper)))
    + "\"\n    poster=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "?"
    + alias4(((helper = (helper = helpers.queryStrings || (depth0 != null ? depth0.queryStrings : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"queryStrings","hash":{},"data":data}) : helper)))
    + "&protocol=https\" data-render_version=\"1.02b\">\n      <p class=\"vjs-no-js\">\n        To view this video please enable JavaScript, and consider upgrading to a web browser that\n        <a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">supports HTML5 video</a>\n      </p>\n    </video>\n</div>\n\n\n<script>\nvar "
    + alias4(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data}) : helper)))
    + " = videojs('"
    + alias4(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data}) : helper)))
    + "', {\n  plugins: {\n    videoJsResolutionSwitcher: {\n      default: '480',\n      dynamicLabel: true\n    }\n  }\n});\n"
    + alias4(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data}) : helper)))
    + ".updateSrc([\n\n  { src: \""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "/webm_480p?"
    + alias4(((helper = (helper = helpers.queryStrings || (depth0 != null ? depth0.queryStrings : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"queryStrings","hash":{},"data":data}) : helper)))
    + "&protocol=https\",\n    type: \"video/webm\",res: 480,label: \"480\" },\n\n  { src: \""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "/webm_720p?"
    + alias4(((helper = (helper = helpers.queryStrings || (depth0 != null ? depth0.queryStrings : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"queryStrings","hash":{},"data":data}) : helper)))
    + "&protocol=https\",\n    type: \"video/webm\",res: 720,label: \"hd\" },\n\n  { src: \""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "/webm_240p?"
    + alias4(((helper = (helper = helpers.queryStrings || (depth0 != null ? depth0.queryStrings : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"queryStrings","hash":{},"data":data}) : helper)))
    + "&protocol=https\",\n    type: \"video/webm\",res: 240,label: \"240\" },\n\n  { src: \""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "/mp4_480p?"
    + alias4(((helper = (helper = helpers.queryStrings || (depth0 != null ? depth0.queryStrings : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"queryStrings","hash":{},"data":data}) : helper)))
    + "&protocol=https\",\n    type: \"video/mp4\",res: 480,label: \"480\" },\n\n  { src: \""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "/mp4_720p?"
    + alias4(((helper = (helper = helpers.queryStrings || (depth0 != null ? depth0.queryStrings : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"queryStrings","hash":{},"data":data}) : helper)))
    + "&protocol=https\",\n    type: \"video/mp4\",res: 720,label: \"hd\" },\n\n  { src: \""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "/mp4_240p?"
    + alias4(((helper = (helper = helpers.queryStrings || (depth0 != null ? depth0.queryStrings : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"queryStrings","hash":{},"data":data}) : helper)))
    + "&protocol=https\",\n    type: \"video/mp4\",res: 240,label: \"240\" }\n\n]);\n</script>\n<style>\n/* Play button over-rides */\n.video-js .vjs-big-play-button {\n  background-color: rgba(0, 0, 0, 0.55) !important;\n  color: #fff !important;\n}\n</style>\n";
},"useData":true});
})();