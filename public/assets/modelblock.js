// JavaScript Document
$(document).ready(function(){function e(){$("div#models a.model-box-open-link").click(function(e){var t=$(this).parents("div.model-box").index();$("div.model-box:eq("+t+") div.model-box-links li.closed").slideToggle(400)})}e()});