googletag.cmd.push(function () {
var mapping_branding_left = googletag.sizeMapping().addSize([1050, 0], [460, 1200]).//desktop
addSize([1024, 0], []).//desktop
addSize([768, 0], []).//tablet
addSize([480, 0], []).//mobile
addSize([0, 0], []).//other
build();

var mapping_branding_right = googletag.sizeMapping().addSize([1050, 0], [460, 1200]).//desktop
addSize([1024, 0], []).//desktop
addSize([768, 0], []).//tablet
addSize([480, 0], []).//mobile
addSize([0, 0], []).//other
build();

var mapping_top = googletag.sizeMapping().addSize([1500, 0], [[1280, 120], [728, 90],  [970, 90], [980, 120], [1280, 50], [980, 90], [960, 90]]).//desktop           
addSize([1000, 0], [[728, 90], [970, 90], [980, 120], [980, 90], [960, 90], [960,180], [970, 250], [1000, 50], [1000, 120]]).//desktop         
addSize([768, 0], [728, 90]).//tablet
addSize([480, 0], [[300, 50], [300, 100], [320, 100]]).//mobile
addSize([0, 0], [[300, 50], [300, 100], [320, 100]]).//other
build();
            
var mapping_top2 = googletag.sizeMapping().addSize([1500, 0], [[960, 90], [980, 120], [970, 90], [980, 90], [960, 180], [728, 90], [970, 250]]).//desktop
addSize([1000, 0], [[960, 90], [980, 120], [970, 90], [980, 90], [960, 180], [728, 90], [970, 250]]).//desktop
addSize([768, 0], [728, 90]).//tablet
addSize([480, 0], [[300, 50], [300, 100]]).//mobile
addSize([0, 0], [[300, 50], [300, 100]]).//other
build(); 

var mapping_premium = googletag.sizeMapping().addSize([1500, 0], [[300, 600], [300, 250]]).//desktop
addSize([1024, 0], [300, 250]).//desktop
addSize([768, 0], [300, 250]).//tablet
addSize([480, 0], [[300, 600], [300, 250]]).//mobile
addSize([0, 0], [[300, 600], [300, 250]]).//other
build();

var mapping_premium2 = googletag.sizeMapping().addSize([1050, 0], [300, 250]).//desktop
addSize([1024, 0], [300, 250]).//desktop
addSize([768, 0], [300, 250]).//tablet
addSize([480, 0], [300, 250]).//mobile
addSize([0, 0], [300, 250]).//other
build();

var mapping_clickblock1 = googletag.sizeMapping().addSize([1050, 0], [[620, 250], [620, 350], [620, 400]]).//desktop
addSize([1024, 0], [[620, 250], [620, 350], [620, 400]]).//desktop
addSize([768, 0], [[620, 250], [620, 350], [620, 400]]).//tablet
addSize([480, 0], [300, 460]).//mobile
addSize([0, 0], [300, 460]).//other
build();
            
var mapping_clickblock2 = googletag.sizeMapping().addSize([1050, 0], [[620, 250], [620, 350], [620, 400]]).//desktop
addSize([1024, 0], [[620, 250], [620, 350], [620, 400]]).//desktop
addSize([768, 0], [[620, 250], [620, 350], [620, 400]]).//tablet
addSize([480, 0], [300, 460]).//mobile
addSize([0, 0], [300, 460]).//other
build();

var mapping_special = googletag.sizeMapping().addSize([0, 0], [300, 100]).build();

var mapping_rich = googletag.sizeMapping().
addSize([1500, 0], [[1440, 180], [960, 200], [960, 120]]). //desktop
addSize([1024, 0], [[960, 200], [960, 120], [728, 90], [728, 180]]). //desktop
addSize([768, 0], [[728, 90], [728, 180]]). //tablet
addSize([480, 0], [[320, 240], [320, 100], [320,50], [300,100]]). //mobile
addSize([0, 0], [[320, 240], [320, 100],[320,50], [300,100], [320,200]]). //other
build();

googletag.pubads().enableSingleRequest();
googletag.pubads().collapseEmptyDivs();
googletag.pubads().setTargeting('domain', ["{{Page Hostname}}"]);
googletag.pubads().setTargeting('page_url', ["{{Page Path}}"]);                
googletag.pubads().setTargeting('razdel', ["{{page_razdel}}"]);
googletag.pubads().setTargeting('rubric', ["{{page_rubric}}"]);
googletag.pubads().setTargeting('tags', ["{{page_tags}}"]);
googletag.pubads().setTargeting('news_id', ["{{news_id}}"]);
googletag.enableServices();

                var windowWidth = document.documentElement.clientWidth;
            	
                if (windowWidth >= 1200) {
                    left_branding = googletag.defineSlot('/267254459/liganet_left_branding', [460, 1200], 'div-gpt-ad-1504101717072-0').defineSizeMapping(mapping_branding_left).addService(googletag.pubads());
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1504101717072-0'); console.log('left_br');}); 
                    right_branding = googletag.defineSlot('/267254459/liganet_right_branding', [460, 1200], 'div-gpt-ad-1504101717072-1').defineSizeMapping(mapping_branding_right).addService(googletag.pubads());
                  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1504101717072-1'); console.log('right_br');}); 			
                  googletag.pubads().refresh([left_branding]);
                  googletag.pubads().refresh([right_branding]);
                };

                top = googletag.defineSlot('/267254459/liganet_TOP', [[1280, 120], [728, 90], [320, 50], [970, 90], [300, 100], [980, 120], [1280, 50], [980, 90], [320, 100], [960, 90], [960,180], [300, 50], [1000, 50], [1000, 120]], 'div-gpt-ad-1501856944836-10').defineSizeMapping(mapping_top).addService(googletag.pubads());
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-10'); console.log('top');});
                googletag.pubads().refresh([top]);
            
				premium = googletag.defineSlot('/267254459/liganet_premium', [[300, 600], [300, 250]], 'div-gpt-ad-1501856944836-6').defineSizeMapping(mapping_premium).addService(googletag.pubads());
				googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-6'); console.log('premium');});  
           
            
            blockbiznotloaded=true;
            blockfinnotloaded=true;
            block3rosnotloaded=true;
            block4rosnotloaded=true;
			blockrozetkanotloaded=true;
            blockukrnetnotloaded=true;
            blockintextnotloaded=true;
            blockclick1notloaded=true;
			blockclick2notloaded=true;
			blocktop2notloaded=true;
            blocktop3notloaded=true;
            blocktop4notloaded=true;
            blockpartnersnotloaded=true;			
            	window.onscroll = function() {
				var myoffset = window.scrollY + window.innerHeight + 50;
				var blockbiz_el=document.getElementById("div-gpt-ad-1501856944836-3");				
                if (blockbiz_el !== null) {
				//console.log ('blockbiz_el');
				var blockbiz_el_rect = blockbiz_el.getBoundingClientRect();
            	if (myoffset > blockbiz_el_rect.top + document.body.scrollTop) {
                  if (blockbiznotloaded) {
                	blockbiz = googletag.defineSlot('/267254459/liganet_main_blockbiz', [300, 250], 'div-gpt-ad-1501856944836-3').defineSizeMapping(mapping_premium2).addService(googletag.pubads());
					googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-3'); console.log('blockbiz');});                                 
                    googletag.pubads().refresh([blockbiz]);
                    blockbiznotloaded= false;
                  }
				}}
				var blockfin_el=document.getElementById("div-gpt-ad-1501856944836-4");				
                if (blockfin_el !== null) {
				var blockfin_el_rect = blockfin_el.getBoundingClientRect();
            	if (myoffset > blockfin_el_rect.top + document.body.scrollTop) {
                  if (blockfinnotloaded) {
                		blockfin = googletag.defineSlot('/267254459/liganet_main_blockfinance', [300, 250], 'div-gpt-ad-1501856944836-4').defineSizeMapping(mapping_premium2).addService(googletag.pubads());
            			googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-4'); console.log('blockfin');});
                        googletag.pubads().refresh([blockfin]);
                    blockfinnotloaded= false;
                  }
				}      
                }
				var block3ros_el=document.getElementById("div-gpt-ad-1501856944836-0");				
                if (block3ros_el !== null) {
				var block3ros_el_rect = block3ros_el.getBoundingClientRect();
            	if (myoffset > block3ros_el_rect.top + document.body.scrollTop) {
                  if (block3rosnotloaded) {
                	block3ros = googletag.defineSlot('/267254459/liganet_3_ros', [300, 250], 'div-gpt-ad-1501856944836-0').defineSizeMapping(mapping_premium2).addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-0'); console.log('3ros');});
                    googletag.pubads().refresh([block3ros]);
                    block3rosnotloaded= false;
                  }
				} 
                }
				var block4ros_el=document.getElementById("div-gpt-ad-1501856944836-1");				
                if (block4ros_el !== null) {
				var block4ros_el_rect = block4ros_el.getBoundingClientRect();
            	if (myoffset > block4ros_el_rect.top + document.body.scrollTop) {
                  if (block4rosnotloaded) {
                	block4ros = googletag.defineSlot('/267254459/liganet_4_ros', [300, 250], 'div-gpt-ad-1501856944836-1').defineSizeMapping(mapping_premium2).addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-1'); console.log('4ros');});
                    googletag.pubads().refresh([block4ros]);
                    block4rosnotloaded= false;
                  }
				}
                }
				var blockrozetka_el=document.getElementById("div-gpt-ad-1501856944836-9");				
                if (blockrozetka_el !== null) {
				var blockrozetka_el_rect = blockrozetka_el.getBoundingClientRect();
            	if (myoffset > blockrozetka_el_rect.top + document.body.scrollTop) {
                  if (blockrozetkanotloaded) {
                	blockrozetka = googletag.defineSlot('/267254459/liganet_rozetka', [300, 250], 'div-gpt-ad-1501856944836-9').defineSizeMapping(mapping_premium2).addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-9'); console.log('rozetka');});
                    googletag.pubads().refresh([blockrozetka]);
                    blockrozetkanotloaded= false;
                  }
				}
                }
				var blockukrnet_el=document.getElementById("div-gpt-ad-1501856944836-11");				
                if (blockukrnet_el !== null) {
				var blockukrnet_el_rect = blockukrnet_el.getBoundingClientRect();
            	if (myoffset > blockukrnet_el_rect.top + document.body.scrollTop) {
                  if (blockukrnetnotloaded) {
                	blockukrnet = googletag.defineSlot('/267254459/liganet_ukrnet', [300, 250], 'div-gpt-ad-1501856944836-11').defineSizeMapping(mapping_premium2).addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-11'); console.log('ukrnet');});                                  
                    googletag.pubads().refresh([blockukrnet]);
                    blockukrnetnotloaded= false;
					window.dispatchEvent(new Event('resize'));
                    //$(window).trigger('resize');
                  }
				}
                }	
				var blockintext_el=document.getElementById("div-gpt-ad-1510915977821-0");				
                if (blockintext_el !== null) {
				//console.log ('blockintext_el');
				var blockintext_el_rect = blockintext_el.getBoundingClientRect();
            	if (myoffset > blockintext_el_rect.top + document.body.scrollTop) {
                  if (blockintextnotloaded) {
                	marketing_intext = googletag.defineSlot('/267254459/liganet_marketing_intext', ['fluid'], 'div-gpt-ad-1510915977821-0').addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1510915977821-0'); console.log('marketing_intext');});
                    googletag.pubads().refresh([marketing_intext]);
                    blockintextnotloaded= false;
                  }
				}
                }
				var blockclick1_el=document.getElementById("div-gpt-ad-1523365890173-0");				
                if (blockclick1_el !== null) {
				var blockclick1_el_rect = blockclick1_el.getBoundingClientRect();
            	if (myoffset > blockclick1_el_rect.top + document.body.scrollTop) {
                  if (blockclick1notloaded) {
                	clickblock1 = googletag.defineSlot('/267254459/liganet_clickblock1', [[300, 460], [620, 250], [620, 350], [620, 400]], 'div-gpt-ad-1523365890173-0').defineSizeMapping(mapping_clickblock1).addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1523365890173-0'); console.log('clickblock1');});
                    googletag.pubads().refresh([clickblock1]);
                    blockclick1notloaded= false;
                  }
				}
                }
				var blockclick2_el=document.getElementById("div-gpt-ad-1523365890173-1");				
                if (blockclick2_el !== null) {
				var blockclick2_el_rect = blockclick2_el.getBoundingClientRect();
            	if (myoffset > blockclick2_el_rect.top + document.body.scrollTop) {
                  if (blockclick2notloaded) {
                	clickblock2 = googletag.defineSlot('/267254459/liganet_clickblock2', [[300, 460], [620, 250], [620, 350], [620, 400]], 'div-gpt-ad-1523365890173-1').defineSizeMapping(mapping_clickblock2).addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1523365890173-1'); console.log('clickblock2');});
                    googletag.pubads().refresh([clickblock2]);
                    blockclick2notloaded= false;
                  }
				}
                }
				var blocktop2_el=document.getElementById("div-gpt-ad-1555595845069-0");				
                if (blocktop2_el !== null) {
				var blocktop2_el_rect = blocktop2_el.getBoundingClientRect();
            	if (myoffset > blocktop2_el_rect.top + document.body.scrollTop) {
                  if (blocktop2notloaded) {
                	top2 = googletag.defineSlot('/267254459/liganet_TOP2', [[960, 180], [970, 90], [970, 250], [960, 90], [980, 120], [728, 90], [980, 90], [300, 50], [300, 100]], 'div-gpt-ad-1555595845069-0').defineSizeMapping(mapping_top2).addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1555595845069-0'); console.log('top2');});
                    googletag.pubads().refresh([top2]);
                    blocktop2notloaded= false;
                  }
				}
                }
				var blocktop3_el=document.getElementById("div-gpt-ad-1600433480425-0");				
                if (blocktop3_el !== null) {
				var blocktop3_el_rect = blocktop3_el.getBoundingClientRect();
            	if (myoffset > blocktop3_el_rect.top + document.body.scrollTop) {
                  if (blocktop3notloaded) {
                	top3 = googletag.defineSlot('/267254459/liganet_TOP3', [[960, 180], [970, 90], [970, 250], [960, 90], [980, 120], [728, 90], [980, 90], [300, 50], [300, 100]], 'div-gpt-ad-1600433480425-0').defineSizeMapping(mapping_top2).addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1600433480425-0'); console.log('top3');});
                    googletag.pubads().refresh([top3]);
                    blocktop3notloaded= false;
                  }
				}
                }
				var blocktop4_el=document.getElementById("div-gpt-ad-1600435636777-0");				
                if (blocktop4_el !== null) {
				var blocktop4_el_rect = blocktop4_el.getBoundingClientRect();
            	if (myoffset > blocktop4_el_rect.top + document.body.scrollTop) {
                  if (blocktop4notloaded) {
                	top4 = googletag.defineSlot('/267254459/liganet_TOP4', [[960, 180], [970, 90], [970, 250], [960, 90], [980, 120], [728, 90], [980, 90], [300, 50], [300, 100]], 'div-gpt-ad-1600435636777-0').defineSizeMapping(mapping_top2).addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1600435636777-0'); console.log('top4');});
                    googletag.pubads().refresh([top4]);
                    blocktop4notloaded= false;
                  }
				}
                }                  
				var blockpartners_el=document.getElementById("div-gpt-ad-1501856944836-5");				
                if (blockpartners_el !== null) {
				var blockpartners_el_rect = blockpartners_el.getBoundingClientRect();
            	if (myoffset > blockpartners_el_rect.top + document.body.scrollTop) {
                  if (blockpartnersnotloaded) {
                	partners = googletag.defineSlot('/267254459/liganet_partners', [300, 250], 'div-gpt-ad-1501856944836-5').defineSizeMapping(mapping_premium2).addService(googletag.pubads());
            		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-5'); console.log('partners');});
                    googletag.pubads().refresh([partners]);
                    blockpartnersnotloaded= false;
                  }
				}
                }                   
                };            

            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
              var slotElementId = event.slot.getSlotElementId();
              var adfree_button_afterad = '<div class="adfree_button_afterad"><a href="https://www.liga.net/adfree?utm_source=after_banner">Отключить рекламу</a></div>';
              var adfree_button_afterad2 = '<div class="adfree_button_afterad2"><a href="https://www.liga.net/adfree?utm_source=after_banner">Отключить рекламу</a></div>';
              var newsid = {{news_id}};
              if (slotElementId == "div-gpt-ad-1501856944836-6") {
                //if (event.slot === premium || event.slot === top || event.slot === rich) {
                    // do something related to the slot                         
if(event.isEmpty == false) {
  	var premium_width = document.getElementById("google_ads_iframe_/267254459/liganet_premium_0").getAttribute("width");
	var premium_height = document.getElementById("google_ads_iframe_/267254459/liganet_premium_0").getAttribute("height");
	document.getElementById("google_ads_iframe_/267254459/liganet_premium_0").setAttribute('style', 'width:' + premium_width + 'px !important;' + ' height:' + premium_height + 'px !important;');  
	var premium1d_el_next=document.querySelectorAll('.premium-1d > div')[0];
	if (premium1d_el_next !== undefined) {
    var premuimFirstHeightD = premium1d_el_next.getBoundingClientRect().height;
    if(premuimFirstHeightD < 400 && premuimFirstHeightD > 0){
      premium2 = googletag.defineSlot('/267254459/liganet_premium2', [300, 250], 'div-gpt-ad-1501856944836-7').defineSizeMapping(mapping_premium2).addService(googletag.pubads());
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-7'); console.log('premium2d');}); 
      googletag.pubads().refresh([premium2]);
	  document.querySelectorAll('.premium-2d')[0].setAttribute('style', 'display: block !important');
      if (document.querySelector("body > div.pre-header") !=null && newsid != 0) {
        document.querySelectorAll('.premium-1d')[0].insertAdjacentHTML('afterend', adfree_button_afterad2);
        document.querySelectorAll('.premium-2d')[0].insertAdjacentHTML('afterend', adfree_button_afterad2);
        }
    }
    if(premuimFirstHeightD >= 590 || premuimFirstHeightD == 0){
		document.querySelectorAll('.premium-1d')[0].parentNode.nextElementSibling.setAttribute('style', 'display: none !important');        
		document.querySelectorAll('.premium-1d')[0].classList.add('premium-plashka');
        if (document.querySelector("body > div.pre-header") !=null && newsid != 0) {
        document.querySelectorAll('.premium-1d')[0].insertAdjacentHTML('afterend', adfree_button_afterad);
        }
      	console.log('premium2d close');
    }}
    
	var premium1x_el_next=document.querySelectorAll('.premium-1x > div')[0];
	if (premium1x_el_next !== undefined) {
    var premuimFirstHeightX = premium1x_el_next.getBoundingClientRect().height;
    if(premuimFirstHeightX < 400 && premuimFirstHeightX > 0){
      premium2 = googletag.defineSlot('/267254459/liganet_premium2', [300, 250], 'div-gpt-ad-1501856944836-7').defineSizeMapping(mapping_premium2).addService(googletag.pubads());
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-7'); console.log('premium2x');});
      googletag.pubads().refresh([premium2]);
	  document.querySelectorAll('.premium-2x')[0].setAttribute('style', 'display: block !important');
        if (document.querySelector("body > div.pre-header") !=null && newsid != 0) {
        document.querySelectorAll('.premium-1x')[0].insertAdjacentHTML('afterend', adfree_button_afterad2);
        document.querySelectorAll('.premium-2x')[0].insertAdjacentHTML('afterend', adfree_button_afterad2);
        }
    }
    if(premuimFirstHeightX >= 590 || premuimFirstHeightX == 0){
		document.querySelectorAll('.premium-1x')[0].parentNode.nextElementSibling.setAttribute('style', 'display: none !important');        
		document.querySelectorAll('.premium-1x')[0].classList.add('premium-plashka');
            if (document.querySelector("body > div.pre-header") !=null && newsid != 0) {
        document.querySelectorAll('.premium-1x')[0].insertAdjacentHTML('afterend', adfree_button_afterad);        
        }
      	console.log('premium2x close');
    }
	}
    
	var premium1c_el_next=document.querySelectorAll('.premium-1c > div')[0];
	if (premium1c_el_next !== undefined) {
	//console.log ('premium1c_el_next');
    var premuimFirstHeightC = premium1c_el_next.getBoundingClientRect().height;
    if(premuimFirstHeightC > 0){
      premium2 = googletag.defineSlot('/267254459/liganet_premium2', [300, 250], 'div-gpt-ad-1501856944836-7').defineSizeMapping(mapping_premium2).addService(googletag.pubads());
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1501856944836-7'); console.log('premium2c');});
      googletag.pubads().refresh([premium2]);
	  document.querySelectorAll('.premium-2c')[0].setAttribute('style', 'display: block !important');
    }
	}
}
}
            if (slotElementId == "div-gpt-ad-1501856944836-10") {
				var top_el = document.querySelectorAll('#div-gpt-ad-1501856944836-10 > div > iframe')[0];
                var top_bnr_el = document.getElementsByClassName('top-bnr')[0];
                var banner_top_el = document.getElementsByClassName('banner-top')[0];
				if (top_el !== undefined) {						
					var topWidthX = top_el.width;
                  	var topWidthY = top_el.height;
					console.log(topWidthX + '*' + topWidthY);
					if (topWidthX > 999) {						
						if (top_bnr_el !== undefined) {
							top_bnr_el.style.margin = "0px auto 20px auto";
                            top_el.style.width = topWidthX + 'px';
						}						
						if (banner_top_el !== undefined) {
							banner_top_el.style.margin = "0px auto 20px auto"; 
                            top_el.style.width = topWidthX + 'px';
						}
					} else {						
						if (top_bnr_el !== undefined) {
                            top_el.style.width = topWidthX + 'px';
						}						
						if (banner_top_el !== undefined) {
                            top_el.style.width = topWidthX + 'px';
						}       
                        if (topWidthY < 120) {
						rich = googletag.defineSlot('/267254459/liganet_rich_new', [[320, 50], [728, 180], [960, 120], [1440, 180], [728, 90], [320, 240], [320, 100], [320,200], [300, 100], [960, 200]], 'div-gpt-ad-1542014887240-0').defineSizeMapping(mapping_rich).addService(googletag.pubads());
				  		console.log('rich define');
						richout = googletag.defineOutOfPageSlot('/267254459/liganet_rich', 'div-gpt-ad-1545137163032-0').addService(googletag.pubads());
				  		console.log('richout define');                      
						console.log('top rendered');
                    	}
					}
				}
			}
              
            if (slotElementId == "div-gpt-ad-1555595845069-0") {
				var top_el2 = document.querySelectorAll('#div-gpt-ad-1555595845069-0 > div > iframe')[0];
				if (top_el2 !== undefined) {							
					var topWidthX2 = top_el2.width;					
                    var top_bnr_el2 = document.getElementsByClassName('top-bnr')[0];
                    var banner_top_el2 = document.getElementsByClassName('banner-top')[0];
					console.log(topWidthX2);
					if (topWidthX2 > 999) {						
						if (top_bnr_el2 !== undefined) {
							top_bnr_el2.style.margin = "0px auto 20px auto";
                            top_el2.style.width = topWidthX2 + 'px';
						}
						if (banner_top_el2 !== undefined) {
							banner_top_el2.style.margin = "0px auto 20px auto"; 
                            top_el2.style.width = topWidthX2 + 'px';
						}
					} else {						
						if (top_bnr_el2 !== undefined) {
                            top_el2.style.width = topWidthX2 + 'px';
						}						
						if (banner_top_el2 !== undefined) {
                            top_el2.style.width = topWidthX2 + 'px';
						}                      
					console.log('top2 rendered');
					}
				}
			}

           
		   if (slotElementId == "div-gpt-ad-1542014887240-0") {
		    
			if(event.isEmpty == true){
		       	document.getElementById('catfish-wrapper').style.display="none";
              	googletag.cmd.push(function() { googletag.display('div-gpt-ad-1545137163032-0'); });
                googletag.pubads().refresh([richout]);
              	console.log('rich not rendered');
		    }else{
              console.log('rich rendered');
				document.getElementById('catfish-close-btn').style.display="block";
				document.getElementById('catfish-close-btn').style.visibility="visible";
				document.getElementById('catfish-wrapper').style.display="block";
				document.getElementById('catfish-wrapper').style.visibility = "visible";
				document.getElementById('div-gpt-ad-1542014887240-0').style.display = "block";
                googletag.pubads().refresh([rich]);
				//document.getElementById('catfish-close-btn').style.left = close_position_left + "px";
				//document.getElementById('catfish-close-btn').style.top = close_position_top + "px";
              	googletag.destroySlots([richout]);
				console.log('richout destroyed');
		    };			
		   };
});
});
