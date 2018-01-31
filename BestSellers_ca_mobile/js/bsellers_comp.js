(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bestSellers'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2 class=\"bs_title\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.variables : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.title : stack1), depth0))
    + "</h2>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<ol class=\"carousel-indicators\">\n  <li data-target=\"#bsCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  <li data-target=\"#bsCarousel\" data-slide-to=\"1\"></li>\n</ol>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n  <div class=\"item "
    + ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n\n    <ul class=\"bs_slides\">\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n\n\n    <div class=\"clearfix\"></div>\n  </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "active";
},"8":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <li>\n        <a href=\""
    + alias2(alias1((depth0 != null ? depth0.link : depth0), depth0))
    + "\" title=\""
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\n          <div class=\"bs_wrapper\">\n            <img src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\n            <div class=\"bs_item\">\n              <h3>"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\n              <p>"
    + alias2((helpers.truncate || (depth0 && depth0.truncate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.name : depth0),25,{"name":"truncate","hash":{},"data":data}))
    + "</p>\n              <p class=\"bs_price\">"
    + alias2(alias1((depth0 != null ? depth0.price : depth0), depth0))
    + "</p>\n              <div class=\"bs_button\">\n                <p class=\"bs_primary\">Find out more</p>\n              </div>\n            </div>\n          </div>\n        </a>\n      </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div id=\"bsCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.variables : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<!-- Indicators -->\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.variables : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.bottomNav : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"carousel-inner\" role=\"listbox\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.bestsellers_data : depth0)) != null ? stack1["0"] : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n<a class=\"left carousel-control\" href=\"#bsCarousel\" role=\"button\" data-slide=\"prev\">\n  <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Previous</span>\n</a>\n<a class=\"right carousel-control\" href=\"#bsCarousel\" role=\"button\" data-slide=\"next\">\n  <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Next</span>\n</a>\n</div><!-- /.carousel -->\n";
},"useData":true});
})();