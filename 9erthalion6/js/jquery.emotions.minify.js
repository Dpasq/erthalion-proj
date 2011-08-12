// jQuery Plugins: On/Off Emtions 
// copyright @ www.phpbasic.com
// Version: 2.2

(function($){$.fn.emotions=function(settings,more_emotions){var _cfg={handle:'a',dir:'emotions/',label:'On Emotions',style:'',class:'',r_alert:1,emotions:{19:'[evil]',21:':))',23:'/:)',48:'<):)',100:':)]',1:':)',20:':((',2:':(',5:';;)',3:';)',6:'[descend]',4:':D',42:':-SS',18:'#:-S',39:':-?',47:'>:P',10:':P',37:'(:|',22:':|',7:':-/',11:':-*',12:'=((',102:'~X(',16:'B-)',17:':-S',24:'=))',25:'O:-)',26:':-B',27:'=;',29:'8-|',30:'L-)',31:':-&;',32:':-$',33:'[-(',34:':O)',35:'8-}',36:'<:-P',8:':x',38:'=P~',40:'#-o',41:'=D>',43:'@-)',44:':^o',45:':-w',46:':-<',13:':-O',15:'[he]',101:':-c',14:'X(',103:':-h',105:'8->'},emotion_ext:'gif'};if(settings)$.extend(_cfg,settings);var obj=this;var default_label=$(_cfg.handle).html();var default_style=$(_cfg.handle).attr('style');var default_css=$(_cfg.handle).attr('class');var funct={__regexp:function(str){var reg=/(\.|\\|\+|\*|\?|\[|\^|\]|\$|\(|\)|\{|\}|\=|\!|\<|\>|\||\:|\-)/ig
return str.replace(reg,"\\$1");},__load:function(){if(more_emotions){$.each(more_emotions,function(id,val){if(_cfg.r_alert&&_cfg.emotions[id]){if(confirm('Emotion '+id+'.'+_cfg.emotion_ext+' <=> '+_cfg.emotions[id]+' does exists. Do you want to replace it by '+val+' ?'))_cfg.emotions[id]=val;;}else{_cfg.emotions[id]=val;}});}obj.each(function(){var str=$(this).html();$.each(_cfg.emotions,function(iEM,bbcode){reg=new RegExp(funct.__regexp(bbcode),"ig");str=str.replace(reg,'<span class="emotion_show '+iEM+'"><img  src="'+_cfg.dir+iEM+'.gif" /></span>');});$(this).html(str);$(_cfg.handle).html(default_label).attr({'style':default_style}).addClass(default_css);})},__remove:function(){$(obj).find('span.emotion_show').each(function(){var iE=Number(this.className.split('emotion_show ')[1]);$(this).attr({'class':''}).addClass('emotion_hide '+iE).html(_cfg.emotions[iE]);});$(_cfg.handle).html(_cfg.label).attr({'style':_cfg.style}).addClass(_cfg.class);},__again:function(){$(obj).find('span.emotion_hide').each(function(){var iE=Number(this.className.split('emotion_hide ')[1]);$(this).attr({'class':''}).addClass('emotion_show '+iE).html('<img  src="'+_cfg.dir+iE+'.'+_cfg.emotion_ext+'" />');});$(_cfg.handle).html(default_label).attr({'style':default_style}).addClass(default_css);}};$(_cfg.handle).toggle(funct.__remove,funct.__again);funct.__load();return false;};})(jQuery);