  // Wrap Videos by building new VideoJs Wrapper
  if(!amp){
    amp = {};
  }
  amp.viewer = function(id,instance){
    console.log('id', id, 'target', instance.target);
    amp.viewer[instance.target + '_src'] = document.getElementById(instance.target).src.split('?');

    var context = {
      "id" : id,
      "target" : instance.target,
      "src" : amp.viewer[instance.target + '_src'][0],
      "queryStrings" : amp.viewer[instance.target + '_src'][1],
      "height" : instance.height,
      "width" : instance.width
    }

    var videoTemplate = Handlebars.templates.dfsVideoEmbed(context);
    var videoEmbedApp = document.getElementById(instance.target);
        $(videoEmbedApp).after('<div class="'+ instance.target +'"></div>');
        $(videoEmbedApp).remove();
        $('.'+instance.target).html(videoTemplate);

  }
