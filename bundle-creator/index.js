// Clearance Bundle Image Creator V1.1 (PB) Js
$(document).ready(function() {
    $('.clearance_bundle_image_creator').on('click', '#render_image_btn', function(){
      renderNewView();
    });
    //Main Image
    $('#topUp').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[0].value);
        top_offset = parseInt(top_offset - nudge_value);
          renderNewView();
    });
    $('#topDown').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[0].value);
        top_offset = parseInt(top_offset + nudge_value);
          renderNewView();
    });
    $('#leftUp').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[0].value);
        left = parseInt(left - nudge_value);
          renderNewView();
    });
    $('#leftDown').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[0].value);
        left = parseInt(left + nudge_value);
          renderNewView();
    });
    // 1st Sub Image
    $('button#topUp1').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[1].value);
        top1 = parseInt(top1 - nudge_value);
          renderNewView();
    });
    $('button#topDown1').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[1].value);
        top1 = parseInt(top1 + nudge_value);
          renderNewView();
    });
    $('button#leftUp1').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[1].value);
        left1 = parseInt(left1 - nudge_value);
          renderNewView();
    });
    $('button#leftDown1').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[1].value);
        left1 = parseInt(left1 + nudge_value);
          renderNewView();
    });
    // 2nd Sub Image
    $('button#topUp2').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[2].value);
        top2 = parseInt(top2 - nudge_value);
          renderNewView();
    });
    $('button#topDown2').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[2].value);
        top2 = parseInt(top2 + nudge_value);
          renderNewView();
    });
    $('button#leftUp2').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[2].value);
        left2 = parseInt(left2 - nudge_value);
          renderNewView();
    });
    $('button#leftDown2').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[2].value);
        left2 = parseInt(left2 + nudge_value);
          renderNewView();
    });
    // 3rd Sub Image
    $('button#topUp3').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[3].value);
        top3 = parseInt(top3 - nudge_value);
          renderNewView();
    });
    $('button#topDown3').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[3].value);
        top3 = parseInt(top3 + nudge_value);
          renderNewView();
    });
    $('button#leftUp3').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[3].value);
        left3 = parseInt(left3 - nudge_value);
          renderNewView();
    });
    $('button#leftDown3').on('click', function(){
      var nudges = $( "input[id*='nudge']" );
      var nudge_value = parseInt(nudges[3].value);
        left3 = parseInt(left3 + nudge_value);
          renderNewView();
    });
    $('button#updateImageText').on('click', function(){
      var new_image_src = $('input#image_url_text').val();
      $('img#bundle').attr('src', new_image_src);
    });
});

// Functions

function renderNewView(){
  var skus = getSkus();
  //console.log(skus);
  if(skus.length > 1 ){
    var images = getXML(skus);
    renderImage(images);
  }
}

// get SKUs Array
function getSkus(){
  var sku_inputs = document.querySelectorAll('.skus input');
  var sku_list =[];
    for(i=0; i < sku_inputs.length; i++ ) {
      if(sku_inputs[i].value !== '') {
        sku_list.push(sku_inputs[i].value);
      }
    }
  return sku_list;
}

function getXML(sku_list){
  // loop through SKUS
  var images =[];

  $.each(sku_list, function(index, sku){
    var template = 'https://www.dfs.co.uk/webapp/wcs/stores/servlet/GetAmplienceProductDataCmd?sku=' + sku;
    var ajaxRequest = 'ajaxRequest' + index;
    ajaxRequest = $.ajax({
                url: template,
                type: "get",
                async: false,
                dataType: 'text'
            }).done(function (response, textStatus, jqXHR){

              //clean up xml (remove invalid &pounds;)
              var cleanXML = response.replace(/&pound;/g,'&#163;');
              var XMLdoc = $.parseXML( cleanXML ), // convert back to XML
              $xml = $( XMLdoc ),

              product_image = $xml.find('images medium').text(),
              link_url = $xml.find('link').first().text(),
              range_name = $xml.find('text').text();
              product_name = $xml.find( "name" ).text(),

              // Load Image with Params from Feed

              images.push({
                src: product_image.replace("https://images.dfs.co.uk/i/dfs/", ""),
                link: link_url,
                range: range_name,
                product: product_name
              });

            }).fail(function (textStatus){
               // show error
               console.log(textStatus.statusText);
               console.log('Failed to load XML Document');

       });
  });
  return images;
}

function renderImage(images){
var template = 'https://x1.adis.ws/v1/media/graphics/i/dfs/clearance_bundle_template' + images.length;
var params = '?fmt=jpg&';

if(images.length === 4) {
  width = $('input#width').val();
  height = $('input#height').val();
  top_offset = (typeof top_offset !== 'undefined') ? top_offset : 430,
  left = (typeof left !== 'undefined') ? left : 144,
  width1 = $('input#width1').val(),
  height1 = $('input#height1').val(),
  top1 = (typeof top1 !== 'undefined') ? top1 : 882,
  left1 = (typeof left1 !== 'undefined') ? left1 : 5,
  width2 = $('input#width2').val(),
  height2 = $('input#height2').val(),
  top2 = (typeof top2 !== 'undefined') ? top2 : 882,
  left2 = (typeof left2 !== 'undefined') ? left2 : 330,
  width3 = $('input#width3').val(),
  height3 = $('input#height3').val(),
  top3 = (typeof top3 !== 'undefined') ? top3 : 882,
  left3 = (typeof left3 !== 'undefined') ? left3 : 680;

  params += 'main_product=' + images[0].src;
  params += '&left_product=' + images[1].src;
  params += '&middle_product=' + images[2].src;
  params += '&right_product=' +images[3].src;
  params += "&width=" + width;
  params += "&height=" + height;
  params += "&top=" + top_offset;
  params += "&left=" + left;
  params += "&width1=" + width1;
  params += "&height1=" + height1;
  params += "&left1=" + left1;
  params += "&top1=" + top1;
  params += "&width2=" + width2;
  params += "&height2=" + height2;
  params += "&left2=" + left2;
  params += "&top2=" + top2;
  params += "&width3=" + width3;
  params += "&height3=" + height3;
  params += "&left3=" + left3;
  params += "&top3=" + top3;

  $('.attributes').removeClass('active');
  $('.attributes.main_image, .attributes.left_image, .attributes.middle_image, .attributes.right_image').addClass('active');
}
if(images.length === 3) {

  width = $('input#width').val();
  height = $('input#height').val();
  top_offset = (typeof top_offset !== 'undefined') ? top_offset : 430,
  left = (typeof left !== 'undefined') ? left : 144,
  width1 = $('input#width1').val(),
  height1 = $('input#height1').val(),
  top1 = (typeof top1 !== 'undefined') ? top1 : 882,
  left1 = (typeof left1 !== 'undefined') ? left1 : 193,
  width2 = $('input#width2').val(),
  height2 = $('input#height2').val(),
  top2 = (typeof top2 !== 'undefined') ? top2 : 882,
  left2 = (typeof left2 !== 'undefined') ? left2 : 506;

  params += 'main_product=' + images[0].src;
  params += '&left_product=' + images[1].src;
  params += '&right_product=' +images[2].src;
  params += "&width=" + width;
  params += "&height=" + height;
  params += "&top=" + top_offset;
  params += "&left=" + left;
  params += "&width1=" + width1;
  params += "&height1=" + height1;
  params += "&left1=" + left1;
  params += "&top1=" + top1;
  params += "&width2=" + width2;
  params += "&height2=" + height2;
  params += "&left2=" + left2;
  params += "&top2=" + top2;
  $('.attributes').removeClass('active');
  $('.middle_image h4').text('Right Image');
  $('.attributes.main_image, .attributes.left_image, .attributes.middle_image').addClass('active');
}
if(images.length === 2) {

  width = $('input#width').val();
  height = $('input#height').val();
  top_offset = (typeof top_offset !== 'undefined') ? top_offset : 430,
  left = (typeof left !== 'undefined') ? left : 144,
  width1 = $('input#width1').val(),
  height1 = $('input#height1').val(),
  top1 = (typeof top1 !== 'undefined') ? top1 : 882,
  left1 = (typeof left1 !== 'undefined') ? left1 : 355;

  params += 'main_product=' + images[0].src;
  params += '&bottom_product=' + images[1].src;
  params += "&width=" + width;
  params += "&height=" + height;
  params += "&top=" + top_offset;
  params += "&left=" + left;
  params += "&width1=" + width1;
  params += "&height1=" + height1;
  params += "&left1=" + left1;
  params += "&top1=" + top1;
  $('.attributes').removeClass('active');
  $('.left_image h4').text('Bottom Image');
  $('.attributes.main_image, .attributes.left_image').addClass('active');
}

var image_src = template + params;
$('img#bundle').attr('src', image_src);
$('input#image_url_text').val(image_src);
}
