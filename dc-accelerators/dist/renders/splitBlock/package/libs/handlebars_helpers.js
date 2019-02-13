(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var renderTypes = typeof root.renderTypes !== 'undefined' ? root.renderTypes : undefined;
        var Hbars = typeof root.Handlebars !== 'undefined' ? root.Handlebars : undefined;
        factory()(Hbars || null, renderTypes || null);
    }
}(this, function () {
    return function (Hbars, renderTps) {
        if (renderTps && typeof renderTypes === 'undefined') {
            var renderTypes = renderTps;
        }
        if (Hbars && typeof Handlebars === 'undefined') {
            Handlebars = Hbars;
        }

        if (typeof Handlebars !== 'undefined') {

            Handlebars.registerHelper('compare_length', function (arr, operator, val, opts) {
                var result = false;
                switch (operator) {
                    case '==':
                        result = arr.length == val;
                        break;
                    case '<':
                        result = arr.length < val;
                        break;
                    case '>':
                        result = arr.length > val;
                        break;
                    default:
                        throw "Unknown operator " + operator;
                }

                if (result) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('escapeUrl', function (url) {
                if (!url || url.length < 1) {
                    return '';
                }
                return encodeURIComponent(url);
            });


            Handlebars.registerHelper('templateChooser', function (context, addTemplateClassname) {

                var context = context instanceof Array ? context[0] : context;

                var parsedName = context['_meta']['schema'].match(/(\/\w+)/g).splice(-1)[0].replace('/', '');
                var matchedTemplate;
                    for (var x in Handlebars.partials) {
                        if (parsedName.toLowerCase() === x.toLowerCase()) {
                            matchedTemplate = Handlebars.partials[x].length
                                ? Handlebars.partials[x]
                                : Handlebars.template(Handlebars.partials[x]);
                            break;
                        }
                    }


                if (!matchedTemplate) {
                    return "Template matching id: " + matchedTemplate + ' not found';
                }

                context.addTemplateClassname = typeof addTemplateClassname !== 'undefined' ? addTemplateClassname : '';
                return new Handlebars.SafeString(matchedTemplate(context));
            });

            Handlebars.registerHelper('dynamicTemplate', function (id, renderTypes, context, addTemplateClassname) {
                if (id === false) {
                    id = context['@type'];
                }

                if (renderTypes) {
                    context.renderTypes = renderTypes;
                }

                else {
                    renderTypes = context.renderTypes;
                }

                var parsedId = id.indexOf('/') === -1 ? id : id.substring(id.lastIndexOf('/') + 1, id.length);
                var matchedTemplate;
                for (var name in renderTypes) {
                    if (parsedId === renderTypes[name]) {
                        matchedTemplate = Handlebars.partials[name].length
                            ? Handlebars.partials[name]
                            : Handlebars.template(Handlebars.partials[name]);
                        break;
                    }
                }
                if (!matchedTemplate) {
                    return "Template matching id: " + id + ' not found';
                }

                context.addTemplateClassname = typeof addTemplateClassname !== 'undefined' ? addTemplateClassname : '';
                return new Handlebars.SafeString(matchedTemplate(context));
            });

            Handlebars.registerHelper('matchType', function (id, renderName, opts) {
                if (!renderTypes) {
                    return new Handlebars.SafeString('renderTypes are undefined');
                }

                var parsedId = id.indexOf('/') === -1 ? id : id.substring(id.lastIndexOf('/') + 1, id.length);
                if (renderTypes[renderName] === parsedId) {
                    return opts.fn(this);
                }
            });

            Handlebars.registerHelper("math", function (lvalue, operator, rvalue, options) {
                lvalue = parseFloat(lvalue);
                rvalue = parseFloat(rvalue);

                return {
                    "+": lvalue + rvalue,
                    "-": lvalue - rvalue,
                    "*": lvalue * rvalue,
                    "/": lvalue / rvalue,
                    "%": lvalue % rvalue
                }[operator];
            });

            Handlebars.registerHelper('bannerConfig', function (opts) {
                var style = '';
                hex = this.bannerColor || '#fff';
                alpha = this.bannerOpacity || 1;
                hex = hex.replace('#', '');

                if (hex.length === 3) {
                    var hexArr = hex.split('');
                    hex = hexArr[0] + hexArr[0];
                    hex += (hexArr[1] + hexArr[1]);
                    hex += (hexArr[2] + hexArr[2]);
                }

                var r = parseInt(hex.slice(0, 2), 16);
                var g = parseInt(hex.slice(2, 4), 16);
                var b = parseInt(hex.slice(4, 6), 16);

                if (alpha) {
                    style += 'background-color:rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + '); ';
                }
                else {
                    style += 'background-color:rgb(' + r + ', ' + g + ', ' + b + '); ';
                }

                if (this.textColour) {
                    style += 'color: #' + this.textColour;
                }

                return style;
            });

            Handlebars.registerHelper('roundelConfig', function (roundel) {
                if (roundel && roundel[0] && roundel[0].roundel && roundel[0].roundel.name) {

                    var roundelParams = [];
                    var imageRoundelIndex;
                    for (var x = 0; x < roundel.length; x++) {
                        var roundelParam = '';
                        switch (roundel[x].roundelPosition) {
                            case 'Bottom Right':
                                roundelParam = 'p1_img=';
                                imageRoundelIndex = 1;
                                break;
                            case 'Bottom Left':
                                roundelParam = 'p2_img=';
                                imageRoundelIndex = 2;
                                break;
                            case 'Top Left':
                                roundelParam = 'p3_img=';
                                imageRoundelIndex = 3;
                                break;
                            case 'Top Right':
                                roundelParam = 'p4_img=';
                                imageRoundelIndex = 4;
                                break;

                        }

                        var roundelRatio = roundel[x].roundelRatio;
                        roundelParam += roundel[x].roundel.name + (roundelRatio ? ('&roundelRatio' + imageRoundelIndex + '=' + roundelRatio) : '');
                        roundelParams.push(roundelParam);
                    }

                    return roundelParams.join('&')

                } else {
                    return '';
                }
            });

            Handlebars.registerHelper('splitBlock', function (index, split) {
                if (typeof split === 'undefined') {
                    return ''
                }
                var id = parseInt(index, 10);
                var splitter = split.split('/');
                if (id === 0) {
                    return 'amp-dc-size-' + splitter[0];
                }

                return 'amp-dc-size-' + splitter[1];
            });

            Handlebars.registerHelper('iff', function (a, operator, b, opts) {
                var bool = false;
                switch (operator) {
                    case '==':
                        bool = a == b;
                        break;
                    case '>':
                        bool = a > b;
                        break;
                    case '<':
                        bool = a < b;
                        break;
                    default:
                        throw "Unknown operator " + operator;
                }

                if (bool) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('roundelProperties', function (opts) {
                if (this.roundel && this.roundel[0] && this.roundel[0].roundel && this.roundel[0].roundelPosition && this.roundel[0].roundelRatio) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('showdown', function (text) {
                if (typeof showdown === 'undefined') {
                    return text || '';
                }
                var converter = new showdown.Converter({
                    noHeaderId: true,
                    simpleLineBreaks: true
                });

                var text = converter.makeHtml(text);

                if (typeof text === 'undefined') {
                    text = '';
                }

                return new Handlebars.SafeString(text);
            });

            Handlebars.registerHelper('ampCaVideo', function () {
                var s = ' data-is-firefox=';
                s += +!!(window.navigator.userAgent.indexOf('Firefox') >= 0);

                var dataElement = '<script type="text/plain" class="video-settings"' + s + ' ></script>';
                return new Handlebars.SafeString(dataElement);
            });

            Handlebars.registerHelper("csv", function(str, device) {
              var colors = str.split(',');
                  if(device === 'M') {
                    if(colors[1] !== undefined && colors[1] != false) {
                      return colors[1];
                    } else {
                      if(colors[0] !== undefined && colors[0] != false) {
                        return colors[0];
                      } else {
                        return '000000';
                      }

                    }
                  }

              if(device === 'D') {
                if(colors[0] !== undefined && colors[0] != false) {
                  return colors[0];
                } else {
                  return '000000';
                }
              }
              // No Matches Return Default Black
              return '000000';
            });

            Handlebars.registerHelper("finance", function(price, local) {
              var this_price = price.match(/([1-9])+/g);
              if(local === 'UK') {
                return '&pound;' + Math.floor(parseFloat((this_price[0]) / 48) * 100) / 100 + ' a month for 4 years';
              } else {
                return '&euro;' + Math.floor(parseFloat((this_price[0]) / 36) * 100) / 100 + ' a month for 3 years';
              }

            });


            Handlebars.registerHelper('times', function(n, block) {
            var accum = '';
            for(var i = 0; i < n; ++i) {
                block.data.index = i;
                block.data.first = i === 0;
                block.data.last = i === (n - 1);
                accum += block.fn(this);
            }
                return accum;
            });

            Handlebars.registerHelper("inc", function(value, options) {
                return parseInt(value) + 1;
            });

            Handlebars.registerHelper("getWidth", function(card_type, device) {

              if(card_type === 'Type_A') {

                switch (device) {
                  case "M":
                  return '255';

                  case "D4":
                  return '213';

                  case "D6":
                  return '291';
                }
              }

              if(card_type === 'Type_B') {

                switch (device) {
                  case "M":
                  return '255';

                  case "D4":
                  return '294';

                  case "D6":
                  return '401';
                }

              }

              if(card_type === 'Type_C' || card_type === 'Type_D') {

                switch (device) {
                  case "M":
                  return '540';

                  case "D4":
                  return '456';

                  case "D6":
                  return '622';
                }

              }

              if(card_type === 'Type_E') {
                switch (device) {
                  case "M":
                  return '151';

                  case "D4":
                  return '151';

                  case "D6":
                  return '151';
                }
              }

            });
        }

        else {
            console.warn('Handlebars is not defined, please make sure you included Handlebars library');
        }
    }
}));
