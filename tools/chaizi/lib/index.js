var _0x2e75=['rels','未拆解成功，请检查您输入的是否汉字，简体繁体是否对应上！','split','slice','replace','push','prototype','$ELEMENT','medium','$message','请输入需要拆解的文字内容','warning','type'];(function(_0x5f0795,_0x245ceb){var _0x5020a4=function(_0xa93100){while(--_0xa93100){_0x5f0795['push'](_0x5f0795['shift']());}};_0x5020a4(++_0x245ceb);}(_0x2e75,0x1d6));var _0x50d5=function(_0x4ed24f,_0x203d25){_0x4ed24f=_0x4ed24f-0x0;var _0x157a96=_0x2e75[_0x4ed24f];return _0x157a96;};function toChange(_0x52a78d){var _0x42fa33=_0x52a78d[_0x50d5('0x0')](',');var _0x4ae26e=[];for(var _0x9331c6 in _0x42fa33){var _0x19e819=_0x42fa33[_0x9331c6]['slice'](0x0,0x1);var _0x4e07ad=_0x42fa33[_0x9331c6][_0x50d5('0x1')](0x2);if(_0x19e819!='□'&&_0x19e819!=''&&_0x4e07ad!=''){var _0x3ed53f=_0x4e07ad[_0x50d5('0x0')]('\x09')['map'](_0x2959bf=>{if(_0x2959bf[_0x50d5('0x2')](/(^\s*)|(\s*$)/g,'')!=''){return _0x2959bf;}});_0x4ae26e['push']({'txt':_0x19e819,'h':_0x3ed53f});}}return _0x4ae26e;}var arrFt=null;var arrJt=null;function getRel(_0x17410b,_0x246c81){var _0x27edf4=[];if(!_0x246c81){_0x27edf4=!!arrJt?arrJt:toChange(data_jt);}else{_0x27edf4=!!arrFt?arrFt:toChange(data_ft);}let _0x36c160=_0x17410b[_0x50d5('0x0')]('');let _0x543292=[];for(var _0x42fb6c in _0x36c160){if(_0x36c160[_0x42fb6c]==''&&!/[\u4E00-\u9FA5]/g['test'](_0x36c160[_0x42fb6c])){break;}for(var _0x1e9b7b in _0x27edf4){if(_0x27edf4[_0x1e9b7b]['txt']==_0x36c160[_0x42fb6c]){_0x543292['push'](_0x27edf4[_0x1e9b7b]);}}}return _0x543292;}var trim=function(_0x3433a8){try{return _0x3433a8[_0x50d5('0x2')](/(^\s*)|(\s*$)/g,'');}catch(_0x5a9678){return _0x3433a8;}};function unique(_0x52e959,_0x5ef636){var _0xc74b15=[];var _0x351966=![];for(var _0x39255c in _0x52e959){_0x351966=![];for(var _0x2a8ee1 in _0xc74b15){if(_0xc74b15[_0x2a8ee1][_0x5ef636]==_0x52e959[_0x39255c][_0x5ef636]){_0x351966=!![];}}if(!_0x351966){_0xc74b15[_0x50d5('0x3')](_0x52e959[_0x39255c]);}}return _0xc74b15;}Vue[_0x50d5('0x4')][_0x50d5('0x5')]={'size':_0x50d5('0x6'),'zIndex':0xbb8};new Vue({'el':'#container','data':{'ipt':'','type':![],'rels':null},'methods':{'onSubmit':function(){if(trim(this['ipt'])==''){this[_0x50d5('0x7')]({'message':_0x50d5('0x8'),'type':_0x50d5('0x9')});return;}var _0x4de0b7=getRel(this['ipt'],this[_0x50d5('0xa')]);this['rels']=unique(_0x4de0b7,'txt');if(this[_0x50d5('0xb')]['length']==0x0){this[_0x50d5('0x7')]({'message':_0x50d5('0xc'),'type':_0x50d5('0x9')});return;}}}});
